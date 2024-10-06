#!/bin/bash

/app/mvnw spring-boot:run &

while true; do
	inotifywait -e modify,create,delete,move -r ./src/ && /app/mvnw  compile
done