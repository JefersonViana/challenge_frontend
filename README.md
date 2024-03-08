# Aplicativo de Gerenciamento de Produtos

Este é um aplicativo web para gerenciar produtos (celulares) utilizando Node.js para o backend e React para o frontend.

## Funcionalidades

- Página de registro e login
- Página principal para visualização, adição, edição e exclusão de produtos
- Pesquisa e filtragem de produtos
- Listagem de produtos de APIs externas
- Inserção de produtos das APIs externas usando três estruturas diferentes

## Tecnologias Utilizadas

- Backend: Node.js, Express.js, Sequelize, PostgreSQL, JsonWebToken
- Frontend: React, Next.js, Tailwind CSS
- Hospedagem: Vercel Functions (backend), Vercel (frontend)

## Como Executar o Projeto

1. O frontend está implantado em [front-end](https://challenge-frontend-tau.vercel.app/). Você pode acessá-lo diretamente no navegador.
2. O backend está implantado em [back-end](https://challenge-backend-hazel.vercel.app/). Você pode acessá-lo diretamente no navegador.

## Nota 

- O backend na rota base `/` retorna um json `{ ok: true }` para verificar se está funcionando corretamente.

## Rotas

### Backend (Node.js em Vercel functions)

#### Registro e Login

- `POST /api/register`: Registro de novos usuários
  - Corpo da solicitação: `{ username: string, email: string, password: string }`
- `POST /api/login`: Login de usuários existentes
  - Corpo da solicitação: `{ username: string, password: string }`
  - Retorna um token de autenticação

#### Celulares

- `GET /api/phones`: Retorna todos os celulares
- `GET /api/phones/:id`: Retorna um celular específico por ID
- `POST /api/phones`: Adiciona um ou vários celulares
  - Corpo da solicitação: Veja as estruturas mencionadas na documentação
- `PUT /api/phones/:id`: Atualiza um celular existente por ID
  - Corpo da solicitação: Veja as estruturas mencionadas na documentação
- `DELETE /api/phones/:id`: Exclui um celular existente por ID

#### Rotas Externas para Consumir e Inserir Celulares

- `GET /api/phones`: Retorna celulares de APIs externas
- `POST /api/phones`: Insere celulares das APIs externas
  - Corpo da solicitação: Veja as estruturas mencionadas na documentação

### Frontend (React em Vercel)

- `/`: Página de login
- `/`: Página de registro
- `/listphones`: Página principal para visualização, adição, edição e exclusão de produtos
- `/adicionar`: Página para listar e inserir produtos de APIs externas

## Autores

- [Jeferson Viana](https://github.com/JefersonViana)

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.