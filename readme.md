---
---

## Projeto 1 PWA
#### Nome da aplicação: Gestão de gastos e lista de desejos
#### Nome: Eduarda Santos Alves 
##### Sistemas de Informação - PUC Minas
##### Tópicos Especiais em Sistemas de Informação: Aplicações Híbridas
#####
Explicação da aplicação:
  ~ É uma aplicação que realiza a inserção, exibição, edição e exclusão de uma lista de gastos, que é exibida em uma tabela, que realiza a soma dos gastos inseridos e exibe no final da tabela. Também é realizada a inserção, exibição, edição e exclusão de uma lista de desejos, que é exibida em uma tabela e realiza a soma dos gastos inseridos e exibe a soma do valor dos desejos inseridos no final da tabela.

**Descrição das telas:**
  ~ **Tela Principal:** Que exibe dois links que redirecionam para as telas de Cadastro de gastos e Cadastro da Lista de desejos
  ~ **Tela de Cadastro de gastos:** Tela de cadastro de gastos, que realiza a inserção, exibição, edição e exclusão de uma lista de gastos em uma tabela, e exibe a soma dos gastos inseridos no final da tabela.
  A inclusão é realizada através do botão "Adicionar".
  A exclusão é realizada através do botão com o icon de lixeira.
  A edição é realizada através do botão com o icon de um lápis, ao clicar em editar, os dados inseridos são retornados para os input's de descrição e valor, e ao clicar em "Atualizar", os dados são atualizados.

  ~ **Tela de Cadastro de desejos:** Tela de cadastro de desejos, que realiza a inserção, exibição, edição e exclusão de uma lista de desejos em uma tabela, e exibe a soma do valor dos desejos inseridos no final da tabela.
  A inclusão é realizada através do botão "Adicionar".
  A exclusão é realizada através do botão com o icon de lixeira.
  A edição é realizada através do botão com o icon de um lápis, ao clicar em editar, os dados inseridos são retornados para os input's de descrição e valor, e ao clicar em "Atualizar", os dados são atualizados.

  ~ **Ambas as telas** contém o **localStorage** para o armazenamento dos dados.

**Explicação dos dados que a aplicação armazena:**
  ~ Os dados são armazenados em uma array de objetos do tipo **Gastos**, que é composto por um **id**, **nome**, **valor**, o objeto é criado a partir dessa classe, depois disso, o array é armazenado em um localStorage.
