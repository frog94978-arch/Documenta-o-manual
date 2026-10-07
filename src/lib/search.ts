import { DocPage, pages } from "@/data/documentation";
import { Submodule, submodules } from "@/data/submodules";
import { comprasCadastroContent } from "@/data/compras-content";
import { comprasRelatorioContent } from "@/data/compras-relatorio-content";

export interface SearchResult {
  id: string;
  title: string;
  description: string;
  url: string;
  type: "page" | "submodule" | "option";
  module?: string;
}

type ContentMap = Record<string, string>;

const contentMaps: ContentMap[] = [comprasCadastroContent, comprasRelatorioContent];
const normalize = (value: string) => value
  .normalize("NFD")
  .replace(/[\u0300-\u036f]/g, "")
  .toLocaleLowerCase("pt-BR");

const toSnippet = (content: string, query: string) => {
  const plainText = content
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/[#*_`>-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  const normalizedText = normalize(plainText);
  const matchIndex = normalize(query)
    .split(/\s+/)
    .map((term) => normalizedText.indexOf(term))
    .filter((index) => index >= 0)
    .sort((first, second) => first - second)[0] ?? -1;
  const start = matchIndex > 55 ? matchIndex - 55 : 0;
  const snippet = plainText.slice(start, start + 150).trim();
  return `${start > 0 ? "..." : ""}${snippet}${start + 150 < plainText.length ? "..." : ""}`;
};

const categoryTerms: Record<string, string[]> = {
  cadastro: ["cadastro", "cadastros"],
  consulta: ["consulta", "consultas"],
  relatorio: ["relatorio", "relatorios"],
  procedimentos: ["procedimento", "procedimentos"],
};

const contentForOption = (submodule: Submodule, category: string, option: string) => {
  const optionName = normalize(option);
  const moduleNames = [normalize(submodule.title), normalize(submodule.id)];
  const categoryMarkers = categoryTerms[category] ?? [];
  const matchingContent = new Set<string>();

  for (const contentMap of contentMaps) {
    for (const [key, content] of Object.entries(contentMap)) {
      const normalizedKey = normalize(key);
      if (!normalizedKey.includes(optionName)) continue;

      const hasModuleContext = moduleNames.some((name) => normalizedKey.includes(name));
      const hasCategoryMarker = categoryMarkers.some((marker) => normalizedKey.includes(marker));
      const belongsToOtherCategory = Object.entries(categoryTerms).some(([otherCategory, markers]) =>
        otherCategory !== category && markers.some((marker) => normalizedKey.includes(marker))
      );

      if (belongsToOtherCategory && !hasCategoryMarker) continue;
      const genericComprasArticle = normalizedKey === optionName && submodule.id === "compras";
      if (hasModuleContext || genericComprasArticle) {
        matchingContent.add(content);
      }
    }
  }

  return [...matchingContent].join(" ");
};

const buildOptionUrl = (submodule: Submodule, category: string, option: string) => {
  const params = new URLSearchParams({
    submodule: submodule.id,
    category,
    section: option,
  });
  return `/docs/modulos/${submodule.module}?${params.toString()}`;
};

const pageResult = (page: DocPage): SearchResult => ({
  id: `page:${page.category}:${page.id}`,
  title: page.title,
  description: page.content,
  url: `/docs/${page.category}/${page.id}`,
  type: "page",
});

const buildSearchIndex = (): SearchResult[] => {
  const results = pages.map(pageResult);

  for (const submodule of submodules) {
    const areaUrl = `/docs/modulos/${submodule.module}?submodule=${encodeURIComponent(submodule.id)}`;
    results.push({
      id: `submodule:${submodule.id}`,
      title: submodule.title,
      description: `Módulo ${submodule.title} da área ${submodule.module}`,
      url: areaUrl,
      type: "submodule",
      module: submodule.module,
    });

    for (const [category, options] of Object.entries(submodule.options)) {
      for (const option of options) {
        const articleContent = contentForOption(submodule, category, option);
        results.push({
          id: `option:${submodule.id}:${category}:${option}`,
          title: `${submodule.title} > ${option}`,
          description: articleContent || `Opção ${option} na categoria ${category}`,
          url: buildOptionUrl(submodule, category, option),
          type: "option",
          module: submodule.title,
        });
      }
    }
  }

  return results;
};

let cachedIndex: SearchResult[] | undefined;

export function combinedSearch(query: string): SearchResult[] {
  const normalizedQuery = normalize(query).trim();
  if (!normalizedQuery) return [];

  const terms = normalizedQuery.split(/\s+/).filter(Boolean);
  cachedIndex ??= buildSearchIndex();

  return cachedIndex
    .filter((result) => {
      const searchableText = normalize(`${result.title} ${result.description} ${result.module ?? ""}`);
      return terms.every((term) => searchableText.includes(term));
    })
    .sort((first, second) => {
      const firstTitle = normalize(first.title);
      const secondTitle = normalize(second.title);
      const firstRank = firstTitle.startsWith(normalizedQuery) ? 0 : firstTitle.includes(normalizedQuery) ? 1 : first.type === "option" ? 2 : 3;
      const secondRank = secondTitle.startsWith(normalizedQuery) ? 0 : secondTitle.includes(normalizedQuery) ? 1 : second.type === "option" ? 2 : 3;
      return firstRank - secondRank || first.title.localeCompare(second.title, "pt-BR");
    })
    .map((result) => ({
      ...result,
      description: toSnippet(result.description, query),
    }));
}
