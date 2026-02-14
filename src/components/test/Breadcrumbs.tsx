import { ChevronRight, Home } from "lucide-react";
import { getCategoryById } from "@/data/documentation";

interface BreadcrumbsProps {
  categoryId: string;
  pageTitle: string;
  submoduleTitle?: string;
  categoryTitle?: string;
  selectedFinalSectionTitle?: string;
  onNavigate: (path: string) => void; // New prop for handling navigation
}

const Breadcrumbs = ({ categoryId, pageTitle, submoduleTitle, categoryTitle, selectedFinalSectionTitle, onNavigate }: BreadcrumbsProps) => {
  const breadcrumbSegments: { label: string; path: string }[] = [];
  let currentPathParts: string[] = [];

  // 1. Home
  breadcrumbSegments.push({ label: "Início", path: "/" });

  // 2. "Áreas"
  const areasCategory = getCategoryById("modulos");
  if (areasCategory) {
    currentPathParts.push("modulos");
    breadcrumbSegments.push({ label: areasCategory.title, path: `/${currentPathParts.join('/')}` });
  }

  // 3. Main Module
  const mainModule = getCategoryById(categoryId);
  if (mainModule && mainModule.id !== "modulos") {
    currentPathParts.push(mainModule.id);
    breadcrumbSegments.push({ label: mainModule.title, path: `/${currentPathParts.join('/')}` });
  }

  // 4. Page/Submodule
  if (pageTitle && mainModule?.title.toLowerCase() !== pageTitle.toLowerCase()) {
    const pageSlug = pageTitle.toLowerCase().replace(/\s/g, "-");
    currentPathParts.push(pageSlug);
    breadcrumbSegments.push({ label: pageTitle, path: `/${currentPathParts.join('/')}` });
  }

  // 5. Deeper Submodule/Category
  if (submoduleTitle) {
    const submoduleSlug = submoduleTitle.toLowerCase().replace(/\s/g, "-");
    currentPathParts.push(submoduleSlug);
    breadcrumbSegments.push({ label: submoduleTitle.charAt(0).toUpperCase() + submoduleTitle.slice(1), path: `/${currentPathParts.join('/')}` });
  }

  // 6. Even Deeper Category
  if (categoryTitle && categoryTitle.toLowerCase() !== submoduleTitle?.toLowerCase()) {
    const categorySlug = categoryTitle.toLowerCase().replace(/\s/g, "-");
    currentPathParts.push(categorySlug);
    breadcrumbSegments.push({ label: categoryTitle.charAt(0).toUpperCase() + categoryTitle.slice(1), path: `/${currentPathParts.join('/')}` });
  }

  // 7. Final Section
  if (selectedFinalSectionTitle &&
      selectedFinalSectionTitle.toLowerCase() !== categoryTitle?.toLowerCase() &&
      selectedFinalSectionTitle.toLowerCase() !== submoduleTitle?.toLowerCase()) {
    const finalSlug = selectedFinalSectionTitle.toLowerCase().replace(/\s/g, "-");
    currentPathParts.push(finalSlug);
    breadcrumbSegments.push({ label: selectedFinalSectionTitle, path: `/${currentPathParts.join('/')}` });
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
