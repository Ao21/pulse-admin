FROM artifactory-docker.artifactory.cib.echonet:443/library/node:latest as angular-built

ARG npm_token
ARG href


RUN npm config set registry https://artifactory.cib.echonet/artifactory/api/npm/artifactory-npm/
RUN npm config set //artifactory.cib.echonet/artifactory/api/npm/artifactory-npm/:_authToken ${npm_token}
RUN npm config set strict-ssl false


ENV SASS_BINARY_PATH=/usr/src/app/lib/linux-x64-64_binding.node

WORKDIR /usr/src/app

# Temp Fix for missing package
RUN npm i -g @angular/cli@next

COPY package.json package.json
COPY lib lib

RUN npm install --silent

COPY . .

RUN ng build --output-path dist --base-href \/${href}\/
