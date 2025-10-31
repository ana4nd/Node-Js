import express, { urlencoded } from "express";
import users from "./MOCK_DATA.json" with { type: "json" };
import fs from "fs";
import { json } from "stream/consumers";


const app = express();

app.use(urlencoded({extended: false}));

const PORT  = 8000;

// Routes
app.get('/', (req, res)=>{
    return res.send("Welcome to Home Page");
})

app.get('/users', (req, res)=>{
    const html = `
    <ul>
        ${users.map((user)=> `<li> ${user.first_name} </li>`).join("")}
    </ul>
    `
    return res.send(html);
})

app.get('/api/users', (req, res)=>{
    return res.json(users);
})

app.get('/api/user/:id', (req, res)=>{
    const id = Number(req.params.id);
    const user = users.find(user => user.id === id);
    return res.json(user);
})

app.post('/api/users', (req, res)=>{
    const body = req.body;
    console.log("Body", body);
    users.push({id: users.length + 1,...body });
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data)=>{
       return  res.json({status: "success", id: users.length});
    });
})

app.patch('/api/users/:id', (req,res)=>{
    // TODO : Edit the user with id
   const getId = Number(req.params.id);
   const body = req.body;

   const userIndex = users.findIndex((user)=> user.id === getId);

   const gotUser = users[userIndex];

   const updatedUser = {...gotUser, ...body};

   users[userIndex] = updatedUser;

   fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data)=>{
    return  res.json({status: "success", updatedUser
    });
   })
});

app.delete('/api/users/:id', (req, res)=>{
    // TODO: Delete the user with id
    const getId = Number(req.params.id);

    const userIndex = users.findIndex((user)=> user.id === getId);

    const gotUser = users[userIndex];

    if(userIndex !== -1){
        users.splice(userIndex, 1);
    }

    fs.unlink("./MOCK_DATA.json", (err)=>{
        fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data)=>{
            return res.json({status: "success", users: gotUser });
        })
    })
})


app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})