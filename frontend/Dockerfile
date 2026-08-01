# Stage:1 Build React App
FROM node:22 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci 
COPY . . 
ARG BACKEND_URL
ENV VITE_API_BASE=${BACKEND_URL}
RUN npm run build

# Stage:2 Serve with NGINX
FROM nginx:alpine
RUN rm /usr/share/nginx/html/*
COPY --from=builder /app/dist /usr/share/nginx/html
RUN cp /etc/nginx/conf.d/default.conf /etc/nginx/conf.d/original.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
