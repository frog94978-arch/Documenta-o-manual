import { DocPage, pages } from "@/data/documentation";
import { Submodule, submodules } from "@/data/submodules";

export type SearchResult = 
  | ({ type: "page" } & DocPage)
  | ({ type: "submodule" } & Submodule);

export function combinedSearch(query: string): SearchResult[] {
  const lowerQuery = query.toLowerCase();
  const results: SearchResult[] = [];

  // Search DocPages
  pages.forEach(page => {
    if (
      page.title.toLowerCase().includes(lowerQuery) ||
      page.content.toLowerCase().includes(lowerQuery)
    ) {
      results.push({ type: "page", ...page });
    }
  });

  // Search Submodules
  submodules.forEach(submodule => {
    if (
      submodule.title.toLowerCase().includes(lowerQuery) ||
      submodule.id.toLowerCase().includes(lowerQuery) ||
      submodule.module.toLowerCase().includes(lowerQuery) ||
      Object.values(submodule.options).some(optionArray => 
        optionArray.some(option => option.toLowerCase().includes(lowerQuery))
      )
    ) {
      results.push({ type: "submodule", ...submodule });
    }
  });

  return results;
}
