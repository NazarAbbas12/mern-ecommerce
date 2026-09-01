import express from 'express'
import cors from 'cors'
import 'dotenv/config'


//App config
const app = express()
const port = process.env.PORT || 4000


// middlewares
app.use(express.json())
app.use(cors())

// endpoints of api

app.get('/',(req,res)=>{
    res.send("API WORKING");
})

app.listen(port,()=>console.log('server started on port:'+port)
)