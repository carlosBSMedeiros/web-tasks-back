const User = require('../models/User.js')

module.exports = {

    async create(req, res){
        
        try{
            const {name, password, email} = req.body;

            if(await User.findOne({
                where: {name}
            })){
                console.log("username is already being used")
                return res.status(400).json({msg: 'username is already being used'})
            }

            if(await User.findOne({
                where: {email}
            })){
                console.log("email is already being used")
                return res.status(400).json({msg: 'email is already being used'})
            }

            if((name == null || name.trim() == '') || (password == null || password.trim() == '') || (password == null || password.trim() == ''))
                return res.status(400).json({msg: 'all fields must be filled'})
            
            const user = await User.create({
                name,
                password,
                email
            });
            console.log("User created!")
           return res.status(200).json({msg:'User created!', user});
        
        } catch(err){
            console.log(err);
            res.status(400).json({msg:'Error!'});
        }
    },


};