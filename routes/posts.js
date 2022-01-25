const express = require("express");
const User = require("../models/User");
const router = express.Router();

router.post("/createuser", async (req, res) => {

    const user = new User({

        name: req.body.name,
        email: req.body.email
    });

    try {
        const createdUser = await user.save();
        res.send(`User Created Successfully!\n
                  Name: ${req.body.name}\n
                  Email : ${req.body.email}`)
    }
    catch (err) {

        res.status(400).send(err);
    }
})

router.get("/getusers", (req, res) => {

    User.find().then(user => {

        res.json({ user });
    })
})

router.delete("/deleteuser/:id", async (req, res) => {

    await User.findByIdAndDelete(req.params.id, (err) => {

        if (err) {
            res.status(400).send(err)
        }

        res.send("User Deleted Succesfully!")
    })

    /*await User.remove({ name: req.params.name, root: "users" }, (err) => {

        if (err) {
            res.status(400).json({ err: err })
        }
        res.send(`User ${req.params.name} is deleted successfully!`);
    });*/


})

router.put("/update/:id", async (req, res) => {

    try {

        await User.findByIdAndUpdate(req.params.id, req.body);

        res.send("User Updated Successfully!");

    } catch (error) {

        res.status(400).send(error);

    }
});

module.exports = router;