FROM eclipse-temurin:21-jdk

ENV HOME=/app

WORKDIR $HOME
RUN apt-get update && \
	apt-get install -y inotify-tools

ENTRYPOINT [ "sh", "run.sh" ]