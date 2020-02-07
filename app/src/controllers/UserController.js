const User = require('../models/User.js')

module.exports = {

    async create(req, res){
       
        const {name, password, email} = req.body;

        if((name == null || name.trim() == '') || (password == null || password.trim() == '') || (password == null || password.trim() == '')){
            res.status(400).json({'msg': 'all fields must be filled'})
        }

        try{
            const user = await User.create({
                name,
                password,
                email
            });

            res.status(200).json({'msg':'User created!', user});
        }
        catch(err){
            console.log(err);
            res.status(400).json({'msg':'Error!'});
        }
    }

};