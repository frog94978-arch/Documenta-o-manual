import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import { getCategoryById } from "@/data/documentation";

interface BreadcrumbsProps {
  categoryId: string;
  pageTitle: string;
  submoduleTitle?: string;
  categoryTitle?: string;
  selectedFinalSectionTitle?: string; // NEW PROP
}

const Breadcrumbs = ({ categoryId, pageTitle, submoduleTitle, categoryTitle, selectedFinalSectionTitle }: BreadcrumbsProps) => { // ADDED new prop
  const category = getCategoryById(categoryId);

  return (
    <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-6">
      <Link
        to="/"
        className="flex items-center hover:text-foreground transition-colors"
      >
        <Home className="h-4 w-4" />
      </Link>
      <ChevronRight className="h-4 w-4" />
      <span className="text-foreground font-medium">
        {category?.title || categoryId}
      </span>
      <ChevronRight className="h-4 w-4" />
      <span className="text-foreground">{pageTitle}</span>
      {submoduleTitle && (
        <>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground">{submoduleTitle.charAt(0).toUpperCase() + submoduleTitle.slice(1)}</span>
        </>
      )}
      {categoryTitle && (
        <>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground">{categoryTitle.charAt(0).toUpperCase() + categoryTitle.slice(1)}</span>
        </>
      )}
      {selectedFinalSectionTitle && ( // NEW CONDITIONAL RENDERING
        <>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground">{selectedFinalSectionTitle}</span>
        </>
      )}
    </nav>
  );
};

export default Breadcrumbs;
