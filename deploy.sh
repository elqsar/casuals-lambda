#!/bin/bash -e

curl https://raw.githubusercontent.com/apex/apex/master/install.sh | sh

pwd

cd src/function/casuals

npm i

cd ~/src

apex deploy 



