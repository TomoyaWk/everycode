FROM node:12.13
RUN npm install -g express-generator sequelize-cli

COPY entrypoint.sh /var/tmp
CMD bash -E /var/tmp/entrypoint.sh && /bin/bash