#!/bin/bash -e

docker build . -t apex-lambda-deployer

docker run apex-lambda-deployer