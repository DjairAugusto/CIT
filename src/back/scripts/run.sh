#!/bin/bash

./mvnw spring-boot:run &
ncat -lkp 8081 -c ./scripts/handle.sh