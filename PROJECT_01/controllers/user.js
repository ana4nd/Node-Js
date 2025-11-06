import User from "../models/user.js";


export async function getAllUsers(req, res) {
    const allDbUsers = await User.find({});
    return res.json(allDbUsers);
}

export async function getUserbyId(req, res) {
    const user = await User.findById(req.params.id);
    if (!user) {
        return res.status(404).json({ msg: "User not found" });
    }
    return res.json(user);
}

export async function updateUserbyId(req, res) {
    await User.findByIdAndUpdate(req.params.id, { lastName: "Thakur" });
    return res.json({ status: "success" });
}
export async function deleteUserbyId(req, res) {
    await User.deleteUserbyId(req.params.id);
    return res.json({ status: "success" });
}

export async function createUser(req, res) {
   const body = req.body;

    if(!body || !body.first_name || !body.last_name || !body.email || !body.job_title){
        return res.status(400).json({
            msg: "All fields are required"
        })
    }

    const result = await User.create({
        firstName: body.first_name,
        lastName: body.last_name,
        email: body.email,
        gender: body.gender,
        jobTitle: body.job_title
    })

    console.log("result", result);
    

    return res.status(201).json({
        msg: "User created successfully",
        id: result._id
    })
}
