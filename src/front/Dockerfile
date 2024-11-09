# Usa a imagem oficial do Node.js na versão LTS (Long Term Support)
FROM node:lts

# Define uma variável de ambiente chamada HOME com o valor /app
ENV HOME=/app

# Define o diretório de trabalho dentro do contêiner como o valor da variável HOME
WORKDIR $HOME

# Copia os arquivos package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instala as dependências do projeto usando npm i
RUN npm i

# Define o comando de entrada padrão para iniciar o aplicativo no modo de desenvolvimento
ENTRYPOINT [ "npm", "run", "start" ]