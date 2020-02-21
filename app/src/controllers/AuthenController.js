const User = require('../models/User.js')
const bcryptjs = require('bcrypt')

module.exports = {
    
    async authen(req, res){

        try{

            var {password, email} = req.body;


            const user = await User.findOne({where: {email}});

            if(!user)
                return res.status(400).json({msg: 'Unregistered user!'})
            
            if(!await bcryptjs.compare(password, user.password))
                return res.status(400).send({err: 'invalid password!', password});

            return res.status(200).json({user})
            

        } catch(err){
           return res.status(404).json({msg: 'Authentication error', err})
        }

    }

}