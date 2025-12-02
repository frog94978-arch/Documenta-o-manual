---
layout: home

hero:
  name: "Manual Libre"
  text: "Sua fonte central de documentação."
  tagline: Encontre guias, manuais e tutoriais de forma rápida e organizada.
  image:
    src: https://raw.githubusercontent.com/wiris/editor-icons/a7333555416c4f74573b9bd8c42b5ed92e21b068/packages/tiny_mce_wiris/logo.svg
    alt: Manual Libre
  actions:
    - theme: brand
      text: Introdução
      link: /introducao
    - theme: alt
      text: Ver no GitHub
      link: https://github.com/carlosnasct/Documenta-o-manual

features:
  - icon: 📖
    title: Documentação Clara
    details: Explore conteúdos organizados por módulos e seções, facilitando a busca por informações específicas.
  - icon: 💡
    title: Guias e Tutoriais
    details: Siga passo a passo os guias para aprender a utilizar as funcionalidades do sistema.
  - icon: ⚙️
    title: Simples e Leve
    details: Foco total no conteúdo, sem distrações, para uma leitura agradável e eficiente.

---

<style>
.manuals-section {
  padding: 40px 0;
  text-align: center;
}

.manuals-section h2 {
  font-size: 2.2em;
  margin-bottom: 30px;
  color: var(--vp-c-text-1);
}

.manuals-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  max-width: 900px;
  margin: 0 auto;
}

.manual-card {
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  border-radius: 8px;
  padding: 25px;
  text-align: left;
  transition: all 0.2s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.manual-card:hover {
  border-color: var(--vp-c-brand-1);
  transform: translateY(-5px);
  box-shadow: var(--vp-shadow-3);
}

.manual-card h3 {
  font-size: 1.4em;
  margin-top: 0;
  margin-bottom: 15px;
  color: var(--vp-c-text-1);
}

.manual-card p {
  font-size: 1em;
  color: var(--vp-c-text-2);
  line-height: 1.6;
  flex-grow: 1;
}

.manual-card a {
  display: inline-block;
  margin-top: 15px;
  padding: 10px 18px;
  background-color: var(--vp-c-brand-2);
  color: var(--vp-c-white);
  border-radius: 5px;
  text-decoration: none;
  font-weight: 500;
  transition: background-color 0.2s ease-in-out;
}

.manual-card a:hover {
  background-color: var(--vp-c-brand-1);
}

@media (max-width: 768px) {
  .manuals-grid {
    grid-template-columns: 1fr;
  }
}
</style>

<div class="manuals-section">
  <h2>Nossos Manuais</h2>
  <div class="manuals-grid">
    <div class="manual-card">
      <h3>Comece por aqui</h3>
      <p>A introdução essencial para novos usuários, cobrindo os fundamentos para você dar os primeiros passos.</p>
      <a href="/introducao">Leia a Introdução &rarr;</a>
    </div>
    <div class="manual-card">
      <h3>Módulos</h3>
      <p>Explore a fundo cada módulo do sistema, entendendo suas funcionalidades e como utilizá-las.</p>
      <a href="/rh/manual">Veja os Módulos &rarr;</a>
    </div>
    <div class="manual-card">
      <h3>Guias e Tutoriais</h3>
      <p>Instruções passo a passo detalhadas para realizar tarefas específicas e dominar o sistema.</p>
      <a href="/tutoriais/primeiros-passos">Acesse Guias e Tutoriais &rarr;</a>
    </div>
  </div>
</div>
