FROM node:18.9.0-bullseye-slim

RUN \
  apt-get -y update; \
  apt-get -y install python3 build-essential

#USER node

WORKDIR /home/node/volumes
CMD /bin/bash