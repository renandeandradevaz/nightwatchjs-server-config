Configurações para rodar o nightwatch js (http://nightwatchjs.org) em um servidor sem modo gráfico (Ubuntu server, por exemplo)

Será necessário ter instalado no servidor:

 * Java
 * Node js (Versão atualizada)
 * firefox
 

Baixe os arquivos ephemeral-x.sh e teste-nightwatch.js deste repositório


Rode os comandos:


Instalar o nightwatch:

```sh
$ npm install nightwatch
```

Iniciar o selenium com modo gráfico fake:


```sh
$ nohup sh ephemeral-x.sh -x "Xvfb -ac -screen 0 1024x768x24" java -jar node_modules/nightwatch/bin/selenium-server-standalone-(VER VERSAO NA PASTA BIN).jar
```

Em outra aba, rode o teste:

```sh
$ bash node_modules/nightwatch/bin/nightwatch -t teste-nightwatch.js
```

