#!/bin/bash

handle () {
	read msg
	if [ $msg == "update" ]; then
		./mvnw compile
	fi
}

netcat -lkp 1234 --exec handle