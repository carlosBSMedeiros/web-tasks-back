const Task = require('../models/Task');
const User = require('../models/User');

module.exports = {
    
    async create(req, res){
        try {
            const { id_user } = req.params;
            const { title, description } = req.body;

            const user = await User.findByPk(id_user);
            console.log(id_user)

            if (!user)
                return res.status(400).json({msg: 'User not find!'})   
            
            if (title == null || title.trim() == "")
                return res.status(400).json({msg: 'title cannot be null'})
            
            if (description == null || description.trim() == "")
                return res.status(400).json({msg: 'description cannot be null'})

            const checks_quantity = 0 
            const checks_finalized = 0

            const task = await Task.create({
                title,
                id_user,
                description,
                checks_quantity,
                checks_finalized
            })

            return res.status(200).json({msg: 'Task created!', task})

        } catch(err){
            return res.status(400).json({msg: 'Erro!', err})
        }
    },

    async destroy(req, res){
    
        try{

            const { id } = req.params;
            
            console.log(id)
            
            const task = await Task.findByPk(id)
            
            if(!task)
                return res.status(400).json({msg: 'Task not found!'})
            
            await task.destroy()
                
            return res.status(200).json({msg: 'Task Deleted!'})

        } catch(err){
            return res.status(400).json({msg: 'Erro!'})
        }
    },

    async alter(req, res){
        
        try{ 
        
            const { id } = req.params;
            const { title, description } = req.body;

            if(title == null || title.trim() == "")
                return res.status(400).json({msg: 'Title cannot be null!'})

            if(description == null || description.trim() == "")
                return res.status(400).json({msg: 'Description cannot be null!'})

            const task = await Task.findByPk(id)

            if(!task)
                return res.status(400).json({msg: 'Task not found!'})

            await task.update({
                title,
                description
            })

            return res.status(200).json({msg: 'Task updated!'})
        
        }catch(err){
            return res.status(400).json({msg: 'Erro!'})
        } 
    },

    async listAll(req, res){

        try{
        console.log('teste')
      
        const {id_user} = req.params

        console.log('teste 2')

        var tasks = await Task.findAll({
            where: {
                id_user
            }
        })

        return res.status(200).json({msg: 'listAll successfylly concluded', tasks})

        } catch(err){
            return res.status(400).json({msg: 'Erro!', err})
        }

    }


}