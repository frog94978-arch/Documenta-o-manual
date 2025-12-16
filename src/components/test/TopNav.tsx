import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import * as Icons from "lucide-react";
import { categories, getPagesByCategory } from "@/data/documentation";
import { cn } from "@/lib/utils";
import PncpNav from "./PncpNav"; // Import PncpNav

const TopNav = () => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation(); // Initialize useLocation

  const renderIcon = (iconName: string) => {
    const IconComponent = Icons[iconName as keyof typeof Icons] as React.ElementType;
    return IconComponent ? <IconComponent className="h-4 w-4" /> : null;
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex border-b border-nav-border bg-nav">
        <div className="container mx-auto px-4">
          <div className="flex items-center h-12">
            {categories.map((category) => {
              const pages = getPagesByCategory(category.id);
              const isExpanded = expandedCategory === category.id;

              return (
                <div
                  key={category.id}
                  className="relative"
                  onMouseEnter={() => setExpandedCategory(category.id)}
                  onMouseLeave={() => setExpandedCategory(null)}
                >
                  <button
                    className={cn(
                      "flex items-center gap-2 px-4 h-12 text-sm text-nav-foreground hover:bg-nav-hover transition-colors",
                      isExpanded && "bg-nav-hover"
                    )}
                  >
                    {category.title}
                    {pages.length > 0 && <ChevronDown className="h-3 w-3" />}
                  </button>

                  {isExpanded && pages.length > 0 && (
                    <div className="absolute left-0 top-full bg-background border border-border shadow-lg min-w-[200px] z-50">
                      {pages.map((page) => (
                        <NavLink
                          key={page.id}
                          to={`/docs/${category.id}/${page.id}`}
                          className={({ isActive }) =>
                            cn(
                              "block px-4 py-2 text-sm hover:bg-muted transition-colors",
                              isActive
                                ? "bg-muted font-medium text-foreground"
                                : "text-muted-foreground"
                            )
                          }
                        >
                          {page.title}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden border-b border-nav-border bg-nav">
        <div className="flex items-center justify-between px-4 h-12">
          <span className="text-sm font-medium text-nav-foreground">Menu</span>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-nav-foreground"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-nav-border bg-background">
            {categories.map((category) => {
              const pages = getPagesByCategory(category.id);

              return (
                <div key={category.id} className="border-b border-border">
                  <div className="px-4 py-3 font-medium text-sm flex items-center gap-2">
                    {renderIcon(category.icon)}
                    {category.title}
                  </div>
                  {pages.map((page) => (
                    <NavLink
                      key={page.id}
                      to={`/docs/${category.id}/${page.id}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className={({ isActive }) =>
                        cn(
                          "block px-8 py-2 text-sm hover:bg-muted transition-colors",
                          isActive
                            ? "bg-muted font-medium text-foreground"
                            : "text-muted-foreground"
                        )
                      }
                    >
                      {page.title}
                    </NavLink>
                  ))}
                </div>
              );
            })}
          </div>
        )}
      </nav>

      {/* Conditional rendering of PncpNav */}
      {location.pathname.startsWith("/pncp") && <PncpNav />}
    </>
  );
};

export default TopNav;

