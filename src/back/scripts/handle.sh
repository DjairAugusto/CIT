#!/bin/bash

read msg
if [ $msg == "update" ]; then
	./mvnw compile
fi