import * as React from "react"
import { useState } from "react"
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
import { getSubmoduleById, getSubmodulesByModule } from "@/data/submodules"

import LogoLibre from "../../../assets/images/LogoLibre.jpg"

const iconMap: Record<string, any> = {
  Home,
  BookOpen,
  Layers,
  GraduationCap,
  Settings,
  HelpCircle,
}

const areaModuleIds: Record<string, string[]> = {
  configuracoes: ["configuracoes"],
  financeiro: ["contabilidade", "custos", "empenho", "planejamento", "orcamento", "tesouraria"],
  patrimonial: ["compras", "contratos", "licitacoes", "material", "ouvidoria", "patrimonio", "pncp", "protocolo", "veiculos"],
  tributario: getSubmodulesByModule("tributario").map((module) => module.id),
  "recursos-humanos": ["esocial", "est-probatorio", "pessoal", "rh"],
  educacao: ["alimentacao-escolar", "biblioteca", "escola", "secretaria", "transporte-escolar"],
  saude: ["agendamento", "ambulatorial", "farmacia", "fundo-assistencia-medica", "hiperdia", "laboratorio", "tfd", "vacinas"],
}

export function AppSidebar() {
  const location = useLocation()
  const [expandedArea, setExpandedArea] = useState<string | null>(null)
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null)
  const selectedSubmodule = new URLSearchParams(location.search).get("submodule")

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
                    open={isActive || expandedCategory === category.id}
                    onOpenChange={(open) => setExpandedCategory(open ? category.id : null)}
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
                            {pages.map((page) => {
                              const moduleIds = category.id === "modulos" ? areaModuleIds[page.id] ?? [] : []
                              const areaSubmodules = moduleIds
                                .map((id) => getSubmoduleById(id))
                                .filter((submodule): submodule is NonNullable<typeof submodule> => Boolean(submodule))
                              const areaPath = `/docs/${category.id}/${page.id}`
                              const isCurrentArea = location.pathname === areaPath
                              const isAreaOpen = expandedArea === page.id

                              if (areaSubmodules.length === 0) {
                                return (
                                  <SidebarMenuSubItem key={page.id}>
                                    <SidebarMenuSubButton asChild isActive={isCurrentArea}>
                                      <Link to={areaPath}>{page.title}</Link>
                                    </SidebarMenuSubButton>
                                  </SidebarMenuSubItem>
                                )
                              }

                              return (
                                <Collapsible
                                  key={page.id}
                                  asChild
                                  open={isAreaOpen}
                                  onOpenChange={(open) => setExpandedArea(open ? page.id : null)}
                                  className="group/area"
                                >
                                  <SidebarMenuSubItem>
                                    <div className="flex w-full items-center">
                                      <SidebarMenuSubButton asChild isActive={isCurrentArea}>
                                        <Link
                                          to={areaPath}
                                          className="flex-1"
                                          onClick={() => setExpandedArea(null)}
                                        >
                                          {page.title}
                                        </Link>
                                      </SidebarMenuSubButton>
                                      <CollapsibleTrigger asChild>
                                        <button
                                          type="button"
                                          aria-label={`Mostrar módulos de ${page.title}`}
                                          className="rounded p-1 hover:bg-sidebar-accent"
                                        >
                                          <ChevronRight className="h-3.5 w-3.5 transition-transform duration-200 group-data-[state=open]/area:rotate-90" />
                                        </button>
                                      </CollapsibleTrigger>
                                    </div>
                                    <CollapsibleContent>
                                      <SidebarMenuSub>
                                        {areaSubmodules.map((submodule) => (
                                          <SidebarMenuSubItem key={submodule.id}>
                                            <SidebarMenuSubButton
                                              asChild
                                              isActive={isCurrentArea && selectedSubmodule === submodule.id}
                                            >
                                              <Link to={`${areaPath}?submodule=${encodeURIComponent(submodule.id)}`}>
                                                {submodule.title}
                                              </Link>
                                            </SidebarMenuSubButton>
                                          </SidebarMenuSubItem>
                                        ))}
                                      </SidebarMenuSub>
                                    </CollapsibleContent>
                                  </SidebarMenuSubItem>
                                </Collapsible>
                              )
                            })}
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
