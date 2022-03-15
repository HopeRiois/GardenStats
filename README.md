# GardenApp

---Build Backend----

cd ..\GardenStats\Spring
mvn clean package
docker build -t gardenstats-backend:simple -f docker/Dockerfile .

---Build Frontend----

cd ..\GardenStats\AngularMaterial
ng build
docker build -t gardenstats-frontend:simple -f docker/DockerFile .