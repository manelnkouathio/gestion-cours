# ============================================================
# Étape 1 : Build du frontend React
# ============================================================
FROM node:20-alpine AS frontend-build

WORKDIR /frontend
COPY frontend/package*.json ./
RUN npm install
COPY frontend/ ./
RUN npm run build

# ============================================================
# Étape 2 : Build du backend Spring Boot (avec le frontend intégré)
# ============================================================
FROM maven:3.9-eclipse-temurin-21 AS backend-build

WORKDIR /app
COPY pom.xml .
COPY .mvn/ .mvn/
COPY mvnw .
RUN chmod +x mvnw

# Télécharge les dépendances Maven séparément pour profiter du cache Docker
RUN ./mvnw dependency:go-offline -B

COPY src/ src/

# Copie le build React généré à l'étape 1 dans les ressources statiques Spring Boot
COPY --from=frontend-build /frontend/dist/ src/main/resources/static/

RUN ./mvnw clean package -DskipTests

# ============================================================
# Étape 3 : Image finale, légère, uniquement le JRE + le jar
# ============================================================
FROM eclipse-temurin:21-jre-alpine

WORKDIR /app

# Copie uniquement le jar compilé depuis l'étape de build (pas Maven ni les sources)
COPY --from=backend-build /app/target/gestion-cours-0.0.1-SNAPSHOT.jar app.jar

# Render fournit le port via la variable d'environnement PORT
EXPOSE 8080

# -Xmx350m : limite le tas mémoire pour tenir dans les 512 Mo du free tier Render
# server.port sera lu depuis application.properties via ${PORT:8080}
ENTRYPOINT ["java", "-Xmx350m", "-jar", "app.jar"]
