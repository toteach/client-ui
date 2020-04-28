FROM node:12-stretch as build-stage
ENV APP_ROOT /usr/app

WORKDIR ${APP_ROOT}
COPY . ${APP_ROOT}

RUN npm ci --silent && npm run build

FROM nginx:stable-alpine
COPY --from=build-stage usr/app/dist /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
# docker build -t toteach.registry.jetbrains.space/frontend/client:v1.0.3-pre-alpha .
