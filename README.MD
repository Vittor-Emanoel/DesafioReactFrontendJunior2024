# Desafio Front-end na enContact

Bem-vindo ao meu teste para desenvolvimento front-end na enContact.

## Sobre o Projeto

Este projeto é uma implementação da lista de tarefas inspirada no Todo MVC. Foi desenvolvido como parte do teste para a posição de desenvolvedor front-end na enContact. O objetivo principal é demonstrar minhas habilidades em TypeScript, CSS, gerenciamento de estado e integração com API.

## Como Iniciar

Siga as instruções abaixo para começar:

1. Faça o fork deste repositório no Github.
2. Clone o projeto para o seu ambiente local:
   ```
   git clone https://github.com/Vittor-Emanoel/DesafioReactFrontendJunior2024.git
   ```
3. Navegue até o diretório do projeto:
   ```
   cd DesafioReactFrontendJunior2024
   ```
4. Instale as dependências do projeto utilizando o Yarn:

   ```
   yarn install
   ```

   Certifique-se de que você está utilizando o Node.js na versão 16.16x. Caso precise de uma versão específica do Node.js, recomendo o uso de gerenciadores de versão como o NVM (Node Version Manager).

5. Inicie o servidor de desenvolvimento:
   ```
   yarn start
   ```
6. Abra [http://localhost:3000](http://localhost:3000) no seu navegador para visualizar o aplicativo.

## Funcionalidades Implementadas

- Recuperação das tarefas iniciais via GET da [API](https://my-json-server.typicode.com/EnkiGroup/DesafioReactFrontendJunior2024/todos)
- Adição de novas tarefas (Só adiciona tarefas apartir de 2 letras)
- Listagem das tarefas
- Marcação e desmarcação de tarefas como concluídas
- Remoção de tarefas
- Edição de tarefas
- Marcação de todas as tarefas como concluídas
- Contagem de itens restantes
- Limpeza de tarefas concluídas
- Filtragem de tarefas por "Todos", "Ativos" e "Completos"

_as modificações estão sendo feitas no estado e não da 'api' em si. Então, ao recarregar a página as alterações não serão mantidas!_

ps: eu tenho duas formas rápidas para manter as todos salvas:

- 1 Local Storage
- 2 Json Server

mas como a ideia é sempre manter as todos da api, não faz muito sentido utilizar desses recursos.

## Tecnologias Utilizadas & Padrões

- React
- TypeScript
- Styled-components
- Conventional-commits
- React Testing library & Jest

## Autor

Vittor Emanoel - [Meu GitHub](https://github.com/Vittor-Emanoel)

Desenvolvido com muito esforço e empenho!

"O sucesso é o encontro do preparo com a oportunidade" - Autor desconhecido
