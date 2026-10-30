export const educacaoBibliotecaProcedimentosContent: Record<string, string> = {
  Empréstimo: `Registre o empréstimo de um acervo preenchendo os campos solicitados.

[![Procedimento de empréstimo](https://e-cidade.wiki.br/educacao/biblioteca/files/tela_procedimentos_emprestimo.png)](https://e-cidade.wiki.br/educacao/biblioteca/files/tela_procedimentos_emprestimo.png)

**Campos**
- **Carteira:** clique no campo para pesquisar os leitores e selecione o leitor. O sistema carregará seus dados e calculará a data de devolução.
- **Código do exemplar:** pesquise e selecione o acervo que será emprestado. Repita o procedimento para cada exemplar. Se preferir, pesquise os exemplares por assunto e clique em **Processar**.

O sistema abrirá a confirmação do empréstimo.

[![Confirmação de empréstimo](https://e-cidade.wiki.br/educacao/biblioteca/files/tela_de_confirma%C3%A7%C3%A3o_de_emprestimo.png)](https://e-cidade.wiki.br/educacao/biblioteca/files/tela_de_confirma%C3%A7%C3%A3o_de_emprestimo.png)

Para imprimir um comprovante em PDF, marque **Emitir Comprovante** e confirme. O arquivo será gerado em duas vias.

[![Comprovante de empréstimo](https://e-cidade.wiki.br/educacao/biblioteca/files/comprovante_de_emprestimo_2.png)](https://e-cidade.wiki.br/educacao/biblioteca/files/comprovante_de_emprestimo_2.png)`,
  Devolução: `Para devolver um acervo, clique no link **Carteira** ou **Código do Exemplar**, marque o acervo que está sendo devolvido e confirme a devolução.

[![Procedimento de devolução](https://e-cidade.wiki.br/educacao/biblioteca/files/tela_procedimentos_devolu%C3%A7%C3%A3o.png)](https://e-cidade.wiki.br/educacao/biblioteca/files/tela_procedimentos_devolu%C3%A7%C3%A3o.png)

**Renovar empréstimo:** clique em **Renovar Empréstimo**. Na janela exibida, confira as novas datas de retirada e devolução e confirme a renovação.

[![Renovar empréstimo](https://e-cidade.wiki.br/educacao/biblioteca/files/tela_procedimentos_renovar_emprestimo.png)](https://e-cidade.wiki.br/educacao/biblioteca/files/tela_procedimentos_renovar_emprestimo.png)`,
  Reservas: `Para reservar um acervo, clique no link **Carteira**, pesquise e selecione o leitor. Em seguida, clique em **Código do exemplar**, selecione o exemplar que será reservado, informe a data e a hora da reserva e clique em **Incluir**.

[![Procedimento de reservas](https://e-cidade.wiki.br/educacao/biblioteca/files/tela_procedimento_reservas.png)](https://e-cidade.wiki.br/educacao/biblioteca/files/tela_procedimento_reservas.png)

Clique em **Empréstimo** para consultar os empréstimos em aberto.

[![Empréstimos em aberto na rotina de reservas](https://e-cidade.wiki.br/educacao/biblioteca/files/tela_reservas_procedimento_espera.png)](https://e-cidade.wiki.br/educacao/biblioteca/files/tela_reservas_procedimento_espera.png)`,
  "Baixa de Acervo": `Use esta rotina para registrar a baixa de um acervo extraviado, rasurado, perdido ou em outra situação que exija sua retirada do acervo. Clique em **Código do Exemplar** e selecione o acervo.

[![Baixa de acervo](https://e-cidade.wiki.br/educacao/biblioteca/files/tela_procedimento_baixa_de_acervo.png)](https://e-cidade.wiki.br/educacao/biblioteca/files/tela_procedimento_baixa_de_acervo.png)

Clique em **Próximo**. No campo **Descrição da baixa**, informe o motivo e clique em **Incluir**.

[![Descrição da baixa de acervo](https://e-cidade.wiki.br/educacao/biblioteca/files/tela_procedimentos_baixa_de_acervo_descri%C3%A7%C3%A3o.png)](https://e-cidade.wiki.br/educacao/biblioteca/files/tela_procedimentos_baixa_de_acervo_descri%C3%A7%C3%A3o.png)`,
  "Cancelar Impressão de Etiquetas": `Após processar etiquetas para impressão, o sistema considera essas etiquetas impressas e as separa das que ainda não foram processadas, evitando que sejam impressas novamente. Se as etiquetas tiverem sido apenas processadas, mas não impressas, esta rotina permite cancelar o processamento e retorná-las ao conjunto de etiquetas pendentes.

[![Cancelar impressão de etiquetas](https://e-cidade.wiki.br/educacao/biblioteca/files/tela_de_cancelar_impress%C3%A3o_etiquetas.png)](https://e-cidade.wiki.br/educacao/biblioteca/files/tela_de_cancelar_impress%C3%A3o_etiquetas.png)

Clique no link **Impressão** para pesquisar entre as impressões processadas. A janela disponibiliza filtros para localizar a impressão desejada.

[![Pesquisa de impressões de etiquetas](https://e-cidade.wiki.br/educacao/biblioteca/files/tela_de_cancelar_etiqueta_pesquisa.png)](https://e-cidade.wiki.br/educacao/biblioteca/files/tela_de_cancelar_etiqueta_pesquisa.png)

Após selecionar a impressão, o sistema carregará os exemplares correspondentes. Marque as etiquetas cuja impressão deseja cancelar, clique em **Cancelar Impressão** e confirme.

[![Confirmar cancelamento da impressão](https://e-cidade.wiki.br/educacao/biblioteca/files/tela_cancelar_impress%C3%A3o_de_etiquetas_cancelar.png)](https://e-cidade.wiki.br/educacao/biblioteca/files/tela_cancelar_impress%C3%A3o_de_etiquetas_cancelar.png)`,
  Parâmetros: `Esta rotina disponibiliza um parâmetro que habilita a pesquisa por código de barras da carteira do leitor e do exemplar nas rotinas de empréstimo, devolução, reserva, baixa e consultas do acervo e do leitor.

Se a biblioteca possuir um leitor óptico de código de barras, habilite o parâmetro para que o sistema capture o código e realize a pesquisa automaticamente. Selecione **Sim** e clique em **Incluir**.

[![Parâmetros da biblioteca](https://e-cidade.wiki.br/educacao/biblioteca/files/tela_par%C3%A2metros_biblioteca.png)](https://e-cidade.wiki.br/educacao/biblioteca/files/tela_par%C3%A2metros_biblioteca.png)`,
};
