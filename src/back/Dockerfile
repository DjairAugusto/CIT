# Usa a imagem oficial do Eclipse Temurin com o JDK 21
FROM eclipse-temurin:21-jdk

# Define uma variável de ambiente chamada HOME com o valor /app
ENV HOME=/app

# Define o diretório de trabalho dentro do contêiner como o valor da variável HOME
WORKDIR $HOME

# Atualiza a lista de pacotes e instala o inotify-tools
RUN apt-get update && \
	apt-get install -y dos2unix inotify-tools && \
	rm -rf /var/lib/apt/lists/*

COPY pom.xml mvnw run.sh ./

# Define o comando de entrada padrão para iniciar o script run.sh
ENTRYPOINT [ "bash", "-c", "dos2unix run.sh mvnw; bash ./run.sh" ]