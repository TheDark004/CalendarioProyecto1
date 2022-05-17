const express = require("express")
const database = require("../libs/database")
const views =require("../helpers/views")
console.log(database)

const router = express.Router()


router.get("/users",function(req,res){
    try{
        const data = await database.query("SELECT * FROM users")

        return res.json(data)
    }catch(error){
        return res.json({
            error:true,
            message:"An error ocurred"
        })
    }
})
router.get("/login",function(req,res){
    res.json({
        ruta:"login"
    })
})
router.get("/registro",function(req,res){
    return visualViewport("registro.html",res)
})

router.post("/registro",function(req,res){
    const body = req.body
    console.log(body)
    console.log(Object.keys(body))
    console.log(Object.values(body))
    
    database.connection.query(
        "INSERT INTO users(??) VALUES(?)",
        [Object.keys(body),Object.values(body)]
    )
    // Hacer una query para registrar un usuario
    // Investigar como hacer un INSERT INTO en mysql2
    return res.json({message:"SUCCESS"})
})




module.exports = router // Exportando