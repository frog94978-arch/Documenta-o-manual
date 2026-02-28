import { Link, useNavigate } from "react-router-dom";
import * as Icons from "lucide-react";
import Breadcrumbs from "@/components/test/Breadcrumbs";

const areas = [
  { id: "configuracoes", title: "Configuração", icon: "Settings" },
  { id: "financeiro", title: "Financeiro", icon: "Landmark" },
  { id: "patrimonial", title: "Patrimonial", icon: "Building" },
  { id: "tributario", title: "Tributário", icon: "FileText" },
  { id: "recursos-humanos", title: "Recursos Humanos", icon: "Users" },
  { id: "educacao", title: "Educação", icon: "School" },
  { id: "saude", title: "Saúde", icon: "Stethoscope" },
  { id: "nota-fiscal", title: "Nota Fiscal", icon: "Receipt" },
  { id: "transparencia", title: "Transparência", icon: "Eye" },
  { id: "servicos-online", title: "Serviços On-line", icon: "Globe" },
  { id: "bi-elastic", title: "BI - Elastic", icon: "AreaChart" },
  { id: "protocolo-eletronico", title: "Protocolo Eletrônico", icon: "Book" },
  { id: "e-storage", title: "e-Storage", icon: "Database" },
];

const AreasPage = () => {
  const navigate = useNavigate();
  const renderIcon = (iconName: string) => {
    const IconComponent = Icons[iconName as keyof typeof Icons] as React.ElementType;
    return IconComponent ? <IconComponent className="h-8 w-8" /> : null;
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <Breadcrumbs 
          categoryId="modulos" 
          pageTitle="Áreas" 
          onNavigate={(path) => navigate(path)} 
        />
        <h1 className="text-4xl font-bold text-center mb-12 text-foreground">
          Áreas do Sistema
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {areas.map((area) => (
            <Link
              key={area.id}
              to={`/docs/modulos/${area.id}`}
              className="text-left transition-all hover:scale-[1.02] focus:outline-none"
            >
              <div className="rounded-lg text-card-foreground h-full border border-border transition-all duration-300 cursor-pointer bg-card hover:bg-muted shadow-sm hover:shadow-lg">
                <div className="p-8 flex flex-col items-center justify-center min-h-[180px] gap-4">
                  <div className="text-primary">{renderIcon(area.icon)}</div>
                  <h3 className="text-xl font-bold text-center">{area.title}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AreasPage;
