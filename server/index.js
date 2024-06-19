import express from "express";
import { sql } from "./db.js";
import { register } from "./controllers/register.js";
import { auth } from "./controllers/auth.js";
import { roleMiddleware } from "./middlewares/roleMiddleware.js";
import cors from 'cors'
import { uploadFiles } from "./controllers/uploadFiles.js";
import multer from "multer";

function getFileExtension(filename) {
    return filename.split('.').pop();
}

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, '/uploads')
//     },
//     filename: function (req, file, cb) {
//       cb(null, file.fieldname + '-' + Date.now() + "." + getFileExtension(file.filename))
//     }
//   })



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        console.log(file);
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      file.fn = file.fieldname + '-' + uniqueSuffix + file.originalname
      cb(null, file.fieldname + '-' + uniqueSuffix + file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })


const PORT = 3000


const app = express()

app.use(express.json())
app.use(cors())

app.use(express.static('./uploads'));

app.get('/', roleMiddleware(["ADMIN"]), async (req, res) => {
    const data = await sql`select * from Users`
    res.send(data)
})

app.get('/request', async (req, res) => {
    const data = await sql`select * from Requests`
    res.send(data)
})
app.post('/deleterequest', async (req, res) => {
    const { id } = req.body;
    console.log(req.body);
    const data = await sql`DELETE FROM Requests where id=${id}`
    res.send(200)
})

app.post('/newrequest', upload.single('image'), uploadFiles)

//ветка регистрации
app.post('/reg', register)
//ветка логина
app.post('/auth', auth)


//функция старта приложения
const start = async () => {

    //создаем таблицы
    await sql`create table if not exists Roles(
        role varchar(100) unique primary key
    )`
    await sql`create table if not exists Users(
        id SERIAL PRIMARY KEY NOT NULL,
        name varchar(100) NOT NULL,
        role varchar(100),
        password varchar(100),
        FOREIGN KEY (role) REFERENCES Roles(role)
    )`
    await sql`create table if not exists requests(
        id SERIAL PRIMARY KEY NOT NULL,
        title text NOT NULL,
        description text,
        image varchar(255)
        
    )`

    

    // await sql`insert into Roles(role) values('USER')`
    // await sql`insert into Roles(role) values('ADMIN')`

    
    app.listen(PORT, () => {
        console.log(`СЕРВАК ФУРЫЧИТ ТУТ http://localhost:${PORT}`);
    })
}

start()