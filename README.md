# levantar back:

1) crear cuenta en https://cloudinary.com/users/register_free

2) obtener credenciales (disponibles en el dashboard de cloudinary)
```
Cloud Name
API Key
API Secret
```
3) dependencias:

- instalar python
```
https://www.python.org/downloads/
```
- librerias de desarrollo c++

instalar visual studio (no confundir con vs code)
```
https://learn.microsoft.com/en-us/visualstudio/install/install-visual-studio?view=vs-2019#step-3---install-the-visual-studio-installer
```
y seleccionar "desktop development with c++"

- finalmente installar las dependencias propias del proyecto:
```
npm i
```
4) crear archivo de variables en el path back/.env :
```
HOST=0.0.0.0
PORT=1337
//..
CLOUDINARY_NAME=<Cloud Name>
CLOUDINARY_KEY=<API Key>
CLOUDINARY_SECRET=<API Secret>
```

5) correr el backend
```
npm run develop
```