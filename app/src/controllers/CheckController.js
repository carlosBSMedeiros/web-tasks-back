const Task = require('../models/Task')
const Check = require('../models/Check')

module.exports = {
    async create(req, res){
        try {
        const { id_task } = req.params
        const { content } = req.body
        
        const task = await Task.findByPk(id_task)
        console.log(id_task)

        if(!task)
            return res.status(400).json({msg: 'Task not find!'})

        if(content == null)
            return res.status(400).json({msg: 'Content cannot null'})

        const check = await Check.create({
            content,
            checked: true,
            id_task
        })

        return res.status(200).json({msg: 'Check created!', check})

        } catch(err){
            return res.status(400).json({msg: 'Erro!', err})
        }
    }

}