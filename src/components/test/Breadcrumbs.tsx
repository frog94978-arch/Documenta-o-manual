import { ChevronRight, Home } from "lucide-react";
import { getCategoryById } from "@/data/documentation";

interface BreadcrumbsProps {
  categoryId: string;
  pageId?: string;
  pageTitle: string;
  submoduleTitle?: string;
  categoryTitle?: string;
  selectedFinalSectionTitle?: string;
  onNavigate: (path: string) => void; // New prop for handling navigation
}

const Breadcrumbs = ({ categoryId, pageId, pageTitle, submoduleTitle, categoryTitle, selectedFinalSectionTitle, onNavigate }: BreadcrumbsProps) => {
  const breadcrumbSegments: { label: string; path: string }[] = [];

  // 1. Home
  breadcrumbSegments.push({ label: "Início", path: "/" });

  // 2. "Áreas"
  const areasCategory = getCategoryById("modulos");
  if (areasCategory) {
    breadcrumbSegments.push({ label: areasCategory.title, path: "/areas" });
  }

  // 3. Main Module / Category
  const mainModule = getCategoryById(categoryId);
  if (mainModule && mainModule.id !== "modulos") {
    let path = `/docs/${mainModule.id}`;
    if (mainModule.id === "guia-inicio") {
        path = "/guia-inicio";
    } else if (mainModule.id === "tutoriais") {
        path = "/tutoriais";
    }
    breadcrumbSegments.push({ label: mainModule.title, path: path });
  }

  // 4. Page/Submodule
  if (pageTitle && mainModule?.title.toLowerCase() !== pageTitle.toLowerCase()) {
    const finalPageId = pageId || pageTitle.toLowerCase().replace(/\s/g, "-");
    breadcrumbSegments.push({ label: pageTitle, path: `/docs/${categoryId}/${finalPageId}` });
  }

  // 5. Deeper Submodule/Category
  if (submoduleTitle) {
    const finalPageId = pageId || pageTitle.toLowerCase().replace(/\s/g, "-");
    breadcrumbSegments.push({ 
        label: submoduleTitle.charAt(0).toUpperCase() + submoduleTitle.slice(1), 
        path: `/docs/${categoryId}/${finalPageId}/${submoduleTitle.toLowerCase()}` 
    });
  }

  // 6. Even Deeper Category
  if (categoryTitle && categoryTitle.toLowerCase() !== submoduleTitle?.toLowerCase()) {
    breadcrumbSegments.push({ 
        label: categoryTitle.charAt(0).toUpperCase() + categoryTitle.slice(1), 
        path: `/docs/${categoryId}/${pageTitle.toLowerCase().replace(/\s/g, "-")}/${submoduleTitle?.toLowerCase()}/${categoryTitle.toLowerCase()}` 
    });
  }

  // 7. Final Section
  if (selectedFinalSectionTitle &&
      selectedFinalSectionTitle.toLowerCase() !== categoryTitle?.toLowerCase() &&
      selectedFinalSectionTitle.toLowerCase() !== submoduleTitle?.toLowerCase()) {
    breadcrumbSegments.push({ 
        label: selectedFinalSectionTitle, 
        path: `/docs/${categoryId}/${pageTitle.toLowerCase().replace(/\s/g, "-")}/${submoduleTitle?.toLowerCase()}/${categoryTitle?.toLowerCase()}/${selectedFinalSectionTitle.toLowerCase()}` 
    });
  }

  return (
    <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-6">
      {breadcrumbSegments.map((segment, index) => (
        <span key={index} className="flex items-center">
          <button
            onClick={() => onNavigate(segment.path)}
            className="flex items-center hover:text-foreground transition-colors"
          >
            {index === 0 ? <Home className="h-4 w-4" /> : segment.label}
          </button>
          {index < breadcrumbSegments.length - 1 && (
            <ChevronRight className="h-4 w-4 mx-1" />
          )}
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
