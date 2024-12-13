# Etapa de construcción
FROM node:alpine AS build

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar package.json y yarn.lock
COPY package.json yarn.lock ./

# Instalar dependencias
RUN yarn install

# Copiar el resto del código de la aplicación
COPY . .

# Compilar la aplicación para producción
RUN yarn build

# Etapa de producción
FROM nginx:alpine

# Copiar los archivos de compilación desde la etapa de construcción
COPY --from=build /app/build /usr/share/nginx/html

# Exponer el puerto en el que Nginx servirá la aplicación
EXPOSE 80

# Comando para iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]
