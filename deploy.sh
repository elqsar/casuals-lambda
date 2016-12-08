#!/bin/bash -e

curl https://raw.githubusercontent.com/apex/apex/master/install.sh | sh

cd src/function/casuals

npm i

cd ~/src

apex deploy 



