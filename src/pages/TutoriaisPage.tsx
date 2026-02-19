import { Link, useNavigate } from "react-router-dom";
import * as Icons from "lucide-react";
import Breadcrumbs from "@/components/test/Breadcrumbs";

const tutorials = [
  { id: "fluxo", title: "Fluxo do Sistema", icon: "Route" },
  { id: "erros", title: "Erros Frequentes", icon: "AlertCircle" },
];

const TutoriaisPage = () => {
  const navigate = useNavigate();
  const renderIcon = (iconName: string) => {
    const IconComponent = Icons[iconName as keyof typeof Icons] as React.ElementType;
    return IconComponent ? <IconComponent className="h-8 w-8" /> : null;
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <Breadcrumbs 
          categoryId="tutoriais" 
          pageTitle="Tutoriais" 
          onNavigate={(path) => navigate(path)} 
        />
        <h1 className="text-4xl font-bold text-center mb-12 text-foreground">
          Tutoriais
        </h1>
        <div className="flex flex-wrap justify-center gap-6">
          {tutorials.map((tutorial) => (
            <Link
              key={tutorial.id}
              to={tutorial.id === "fluxo" ? "/docs/tutoriais/fluxo-sistema" : "/docs/tutoriais/erros-frequentes"}
              className="flex flex-col items-center justify-center p-6 border border-border rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 bg-card text-card-foreground hover:bg-muted w-48 h-48 text-center"
            >
              <div className="text-primary mb-4">{renderIcon(tutorial.icon)}</div>
              <h3 className="text-lg font-semibold">{tutorial.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TutoriaisPage;
