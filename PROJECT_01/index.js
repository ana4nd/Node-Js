import express from "express";
import users from "./MOCK_DATA.json" with { type: "json" };


const app = express();

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
    // TODO : Create new user
    res.json({status: "pending"});
})

app.patch('/api/users/:id', (req,res)=>{
    // TODO : Edit the user with id
    return res.json({status: "pending"});
});

app.delete('/api/users/:id', (req, res)=>{
    // TODO: Delete the user with id
    return res.json({status: "pending"});
})


app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})