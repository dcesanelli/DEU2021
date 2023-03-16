El juego está basado en el juego react-sliding-puzzle de licencia abierta

https://github.com/danba340/react-sliding-puzzle/tree/seperate-images

Se modificó para que permita cargar diversas imagenes y se agregaron funcionalidades

Para generar imagen

docker build . -t deu2021

Para correr la imagen local (mapea puerto 8080 para asegurarse que no esta usado)

docker run -dit -p 8080:80 deu

Acceder con http://localhost:8080

