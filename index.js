const express =require ('express')
const app = express()
const port = 3000

app.get ('/flash',(req, res)=> {
    res.send('me aburro pero muchooo')
})

app.listen(port, ()=>{
    console.log('la aplicacion se esta ejecutando por el puerto '+ port)
})