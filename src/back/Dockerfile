# Usa a imagem oficial do Eclipse Temurin com o JDK 21
FROM eclipse-temurin:21-jdk

# Define uma variável de ambiente chamada HOME com o valor /app
ENV HOME=/app

# Define o diretório de trabalho dentro do contêiner como o valor da variável HOME
WORKDIR $HOME

# Atualiza a lista de pacotes e instala o inotify-tools
RUN apt-get update && \
	apt-get install -y inotify-tools

# Define o comando de entrada padrão para iniciar o script run.sh
ENTRYPOINT [ "sh", "run.sh" ]