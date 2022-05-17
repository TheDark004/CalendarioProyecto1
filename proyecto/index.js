const path = require("path")
const express = require("express")
const app=express()
const port = 4000

const users = require("./routes/users")

app.use(express.static(path.join(__dirname,"static")))

app.use(users)

app.get("/", function(req,res){
    console.log(dirname) // Ubicacion 0 Ruta de nuestro proyecto
    return res.sendFile(path.join(dirname, "views", "index.html"))
})






app.listen(port,()=>{
    console.log("Escuchando: http://localhost:"+port)
})



