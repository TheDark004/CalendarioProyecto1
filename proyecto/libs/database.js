const mysql = require("mysql2")

const connection= mysql.createConnection({
    host:'',//'localhost' ejemplo 
    port:'',// puerto determinado
    user:'',//nombre de  el usuario
    password:'',//contraseña establecida
    database:''//nombre de la BD
})//funcion

function query(sql){
    const miPromesa = new Promise(function (resolve,reject){
        connection.query(sql,function(error,result,fields){
            if(error!=null){
                console.log(error)
    
                return reject({
                    error:true,
                    message:error.sqlMessage
                })
            }else{
                return resolve(result)
            }
        })
    })

    return miPromesa
    
}

// function myCreateConnection(objeto){
//     //procesar objeto

//     return {
//         info:{
//             name:"Connection personalizada",
//             status:"success"
//         },
//         query:function(){
//             console.log("Realizando consulta...")
//         }
//     }
// }


module.exports = {
    connection,
    query
}