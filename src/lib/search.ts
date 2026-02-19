import { DocPage, pages } from "@/data/documentation";
import { Submodule, submodules } from "@/data/submodules";

export interface SearchResult {
  id: string;
  title: string;
  description: string;
  url: string;
  type: "page" | "submodule" | "option";
  module?: string;
}

export function combinedSearch(query: string): SearchResult[] {
  const lowerQuery = query.toLowerCase();
  const results: SearchResult[] = [];

  // Search DocPages
  pages.forEach(page => {
    if (
      page.title.toLowerCase().includes(lowerQuery) ||
      page.content.toLowerCase().includes(lowerQuery)
    ) {
      results.push({
        id: page.id,
        title: page.title,
        description: page.content.substring(0, 100),
        url: `/docs/${page.category}/${page.id}`,
        type: "page"
      });
    }
  });

  // Search Submodules and their options
  submodules.forEach(submodule => {
    let submoduleMatched = false;
    
    // Check if submodule title matches
    if (submodule.title.toLowerCase().includes(lowerQuery)) {
      results.push({
        id: submodule.id,
        title: submodule.title,
        description: `Módulo de ${submodule.title}`,
        url: `/modulos/${submodule.module}/${submodule.id}`,
        type: "submodule"
      });
      submoduleMatched = true;
    }

    // Check options
    Object.entries(submodule.options).forEach(([category, options]) => {
      options.forEach(option => {
        if (option.toLowerCase().includes(lowerQuery)) {
          // If we haven't already added the submodule itself (or even if we have, the option is a specific hit)
          results.push({
            id: `${submodule.id}-${option}`,
            title: `${submodule.title} > ${option}`,
            description: `Opção em ${category}`,
            url: `/modulos/${submodule.module}/${submodule.id}`, // We link to the submodule page
            type: "option",
            module: submodule.title
          });
        }
      });
    });
  });

  // Remove duplicates based on ID if necessary, or just return
  // For now, let's keep it simple.
  return results;
}
