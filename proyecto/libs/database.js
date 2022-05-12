const mysql = require("mysql2")

const connection= mysql.createConnection({
    host:'',//'localhost' ejemplo 
    port:'',// puerto determinado
    user:'',//nombre de  el usuario
    password:'',//contraseña establecida
    database:''//nombre de la BD
})//funcion

module.exports = {
    connection
}