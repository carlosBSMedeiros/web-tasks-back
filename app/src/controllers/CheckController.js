const Task = require('../models/Task')
const Check = require('../models/Check')
const { destroy } = require('../models/Task')
const { alter } = require('./TaskController')

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
            checked: false,
            id_task
        })

        return res.status(200).json({msg: 'Check created!', check})

        } catch(err){
            return res.status(400).json({msg: 'Erro!', err})
        }
    },

    async alter(req, res){

        try{

            const {id} = req.params;
            const {content} = req.body;

            if(!content){
                return res.status(400).json({msg: 'Content cannot be null!'})
            }

            const check = await Check.findByPk(id)

            if(!check){
                return res.status(400).json({msg: 'Check not found!'})
            }

            await check.update({
                content
            })

            return res.status(200).json({msg: 'Check updated!'})

        }catch(err){
            return res.status(400).json({msg: 'Erro!', err})
        }

    },

    async checkUncheck(req, res){
       
        try{
           
            const {id} = req.params;
            const {checked} = req.query;

            const check = await Check.findByPk(id)

            if(!check){
                return res.status(400).json({msg: 'Check not found!'})
            }
  
            checkStatus = (checked == 'true' ? true : false)
          
            await check.update({
                checkStatus
            })
            
          

            return res.status(200).json({msg: 'Check updated!'})

        }catch(err){
            return res.status(400).json({msg: 'Erro!', err})
        }

    },

    async destroy(req,res){

        try{

            const {id} = req.params

            const check =  await Check.findByPk(id);

            if(!check){
                return res.status(400).json({msg: 'Check not found!'})
            }

            await check.destroy();

            return res.status(200).json({msg: 'Check Deleted!'})

        }catch(err){
            return res.status(400).json({msg: 'Erro!', err})
        }

    },

    async listAll(req, res){

        try{

        const {id_task} = req.params

        var checks = await Check.findAll({
            where: {
                id_task
            }
        })

        return res.status(200).json({msg: 'listAll successfylly concluded', checks})

        } catch(err){
            return res.status(400).json({msg: 'Erro!', err})
        }

    }

}