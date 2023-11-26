# Crud Visitantes


## Descrição

Este projeto é um crub simples de visitantes, onde é possível cadastrar, editar, excluir e listar visitantes.

## Componentes
Um front end simples foi desenvolvido em REACT para consumir a api.

A API foi desenvolvida em NodeJS e Express.

Banco de dados: Postgres com Prisma funcionando com Docker.

## Execução

## Requisitos
- NodeJS
- NPM
- Docker
- Imagem Docker Postgres

## Clone o projeto
```bash
git clone https://...
```

### Configuração do banco de dados
Criar o container do banco de dados, execute o comando abaixo (necessário estar na pasta raiz do projeto):
```bash
sudo docker run -p 5000:5432 --name DbCrud -v ./database/db:/var/lib/postgresql/data -e POSTGRES_PASSWORD=1234 -d postgres
```

Para verificar se o container está rodando, execute o comando abaixo:
```bash
sudo docker ps
```
Se tudo correr bem, o container estará listado com nome DbCrud.

Asesse a pasta da API (api)
```bash
cd api
```

Execute o comando abaixo para instalar as dependências:
```bash
npm install
```

Criar as tabelas do banco de dados:
```bash
 npx prisma migrate dev --name create-visitante
```

## Iniciar a API:
Inicar a API:
```bash
npm run dev
```

## Iniciar o front end:

Acesse a pasta do front end (front-end) abra um novo terminal e execute o comando abaixo:
```bash
cd frontend
```

Instale as dependências:
```bash
npm install
```

Inicie o front end:
```bash
npm run dev
```

## Acessar o sistema
Acesse o frontEnd através do endereço:
```bash
http://localhost:4000/
```

Acessar a API através do endereço:
```bash
http://localhost:3000/
```

Acessar o banco de dados através dos comandos:
```bash
sudo docker exec -it DbCrud psql -U postgres
```

```bash
\c DbCrud
```
```bash
SELECT * FROM visitantes
```
Ou através do utilitário Prisma Studio:

Execute o comando abaixo para iniciar o Prisma Studio na raiz da API:
```bash
npx prisma studio
```

Acesse o Prisma Studio através do endereço:
```bash
http://localhost:5555/
```

OBS: Verifique a disponibilidade das portas 3000, 4000 e 5000, caso estejam em uso as libere ou altere as portas nos arquivos .env (api) e vite.config.js (front-end). Para a 5000, altere no comando de criação do container do banco de dados.

## Observações Gerais
- Os arquivos .env e não devem ser versionados, porém, para facilitar a execução do projeto, os mesmos foram versionados.
- Este projeto foi desenvolvido em ambiente Linux, não foi testado em outros ambientes.
- O projeto foi desenvolvido em ambiente local, não foi testado em ambiente de produção.
- Este projeto foi desenvolvido para fins de estudo usando como base as documentações das tecnologias utilizadas e alguns vídeos do youtube especialmente o vídeo [Masterclass - Construindo aplicação com microserviços em NodeJS](https://www.youtube.com/live/dOdSaLcZJDk?si=jL9GKTnMM9I5fhpf) do Canal Daniele Leão sem abordar a parte de microserviços e messageria presente lá.

 