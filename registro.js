const fs = require ("fs")
let users = []

const registro = (nombre, edad) => {
   console.log("creando registro", nombre)
    users.push({"nombre": nombre, "edad":edad})
}

const escribirInformacion = () => {
       fs.writeFile('usuarios.json', JSON.stringify(users), err => {
        if (err) {
            console.error(err)
        }
     });
    }

const buscarUsuario = () => {
 
   }
   
module.exports = {
    registro, 
    escribirInformacion
}