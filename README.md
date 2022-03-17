# GardenApp

---Build Backend----

cd ..\GardenStats\Spring
mvn clean package
docker build -t gardenstats-backend:simple -f docker/Dockerfile .

---Build Frontend----

cd ..\GardenStats\AngularMaterial
ng build --prod
docker build -t gardenstats-frontend:simple -f docker/DockerFile .

--Access Token---
cc0b578732327d59a5d7bafee4c4d0bfafb6805f6567b96e60539e0a43e071fc