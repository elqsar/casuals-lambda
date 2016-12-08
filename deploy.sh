#!/bin/bash -e

docker build . -t apex-lambda-deployer \
--build-arg AWS_ACCESS_KEY_ID=$AWS_ACCESS_KEY_ID \
--build-arg AWS_SECRET_ACCESS_KEY=$AWS_SECRET_ACCESS_KEY \
--build-arg AWS_REGION=$AWS_REGION

docker run apex-lambda-deployer