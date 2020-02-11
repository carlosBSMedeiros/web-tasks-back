const Task = require('../models/Task');
const User = require('../models/User');

module.exports = {
    async create(req, res){
        try {
            const { user_id } = req.params;
            const { title, description } = req.body;

            const user = await User.findByPk(user_id);

            if (!user)
                return res.status(400).json({msg: 'User not find!'})   

            if (title == null && title.trim().equals(''))
                return res.status(400).json({msg: 'title cannot be null'})

            if (description == null && description.trim().equals(''))
                return res.status(400).json({msg: 'description cannot be null'})
                
            const task = await Task.create({
                title,
                user_id,
                description
            })

            return res.status(200).json({msg: 'Task created!', task})

        } catch(err){
            return res.status(400).json({msg: 'Erro!', err})
        }
    }

}