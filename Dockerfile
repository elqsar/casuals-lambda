FROM lambci/lambda:build

# Install Apex
WORKDIR /tmp
RUN curl https://raw.githubusercontent.com/apex/apex/master/install.sh | sh

# Args 
ARG AWS_ACCESS_KEY_ID
ARG AWS_SECRET_ACCESS_KEY
ARG AWS_REGION

# Env variables
ENV AWS_ACCESS_KEY_ID ${AWS_ACCESS_KEY_ID}
ENV AWS_SECRET_ACCESS_KEY ${AWS_SECRET_ACCESS_KEY}
ENV AWS_REGION ${AWS_REGION}

# Copy code into container and install dependencies
COPY /src /srv/src
WORKDIR /srv/src/functions/casuals
RUN npm i

# Run
WORKDIR /srv/src
CMD ["apex", "deploy"]