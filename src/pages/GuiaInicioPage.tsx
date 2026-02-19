import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Icons from "lucide-react";
import Breadcrumbs from "@/components/test/Breadcrumbs";

const items = [
  { 
    id: "tomticket", 
    title: "Tomticket", 
    icon: "Ticket",
    link: "/docs/guia-inicio/tomticket",
    description: "O Tomticket é a nossa plataforma de suporte e abertura de chamados. Utilize-o para relatar problemas técnicos, solicitar melhorias ou tirar dúvidas diretamente com nossa equipe de suporte especializado."
  },
  { 
    id: "gitlab", 
    title: "Git Lab", 
    icon: "GitPullRequest",
    link: "/docs/guia-inicio/gitlab",
    description: "O GitLab é utilizado para o controle de versão e gerenciamento do ciclo de vida do desenvolvimento de software. Aqui centralizamos nosso código-fonte, acompanhamos o progresso de tarefas e garantimos a integridade do sistema."
  },
  { 
    id: "padrao-emails", 
    title: "Padrão de e-mails", 
    icon: "Mail",
    link: "/docs/guia-inicio/padrao-emails",
    description: "Consulte as diretrizes e modelos oficiais para a comunicação via e-mail, garantindo a padronização e profissionalismo das mensagens enviadas pelo sistema."
  },
  { 
    id: "ponto-funcao", 
    title: "Ponto de Função", 
    icon: "Calculator",
    link: "/docs/guia-inicio/ponto-funcao",
    description: "Entenda a metodologia de contagem de pontos de função utilizada para medir o tamanho funcional e o esforço de desenvolvimento do software."
  },
];

const GuiaInicioPage = () => {
  const navigate = useNavigate();
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const renderIcon = (iconName: string) => {
    const IconComponent = Icons[iconName as keyof typeof Icons] as React.ElementType;
    return IconComponent ? <IconComponent className="h-8 w-8" /> : null;
  };

  const selectedItem = items.find(item => item.id === selectedId);

  const handleNavigation = (path: string) => {
    if (path === '/') {
      navigate('/');
      return;
    }
    if (path === '/areas') {
      navigate('/areas');
      return;
    }
    if (path.includes('/docs/guia-inicio')) {
      setSelectedId(null); // Reset selection to show overview
      return;
    }
    navigate(path);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <Breadcrumbs 
          categoryId="guia-inicio" 
          pageTitle="Guia de Início" 
          submoduleTitle={selectedItem?.title}
          onNavigate={handleNavigation} 
        />
        <h1 className="text-4xl font-bold text-center mb-12 text-foreground">
          Guia de Início
        </h1>
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedId(item.id)}
              className={`flex flex-col items-center justify-center p-6 border border-border rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 bg-card text-card-foreground hover:bg-muted w-48 h-48 text-center ${selectedId === item.id ? 'ring-2 ring-primary bg-muted' : ''}`}
            >
              <div className="text-primary mb-4">{renderIcon(item.icon)}</div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
            </button>
          ))}
        </div>

        {selectedItem && (
          <div className="max-w-2xl mx-auto p-8 border border-border rounded-lg bg-card shadow-md animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center gap-4 mb-4">
              <div className="text-primary">{renderIcon(selectedItem.icon)}</div>
              <h2 className="text-2xl font-bold">{selectedItem.title}</h2>
            </div>
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              {selectedItem.description}
            </p>
            <Link 
              to={selectedItem.link}
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
            >
              Ver Documentação Completa
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default GuiaInicioPage;
