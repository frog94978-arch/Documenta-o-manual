import { useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { Search } from "lucide-react";
import { Input } from "./ui/input";
import TopNav from "./TopNav";
import SubmoduleNav from "./SubmoduleNav";
import { searchPages } from "@/data/documentation";
import { ThemeToggle } from "./ThemeToggle";

const DocLayout = () => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearchResults, setShowSearchResults] = useState(false);
  const isSubmodulePage = location.pathname.startsWith("/modulos/");

  const searchResults = searchQuery.trim() ? searchPages(searchQuery) : [];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="border-b">
          <div className="container mx-auto px-4 flex h-14 items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <span className="font-bold text-xl text-foreground">Wiki do Sistema</span>
            </Link>
            
            <div className="flex items-center space-x-2">
              <div className="flex-1 max-w-md mx-8 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Buscar na documentação..."
                  className="pl-10 w-full"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setShowSearchResults(true)}
                  onBlur={() => setTimeout(() => setShowSearchResults(false), 200)}
                />
                
                {showSearchResults && searchQuery.trim() && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-background border border-border rounded-md shadow-lg max-h-96 overflow-y-auto z-50">
                    {searchResults.length === 0 ? (
                      <div className="p-4 text-sm text-muted-foreground">
                        Nenhum resultado encontrado
                      </div>
                    ) : (
                      searchResults.map((page) => (
                        <Link
                          key={page.id}
                          to={`/docs/${page.category}/${page.id}`}
                          className="block px-4 py-2 text-sm hover:bg-muted transition-colors"
                          onClick={() => {
                            setSearchQuery("");
                            setShowSearchResults(false);
                          }}
                        >
                          <div className="font-medium">{page.title}</div>
                          <div className="text-xs text-muted-foreground line-clamp-1">
                            {page.content.substring(0, 100)}...
                          </div>
                        </Link>
                      ))
                    )}
                  </div>
                )}
              </div>
              <ThemeToggle />
            </div>
          </div>
        </div>
        
        <TopNav />
        {isSubmodulePage && <SubmoduleNav />}
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
};

export default DocLayout;