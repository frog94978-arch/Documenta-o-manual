import { Link } from "react-router-dom";
import * as Icons from "lucide-react";

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
  const renderIcon = (iconName: string) => {
    const IconComponent = Icons[iconName as keyof typeof Icons] as React.ElementType;
    return IconComponent ? <IconComponent className="h-8 w-8" /> : null;
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12 text-foreground">
          Áreas do Sistema
        </h1>
        <div className="flex flex-wrap justify-center gap-6">
          {areas.map((area) => (
            <Link
              key={area.id}
              to={`/docs/modulos/${area.id}`}
              className="flex flex-col items-center justify-center p-6 border border-border rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 bg-card text-card-foreground hover:bg-muted w-48 h-48 text-center"
            >
              <div className="text-primary mb-4">{renderIcon(area.icon)}</div>
              <h3 className="text-lg font-semibold">{area.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AreasPage;
