# Stage 0, "build-stage", based on Node.js, to build and compile the frontend
FROM node:20 as build-stage

WORKDIR /app

COPY package*.json /app/

RUN npm install

COPY ./ /app/

ARG VITE_API_URL=${VITE_API_URL}

RUN npm run build

# Debugging step to check if the build was successful
RUN ls -la /app/dist

# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:stable-alpine

COPY --from=build-stage /app/dist/ /usr/share/nginx/html

COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY ./nginx-backend-not-found.conf /etc/nginx/extra-conf.d/backend-not-found.conf

# In thông báo xác nhận
RUN if [ -d /usr/share/nginx/html ]; then \
        echo "Frontend files copied successfully!"; \
    else \
        echo "Error: Frontend files not found in build-stage!"; exit 1; \
    fi
