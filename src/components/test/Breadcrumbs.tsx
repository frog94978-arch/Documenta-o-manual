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
  const breadcrumbSegments: { label: string; path: string; isClickable: boolean }[] = [];

  // 1. Home
  breadcrumbSegments.push({ label: "Início", path: "/", isClickable: true });

  // 2. "Áreas"
  const areasCategory = getCategoryById("modulos");
  if (areasCategory) {
    breadcrumbSegments.push({ label: areasCategory.title, path: "/areas", isClickable: true });
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
    breadcrumbSegments.push({ label: mainModule.title, path: path, isClickable: true });
  }

  // 4. Page/Submodule
  if (pageTitle && mainModule?.title.toLowerCase() !== pageTitle.toLowerCase()) {
    const finalPageId = pageId || pageTitle.toLowerCase().replace(/\s/g, "-");
    breadcrumbSegments.push({ label: pageTitle, path: `/docs/${categoryId}/${finalPageId}`, isClickable: true });
  }

  // 5. Deeper Submodule/Category - NOW clickable
  if (submoduleTitle) {
    const finalPageId = pageId || pageTitle.toLowerCase().replace(/\s/g, "-");
    breadcrumbSegments.push({ 
        label: submoduleTitle.charAt(0).toUpperCase() + submoduleTitle.slice(1), 
        path: `/docs/${categoryId}/${finalPageId}/${submoduleTitle.toLowerCase()}`,
        isClickable: true 
    });
  }

  // 6. Even Deeper Category - NOW clickable
  if (categoryTitle && categoryTitle.toLowerCase() !== submoduleTitle?.toLowerCase()) {
    const finalPageId = pageId || pageTitle.toLowerCase().replace(/\s/g, "-");
    breadcrumbSegments.push({ 
        label: categoryTitle.charAt(0).toUpperCase() + categoryTitle.slice(1), 
        path: `/docs/${categoryId}/${finalPageId}/${submoduleTitle?.toLowerCase()}/${categoryTitle.toLowerCase()}`,
        isClickable: true 
    });
  }

  // 7. Final Section - NOW clickable
  if (selectedFinalSectionTitle &&
      selectedFinalSectionTitle.toLowerCase() !== categoryTitle?.toLowerCase() &&
      selectedFinalSectionTitle.toLowerCase() !== submoduleTitle?.toLowerCase()) {
    const finalPageId = pageId || pageTitle.toLowerCase().replace(/\s/g, "-");
    breadcrumbSegments.push({ 
        label: selectedFinalSectionTitle, 
        path: `/docs/${categoryId}/${finalPageId}/${submoduleTitle?.toLowerCase()}/${categoryTitle?.toLowerCase()}/${selectedFinalSectionTitle.toLowerCase()}`,
        isClickable: true 
    });
  }

  return (
    <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-6">
      {breadcrumbSegments.map((segment, index) => (
        <span key={index} className="flex items-center">
          {segment.isClickable ? (
            <button
              onClick={() => onNavigate(segment.path)}
              className="flex items-center hover:text-foreground transition-colors cursor-pointer"
            >
              {index === 0 ? <Home className="h-4 w-4" /> : segment.label}
            </button>
          ) : (
            <span className="flex items-center text-muted-foreground">
              {segment.label}
            </span>
          )}
          {index < breadcrumbSegments.length - 1 && (
            <ChevronRight className="h-4 w-4 mx-1" />
          )}
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
