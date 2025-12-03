import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import { getCategoryById } from "@/data/documentation";

interface BreadcrumbsProps {
  categoryId: string;
  pageTitle: string;
}

const Breadcrumbs = ({ categoryId, pageTitle }: BreadcrumbsProps) => {
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
    </nav>
  );
};

export default Breadcrumbs;
