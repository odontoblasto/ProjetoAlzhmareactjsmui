## Background
* Esse repositório possui o código-fonte e a documentação do projeto da Disciplina de Engenharia de Software (IF-977) ministrada pelo Professor Vinicius Garcia, do CIn/UFPE.

<img src="Alzhma-2.0/screenshots/3.png"/>

#  Presents ...

## Membros
* Carlos Eduardo D.F. de Vasconcellos (cedfv)
* Pedro Henrique Medeiros (phmfl)
* Leonardo Bezerra de Oliveira (lbo)

<img src="projeto/src/assets/images/imageHomeOK.png"/>

### em Homenagem à Sra. Rosa Maria, vítima de Alzheimer em 01 de Junho de 2022.
<p> "Se me obrigassem a dizer por que a amava,</p>
<p> sinto que a minha única resposta seria:</p>
<p> porque era Ela,</p>
<p> porque era Eu." - adapatado de Michel de Montaigne</p>

#  Projeto Alzhma 1.0
<img src="projeto/src/assets/images/logoS.png"/>

## Objetivo
* O objetivo do projeto é construir uma aplicação (no formato MVP), que seja capaz de estimular cognitiva e digitalmente, pessoas acometidas pela Doença de Alzheimer.

* Nossa aplicação se chama "The Alzhma Project" e pretende ser uma plataforma capaz de estimular a cognição e a memória de pessoas acometidas pela Doença de Alzheimer, podendo ser também utilizada por  pessoas com outros distúrbios de memória e cognição, por meio de atividades lúdicas.
* Sendo assim, nossa missão é tentar fornecer uma plataforma digital lúdica que promova melhorias tanto no quadro clínico ,como no emocional dos pacientes.

#### Página Home Alzhma 1.0

<img src="Alzhma-2.0/screenshots/Home Alzhma1.0.png"/>

#### Página Create Alzhma1.0

<img src="Alzhma-2.0/screenshots/Create Alzhma 1.0.png"/>

#### Página Create2 Alzhma1.0

<img src="Alzhma-2.0/screenshots/Alzhma1.0.png"/>

#### Página Quiz Alzhma 1.0

<img src="Alzhma-2.0/screenshots/Quiz Alzhma1.0.png"/>

# The Alzhma Project 2.0 
<img src="Alzhma-2.0/screenshots/bgBlackOK.png"/>

## Link para o projeto
* versão 1.0 - https://github.com/odontoblasto/ProjetoAlzhmareactjsmui 
* versão 2.0 - https://github.com/odontoblasto/Alzhma2.0

## Link para o vídeo de demonstração da plataforma (Screencast)

vídeo do App - 
https://www.youtube.com/watch?v=2Tf0h0mIYNM

## Sprints

### Notion - https://www.notion.so/eb6cf17894f2461e9b5572baa1e43ccb?v=cd505245f243461a99aa71b8a81d663c

### Especificar o período da sprint: 05/04 a 12/04.
 #### Meta da sprint 
* Criar plano de telas iniciais 
* Alinhar back, front e banco
* Buscar novas atividades lúdicas para atualizar projeto
* Listas as atividades previstas indicando o responsável
* Buscar novas atividades [Leonardo, Carlos]
* Criar plano de telas [Pedro]
* Alinhar back, front e banco [Carlos, Leonardo e Pedro]

### Especificar o período da sprint: 13/04  a 19/04.
 #### Meta da sprint 
* Organizar back com as novas atividades
* Organizar front, design das abas
* Realizar testes 
* Listas as atividades previstas indicando o responsável
* Finalizar integração back-end [Leonardo, Pedro]
* Finalizar layout do front [Carlos]
* Realizar testes [ Carlos, Leonardo, Pedro]
* Deploy da aplicação;

### Especificar o período da sprint: 20/04  a 26/04.
 #### Meta da sprint 
* Término Front-End com Autenticação Firebase/Google - concluído
* Término da integração front/Back/BD - concluído
* Listas as atividades previstas indicando o responsável
* Realizar testes com GitHub Co-Pilot - [ Carlos, Leonardo, Pedro] - em execução
* Deploy da aplicação;(Carlos) - a fazer


## Explicações sobre decisões tomadas no decorrer do Projeto

