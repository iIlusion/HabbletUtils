<br>
<div align="center">

[<img src="https://i.imgur.com/fx3oRuc.png" width="350"/>](https://i.imgur.com/aHbAqzK.png)

![Habblet Utils](https://i.imgur.com/nXZwUzG.gif)
<h1 align="center"></h1>
</div>
<br>

## Sobre

HabbleUtils é uma extensão do [G-Earth](https://github.com/UnfamiliarLegacy/G-Earth "G-Earth") que reúne diversas funções utilitárias para o [Habblet](http://habblet.city "Habblet")!

### Youtube Showcase
[<img src="https://i.imgur.com/nNP0Zi3.png" width="350"/>](https://www.youtube.com/watch?v=9tSKX5I8alk)

## Funções
- Anti AFK
- Anti Spam
- Anti Turn
- Block Typing
- Block Move
- Stay
- Flood Click
- Flood Hand Item

## Instalação
1. Baixe a ultima versão do [G-Earth](https://github.com/UnfamiliarLegacy/G-Earth "G-Earth")
2. Baixe a última versão do HabbletUtils direto da página de [Releases](https://github.com/iIlusion/HabbletUtils/releases/latest).
3. Abra o [G-Earth](https://github.com/UnfamiliarLegacy/G-Earth "G-Earth") e ative o modo desenvolvedor na aba Extra
4. Vá para a aba de extensões e clique em instalar e selecione o arquivo HabbletUtils.js baixado no passo 2
5. Conecte-se ao Habblet, a extensão deverá estar funcionando e você receberá um console.

* **Se você tiver algum problema com a instalação do G-Earth ou da Extensão me procure no Habblet. Nick: Promise.all**

##  Contribuindo

### Faça um fork e clone seu repositorio

1. Fork o repositorio [(clique aqui para fazer um fork agora)](https://github.com/iIlusion/HabbletUtils/fork)
2. Clone seu fork `git clone https://github.com/your_username/HabbletUtils`
3. Crie uma nova branch
4. Push seus commits
5. Envie um pull request

## Rodando pela source
### Instale o Node.js

Certifique-se de ter o Node.js instalado em sua máquina. Se não, baixe e instale-o de [nodejs.org](https://nodejs.org/).

### Instale o Yarn

Yarn é um gerenciador de pacotes para Node.js. Se você ainda não instalou o Yarn, pode fazê-lo seguindo as instruções em [yarnpkg.com](https://classic.yarnpkg.com/lang/en/docs/install/).

### Instale as dependências do Node

Navegue até o diretório do projeto e instale as dependências do Node usando o Yarn:

```bash
cd HabbletUtils
yarn
```

## Rodando em teste

Depois de configurar tudo, você pode executar o seguinte comando para iniciar a extensão

```bash
yarn dev
```

## Compilando o projeto

Depois de fazer suas alterações você pode compilar o projeto para o arquivo final e adiciona-lo ao seu G-Earth

```bash
yarn build
```

O arquivo final será gerado em `dist/HabbletUtils.js`
Antes de compartilhar sua build e ou adicionar ao G-Earth, você pode testar a versão compilando executando o seguinte comando

```bash
yarn start
```
