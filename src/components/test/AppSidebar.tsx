import * as React from "react"
import { Link, useLocation } from "react-router-dom"
import {
  ChevronRight,
  HelpCircle,
  Home,
  BookOpen,
  Layers,
  GraduationCap,
  Settings,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
} from "@/components/test/ui/sidebar"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/test/ui/collapsible"
import { categories, getPagesByCategory } from "@/data/documentation"

import LogoLibre from "../../../assets/images/LogoLibre.jpg"

const iconMap: Record<string, any> = {
  Home,
  BookOpen,
  Layers,
  GraduationCap,
  Settings,
  HelpCircle,
}

export function AppSidebar() {
  const location = useLocation()

  return (
    <Sidebar>
      <SidebarHeader className="border-b p-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg overflow-hidden bg-background">
            <img src={LogoLibre} alt="Libre Logo" className="h-full w-full object-contain" />
          </div>
          <span className="font-bold text-xl">Libre</span>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Documentação</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {categories.map((category) => {
                const pages = getPagesByCategory(category.id)
                const Icon = iconMap[category.icon] || Layers
                const isActive = location.pathname.includes(`/docs/${category.id}`) || 
                                (category.id === 'modulos' && location.pathname === '/areas') ||
                                (category.id === 'tutoriais' && location.pathname === '/tutoriais') ||
                                (category.id === 'guia-inicio' && location.pathname === '/guia-inicio')

                return (
                  <Collapsible
                    key={category.id}
                    asChild
                    defaultOpen={isActive}
                    className="group/collapsible"
                  >
                    <SidebarMenuItem>
                      <div className="flex items-center w-full">
                        <SidebarMenuButton asChild tooltip={category.title} isActive={isActive}>
                          <Link to={
                            category.id === 'modulos' 
                              ? '/areas' 
                              : category.id === 'tutoriais' 
                                ? '/tutoriais' 
                                : category.id === 'guia-inicio'
                                  ? '/guia-inicio'
                                  : '#'
                          } className="flex-1">
                            <Icon />
                            <span>{category.title}</span>
                          </Link>
                        </SidebarMenuButton>
                        <CollapsibleTrigger asChild>
                          <button className="p-2 hover:bg-sidebar-accent rounded-md ml-auto">
                            <ChevronRight className="h-4 w-4 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                          </button>
                        </CollapsibleTrigger>
                      </div>
                      {pages.length > 0 && (
                        <CollapsibleContent>
                          <SidebarMenuSub>
                            {pages.map((page) => (
                              <SidebarMenuSubItem key={page.id}>
                                <SidebarMenuSubButton asChild isActive={location.pathname === `/docs/${category.id}/${page.id}`}>
                                  <Link to={`/docs/${category.id}/${page.id}`}>
                                    {page.title}
                                  </Link>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                            ))}
                          </SidebarMenuSub>
                        </CollapsibleContent>
                      )}
                    </SidebarMenuItem>
                  </Collapsible>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="border-t p-4">
        <div className="flex items-center gap-2">
           <HelpCircle className="h-4 w-4 text-muted-foreground" />
           <span className="text-sm text-muted-foreground">Versão 1.0.0</span>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
