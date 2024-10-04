FROM maven:3.9.9 AS builder

ENV HOME=/build

WORKDIR $HOME
COPY .mvn ./.mvn
COPY pom.xml ./
COPY src ./src

RUN mvn clean install spring-boot:repackage

FROM openjdk:21-jdk

ENV HOME=/app

WORKDIR $HOME
COPY --from=builder /build/target/*.jar .

ENTRYPOINT [ "java", "-jar", "backend-0.0.1-SNAPSHOT.jar" ]