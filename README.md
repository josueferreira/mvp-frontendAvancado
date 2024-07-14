# PetSafe Clinic Finder

## Descrição

PetSafe Clinic Finder é um aplicativo web que permite aos usuários encontrar clínicas veterinárias para pets (cães e gatos). O aplicativo permite buscar clínicas com base em problemas específicos, estados e municípios, e visualizar detalhes sobre as clínicas, incluindo serviços oferecidos, localização no mapa e opções de contato.

## Layout
Projeto foi desenvolvido com base no layout criado no Figma que pode ser acessado [aqui] (https://www.figma.com/proto/kw4ZGlXr59Gta7Kj9xubVj/MVP-PETSAFE?node-id=1-2&t=WcvgfokQUVdOoPg5-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2).

## Instalação

Siga as instruções abaixo para configurar o projeto em seu ambiente local.

### Pré-requisitos

Certifique-se de ter o Node.js e o npm instalados em seu sistema. Você pode baixar o Node.js [aqui](https://nodejs.org/).

### Passos de Instalação

1. **Clone o repositório**

    git clone https://github.com/josueferreira/mvp-frontendAvancado.git

2. **Instale as dependências**

    npm install

3. **Inicie o servidor de desenvolvimento**

    npm start

## Uso

### Home Page

    Na Home Page, os usuários podem:

    Descrever o problema do pet ou serviço que precisa. 

        Problemas cadastrados: Câncer, Picada de cobra, Fratura na pata, Lesão, Parto, Dermatite, Convulsão, Queda de Pêlo, Problema Intestinal, Problema Neurológico.

        Serviços cadastrados: Oncologia, Quimioterapia, Vacinas, Consultas, Emergência 24 horas, Cardiologia, Gastroenterologia, Neurologia, Vacinas, Consultas, Cirurgia, Laboratório, Ortopedia.

    Selecionar o estado e o município.

    Clicar no botão "Pesquisar" para ver uma lista de clínicas que podem ajudar.

### Detalhes da Clínica

    Na página de detalhes da clínica, os usuários podem:

    Ver o logotipo da clínica e seu nome.
    Visualizar o mapa da localização.
    Ver a descrição completa da clínica e os serviços oferecidos.
    Contatar a clínica via telefone ou WhatsApp.

### Cadastro de Clínica

    Na página de cadastro de clínica, os usuários podem:

    Inserir informações sobre a clínica, como nome, telefone, WhatsApp, estado, município, link do mapa, descrição, logotipo, serviços e casos. Adicionar serviços e casos dinâmicos com botões " + ".

    Clicar no botão "Cadastrar" para enviar as informações para o servidor quando estiver conectado a base de dados.
    