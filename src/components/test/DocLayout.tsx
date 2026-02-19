import { useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { Search } from "lucide-react";
import { Input } from "./ui/input";
import SubmoduleNav from "./SubmoduleNav";
import PncpNav from "./PncpNav";
import { combinedSearch } from "@/lib/search";
import { ThemeToggle } from "./ThemeToggle";
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/test/ui/sidebar";
import { AppSidebar } from "./AppSidebar";

const DocLayout = () => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearchResults, setShowSearchResults] = useState(false);
  const isSubmodulePage = location.pathname.startsWith("/modulos/");
  const isPncpPage = location.pathname.startsWith("/pncp");

  const searchResults = searchQuery.trim() ? combinedSearch(searchQuery) : [];

  return (
    <SidebarProvider defaultOpen={false}>
      <div className="flex min-h-screen w-full bg-background">
        <AppSidebar />
        <SidebarInset>
          {/* Header */}
          <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="flex h-14 items-center gap-4 px-4 sm:px-6">
              <SidebarTrigger />
              
              <Link to="/" className="flex items-center space-x-2">
                <span className="font-bold text-lg sm:text-xl text-foreground">Wiki do Sistema</span>
              </Link>
              
              <div className="flex-1 flex items-center justify-end gap-4">
                <div className="flex-1 max-w-md relative">
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
                        searchResults.map((result) => (
                          <Link
                            key={result.id}
                            to={result.url}
                            className="block px-4 py-2 text-sm hover:bg-muted transition-colors border-b border-border/50 last:border-0"
                            onClick={() => {
                              setSearchQuery("");
                              setShowSearchResults(false);
                            }}
                          >
                            <div className="font-medium">{result.title}</div>
                            <div className="text-xs text-muted-foreground line-clamp-1">
                              {result.description}...
                            </div>
                            <div className="text-[10px] mt-1 text-primary-foreground/60 bg-primary/10 px-1 rounded-sm w-fit">
                              {result.type === 'page' ? 'Documento' : result.type === 'submodule' ? 'Módulo' : 'Opção'}
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
            {isSubmodulePage && <SubmoduleNav />}
            {isPncpPage && <PncpNav />}
          </header>

          {/* Main Content */}
          <main className="flex-1">
            <Outlet />
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default DocLayout;