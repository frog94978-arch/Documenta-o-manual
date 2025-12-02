import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Manual Libre",
  description: "Documentação e manuais.",
  lang: 'pt-BR',
  base: '/Documenta-o-manual/',
  themeConfig: {
    logo: 'https://raw.githubusercontent.com/wiris/editor-icons/a7333555416c4f74573b9bd8c42b5ed92e21b068/packages/tiny_mce_wiris/logo.svg',

    nav: [
      { text: 'Início', link: '/' },
      { text: 'Introdução', link: '/introducao' }
    ],

    sidebar: [
      {
        text: 'Comece por aqui',
        items: [
          { text: 'Introdução', link: '/introducao' },
        ]
      },
      {
        text: 'Módulos',
        items: [
          { text: 'Módulo RH', link: '/rh/manual' }
        ]
      },
      {
        text: 'Guias e Tutoriais',
        items: [
          { text: 'Primeiros Passos', link: '/tutoriais/primeiros-passos' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/carlosnasct/Documenta-o-manual' }
    ],
    
    footer: {
      message: 'Distribuído sob a licença MIT.',
      copyright: 'Copyright © 2024-presente Carlos'
    },
    
    docFooter: {
      prev: 'Página anterior',
      next: 'Próxima página'
    },

    breadcrumbs: true,

    outline: {
      label: 'Nesta página'
    },

    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: 'Pesquisar...',
                buttonAriaLabel: 'Pesquisar'
              },
              modal: {
                noResultsText: 'Nenhum resultado para',
                resetButtonTitle: 'Limpar pesquisa',
                footer: {
                  selectText: 'para selecionar',
                  navigateText: 'para navegar',
                  closeText: 'para fechar'
                }
              }
            }
          }
        }
      }
    }
  }
})