* Tivemos muita dificuldade na criação do Projeto porque de forma indevida, "pensamos mais na solução no que no problema", já que a versão 1.0 estava enviesada por ter sido criada para um único "cliente". O projeto foi baseado na história familiar de um dos nossos integrantes que criou uma solução pessoal.
* Esse viés foi esclarecido pelo Professor na 1º reunião de alinhamento. Repensamos o problema e criamos uma versão,2.0, mais genérica e que serve de "backbone" para a criação de plataformas digitais lúdicas.
* Essas plataformas podem ser utilizadas em diversos distúrbios de cognição, memória e aprendizado.Porém, o viés encurtou o tempo disponível, mesmo tendo criado um MVP funcional, muitas "features" básicas ainda não estão funcionais.
* Mesmo utilizando o Github Co-Pilot, temos ciência que os Testes poderiam ter sido mais utilizados.Implementamos testes unitários dos elemntos HTML com Jest e Testing Library nativos, porém por falta de habilidade deixamos de utilizar o Cypress.
* De qualquer forma, criamos no código-fonte "breadcrops" que indicam nossa vontade e a possibilidade de melhoria para a versão 3.0 quando esperamos realizar todas as "features" básicas pensadas.
* Por fim, temos ciência que o primeiro passo foi dado, já que nosso projeto pode ser apresentado para os profissionais da Saúde que lidam com o público-alvo, e esses, contribuirão na composição final do projeto.
Essa contribuição definirá quais métricas e "features" avançadas devem ser implementadas.

## Mock-Up com Python

* No início do projeto, utilizamos Python na construção de um Mock-Up. Essa etapa, permitiu a visualização de quais "caminhos" e estruturas de dados deveriam ser utilizadas - Array,Dict, Objects - já que só conhecíamos Python. 
* https://github.com/odontoblasto/ProjetoAlzhmareactjsmui/tree/main/projeto/python

## MVP - visão geral

* Decidimos utilizar o protocolo MERN - MongoDB, Express, ReactJS e Node.Js.

### Front-End

* Como requisitado nas orientações de projeto da Disciplina, utilizamos HTML,CSS, JS e ReactJS como
bases da programação. A curva de aprendizado foi de +- 6 meses, sendo o aluno Carlos Eduardo, o principal agente do Front-End.
* Utilizamos também, BootStrap, ReactStrap, Material UI , como Libs para a construção do Layout das páginas e  Google Firebase como "3° Party" na autenticação de usuário.

### Back-End

* Utilizamos Node.Js como base do Back-End, sendo o aluno Leonardo Bezerra seu principal agente. A curva de aprendizado foi de +- 4 meses.
* Integramos Front/Back com Axios, quando usamos a "Programação em Par"- Carlos e Leonardo.
* A integração Back/BD, realizada com Cors e Express, foi realizada com "Programação em Par' - Leonardo e Pedro. 

### BD

* Como BD, foi utilizado MongoDb Atlas pela familiaridade do aluno Pedro, DBA do projeto. Fomentamos a possibilidade de mudança para FireStoreDataBase, porém por medo de "Bug" no última etapa, adiamos esse debate para a versão 3.0. 

#### Modelo ER - Alzhma 2.0

<img src="Alzhma-2.0/screenshots/Modelo ER-Alzhma2.0.jpg"/>

### Ferramentas utilizadas no Projeto
* Notion - https://www.notion.so/eb6cf17894f2461e9b5572baa1e43ccb?v=cd505245f243461a99aa71b8a81d663c
* Javascript
* React JS
* Python
* HTML
* CSS
* Bootstrap 
* MUI
* Node.js
* Axios
* Express.js
* Jest
* Cors
* Firebase
* MongoDB Atlas

### Escolha de ferramenta para deploy

* Implementamos o FrontEnd no Firebase e Vercel.
* Pela facilidade de integração, conseguimos implemetar Front/Back/DB na Vercel, porém não conseguimos conectar satisfatoriamnte todas as funcionalidades.
* Falta corrigir a conexão entre Back e DB.

* Deploy FrontEnd -
* Firebase - https://alzhma.web.app/

* Deploy Front/Back/DB -
* Vercel/RailWay.App/MongoDB - https://alzhmavercel.vercel.app/

## Screenshots

### Página Inicial LocalHost

<img src="Alzhma-2.0/screenshots/Home Page.png"/>

### Página de Login  LocalHost

<img src="Alzhma-2.0/screenshots/Login Page.png"/>

