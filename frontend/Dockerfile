# ---------- Build Stage ----------
FROM node:18-alpine AS build
WORKDIR /frontend

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build


# ---------- Runtime Stage ----------
FROM nginx:alpine

# Remove default nginx site
RUN rm -rf /etc/nginx/conf.d/*

# Nginx config on port 3000
RUN printf "server {\n\
    listen 3000;\n\
    server_name localhost;\n\
\n\
    location / {\n\
        root   /usr/share/nginx/html;\n\
        try_files \$uri /index.html;\n\
        index  index.html;\n\
    }\n\
}\n" > /etc/nginx/conf.d/default.conf

# Copy build output (FIXED PATH)
COPY --from=build /frontend/build /usr/share/nginx/html

EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]
