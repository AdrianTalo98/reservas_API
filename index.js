const express = require('express')
const cors = require('cors');
const bp = require('body-parser')

const app = express()
const port = 5000

const { pool } = require("./db");

app.use(cors());
app.use(express.json());
app.use(bp.urlencoded({extended:true}));
app.use(bp.json());


app.get('/', (req, res) => {


    res.send('Hello World!, redyson')

    

    async function retrieveData() {
    try {
        const res = await pool.query("SELECT * FROM usuario");
        console.log(res.rows);
        
    } catch (error) {
        console.error(error);
    }
    }

    retrieveData()


})

app.get('/disponible',(req,res)=>{
    res.send('Hello World!, redyson')
    async function Canchas(){
        try{
            const res = await pool.query("select * from Disponible where Disponible.isAvaible='true'");
            console.log(res.rows);

        }catch{
            console.log(error)
        }
    }
    Canchas();
})

app.get('/canchas1',(req,res)=>{
    
    async function Canchas1(){
        try{
            const resp = await pool.query("select * from Disponible where Disponible.isAvaible='true' and Disponible.id_cancha='000001' order by Disponible.fecha");
            //console.log(resp.rows);
            res.send(resp.rows)

        }catch{
            console.log("error")
        }
    }
    Canchas1();
})

app.get('/canchas2',(req,res)=>{

    async function Canchas2(){
        try{
            const resp = await pool.query("select * from Disponible where Disponible.isAvaible='true' and Disponible.id_cancha='000002' order by Disponible.fecha");
            res.send(resp.rows)

        }catch{
            console.log("error")
        }
    }
    Canchas2();
})

app.get('/canchas3',(req,res)=>{

    async function Canchas3(){
        try{
            const resp = await pool.query("select * from Disponible where Disponible.isAvaible='true' and Disponible.id_cancha='000003' order by Disponible.fecha");
            res.send(resp.rows)

        }catch{
            console.log("error")
        }
    }
    Canchas3();
})

app.post('/register',(req,res)=>{

    //console.log(req.body.correo)
    async function Register(){
        try{
            const res = await pool.query(`insert into usuario(Rut,nombre,apellido,correo,fecha_nacimiento,telefono,password) VALUES ('${req.body.Rut}','${req.body.nombre}','${req.body.apellido}','${req.body.correo}','${req.body.fecha_nacimiento}',${req.body.telefono},'${req.body.password}')`);
            console.log(res.rows);

        }catch{
            console.log(error)
        }
    }
    Register();
    //console.log(`insert into usuario(Rut,nombre,apellido,correo,fecha_nacimiento,telefono,password) VALUES ('${req.body.Rut}','${req.body.nombre}','${req.body.apellido}','${req.body.correo}','${req.body.fecha_nacimiento}',${req.body.telefono},'${req.body.password}')`)
    
    res.send("registrar")

})

app.post('/login',(req,res)=>{

    async function Login(){
        try{
            const resp = await pool.query(`select usuario.password from usuario where usuario.correo ='${req.body.correo}'`);
            if(resp.rows[0].password === req.body.password){
                const ress = await pool.query(`select usuario.rut from usuario where usuario.correo ='${req.body.correo}'`);
                console.log(JSON.stringify(ress.rows[0].rut))
                res.send(JSON.stringify(ress.rows[0].rut))
            
            }else{
                console.log("Tamos malardo")
                return "bad"
            }
            


        }catch{
            console.log("error")
        }
    }
    Login();


    
})

app.post('/reservar',(req,res)=>{

    async function Reservar(){
        try{
            //console.log(req.body)
            const ress = await pool.query(`UPDATE disponible SET isAvaible='0' where disponible.id_cancha='${req.body.id_cancha}' and disponible.fecha ='${req.body.fecha}' AND disponible.hora =${req.body.hora}`);
            const ress2 = await pool.query(`INSERT INTO Reservar (Codigo_reserva,id_cancha,rut_cliente,fecha,hora) VALUES ('${req.body.Codigo_reserva}','${req.body.id_cancha}','${req.body.rut_cliente}','${req.body.fecha}',${req.body.hora})`);
            res.send("Listo, esta reservado")

        }catch{
            
            res.send("Error")
        }
    }
    Reservar();

})

app.get('/reservas',(req,res)=>{
    async function Reservas(){
        try{
            //console.log(req.body)
            const ress = await pool.query(`select * from reservar order by reservar.fecha, reservar.hora;`);            
            res.send(ress.rows)

        }catch{
            
            res.send("Error")
        }
    }
    Reservas();

})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})