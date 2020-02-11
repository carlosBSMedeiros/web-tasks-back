const User = require('../models/User.js')

module.exports = {
    
    async authen(req, res){

        try{

            var {name, password, email} = req.body;


            const user = await User.findOne({where: {email}});

            if(!user)
                return res.status(400).json({msg: 'Unregistered user!'})
            
            if (user.password === password)
                
            user.password = undefined

            return res.status(200).json({user})
            

        } catch(err){
           return res.status(404).json({msg: 'Authentication error', err})
        }

    }

}