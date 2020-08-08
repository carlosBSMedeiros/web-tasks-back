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

        if(!task)
            return res.status(400).json({msg: 'Task not find!'})

        const checks_quantity = task.checks_quantity + 1

        await task.update({
            checks_quantity
        })

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

            const check = await Check.findByPk(id)

            if(!check){
                return res.status(400).json({msg: 'Check not found!'})
            }
  
            const id_task = check.id_task
            const task = await Task.findByPk(id_task)

            const checkStatus = check.checked

            var checksf = task.checks_finalized

            if(checkStatus == true){

                await check.update({
                    checked: false
                })

                await task.update({
                    checks_finalized: checksf - 1
                })

            } else {

                await check.update({
                    checked: true
                })

                await task.update({
                    checks_finalized: checksf + 1
                })

            }

            /*
            try{
           
            const {id} = req.params;
            const {checked} = req.query;

            const check = await Check.findByPk(id)

            if(!check){
                return res.status(400).json({msg: 'Check not found!'})
            }
  
            const checkStatus = (checked == 'true' ? true : false)

            await check.update({
                checked: checkStatus
            })

            //atualiza a quantidade de checks finalizados na task

            const id_task = check.id_task

            const task = await Task.findByPk(id_task)
            const checks_finalized = (checkStatus == true) ? task.checks_finalized + 1 : task.checks_finalized - 1

            await task.update({
                checks_finalized
            })
            

            return res.status(200).json({msg: 'Check updated!'})

        }catch(err){
            return res.status(400).json({msg: 'Erro!', err})
        }
            
            */

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