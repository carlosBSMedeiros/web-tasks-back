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
           
                
            const task = await Task.create({
                title,
                id_user,
                description
            })

            return res.status(200).json({msg: 'Task created!', task})

        } catch(err){
            return res.status(400).json({msg: 'Erro!', err})
        }
    },

    async destroy(req, res){
    
        const { id } = req.params;
        
        try{
        
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
        
        const { id } = req.params;
        const { title, description } = req.body;

        const task = await Task.findByPk(id)

        if(!task)
            return res.status(400).json({msg: 'Task not found!'})

        if(title == null || title.trim() == "")
            return res.status(400).json({msg: 'Title cannot be null!'})

        if(description == null || description.trim() == "")
            return res.status(400).json({msg: 'Description cannot be null!'})

        await task.update({
            title,
            description
        })

        return res.status(200).json({msg: 'Task updated!'})
        
    },

    async listAll(req, res){

        const { id_user } = req.params
    }

}