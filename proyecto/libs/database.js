const mysql = require("mysql2")

const connection= mysql.createConnection({
    host:'127.0.0.1',//'localhost' ejemplo 
    port: 3306,// puerto determinado
    user:'root',//nombre de  el usuario
    password:'pirlo2003',//contraseña establecida
    database:'proyecto1nodejs'//nombre de la BD
})//funcion

module.exports = {
    connection
} 
connection.connect(function(error){
    if(error){
        console.log('error de conxion'+error)
    }else{
        console.log('conexion exitosa')
    }
})
connection.end()