### Página de Criação de Perguntas e Resposta  LocalHost

<img src="Alzhma-2.0/screenshots/Create Page.png"/>

### Página do Quiz  LocalHost

<img src="Alzhma-2.0/screenshots/Quiz Page.png"/>

### Página do Quiz Update Question or Answer - Modal - LocalHost

<img src="Alzhma-2.0/screenshots/Quiz Page - UpDate.png"/>

### Página do Auth Google FireBase  LocalHost

<img src="Alzhma-2.0/screenshots/Auth Page - FireBase.png"/>

### Página do Backend  LocalHost

<img src="Alzhma-2.0/screenshots/BackEnd.png"/>

### Página do MongoDb Atlas  LocalHost

<img src="Alzhma-2.0/screenshots/MongoDB Atlas.png"/>

### Página Testes Jest

<img src="Alzhma-2.0/screenshots/Unt Test - Jest.png"/>

### Página Deploy Firebase Console

<img src="Alzhma-2.0/screenshots/Deploy - Firebase.png"/>

### Página Deploy Firebase Home

<img src="Alzhma-2.0/screenshots/Deploy - Firebase 1.png"/>

### Página Deploy Vercel

<img src="Alzhma-2.0/screenshots/Deploy Front - Vercel.png"/>

### Página de Integração Vercel/Railway.app/MongoDB - front/Back/DB

<img src="Alzhma-2.0/screenshots/Integração Front - Vercel-RailWay.App-MongoDB.png"/>

### Página Vercel Home

<img src="Alzhma-2.0/screenshots/Home Vercel.png"/>

### Página Login Vercel

<img src="Alzhma-2.0/screenshots/Create Vercel.png"/>

### Página Create Vercel

<img src="Alzhma-2.0/screenshots/Create Vercel.png"/>

### Página Integração MongoDB/Vercel

<img src="Alzhma-2.0/screenshots/Integração DB Vercel.png"/>


# Avaliação do Aprendizado

* Mesmo tendo conseguido entregar uma "GMV" os seguintes descuidos devem ser sanados:

*  melhor escolha do Framework : utilizamos NPM como gerenciador de pacotes do Node, porém existem Ferramentas mais atuais que facilitam o manejo, a integração e deploy da aplicação como Next/Vercel , Yarn ;

*  melhor divisão de nosso tempo útil : o viés da versão 1.0, e a necessidade de requalificar nosso projeto, de forma mais genérica, removeu tempo necessário para o entendimento de ferramentas como o Cypress,que nos ajudaria na construção de teste E2E, que não foram executados.
*  Cremos na necessdiade de testar o 'comportamento' das funções e não somente a presença de componentes HTML;
*  melhor escolha de  componentes da Arquitetura : muito tempo foi perdido na integração entre Front/Back e BD - protocolo MERN.
*  O Google Firebase, por exemplo, facilita a integração MVP, com soluções , praticamente integradas ( Plug & Play ) - Auth, FireStore DataBase e Hosting, por exemplo.
* Há  também outras plataformas como Netlify, Hostinger, AWS, Vercel ...

# Versão 3.0 -

* Diante do exposto, decidimos criar a versão 3.0 com o Framework Next/Vercel/RailWay.app/MongoDB.......

### Página Home versão 3.0 - Next

<img src="Alzhma-2.0/screenshots/The Alzhma_Next 3.0.png"/>


## Referências utilizadas na elaboração do projeto

* https://github.com/IF977/if977 ( Repositório da cadeira de Engenharia de Software )
* https://www.youtube.com/watch?v=MpQbwtSiZ7E ( MERN Protocol )
* https://www.youtube.com/watch?v=x9tC0eK0GtA ( MongoDB Atlas )
* https://www.youtube.com/watch?v=bMknfKXIFA8 ( React JS tutorial )
* https://www.youtube.com/watch?v=p1bjHvX-DqM&t=1293s ( Teste Jest tutorial )
* https://www.youtube.com/watch?v=9bXhf_TELP4&t=1044s ( Auth Firebase )
* https://www.youtube.com/watch?v=2hR-uWjBAgw&t=5320s ( Deploy Firebase )
* https://www.portal.ufpa.br/index.php/ultimas-noticias2/9545-aplicativo-desenvolvido-na-ufpa-ajuda-no-tratamento-de-alzheimer-em-idosos ( App Alzheimer UFPA )
