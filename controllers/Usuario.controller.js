import models from '../models';


export default{
    AddUsuario: async(req,res,next)=>{
        try{
            const {
                nombre,
                apellidos,
                profesion,
                email,
                direc 
            }=req.body;

            const usuarios= new models.Usuario({
                nombre,
                apellidos,
                profesion,
                email,
                direc 
            });

            const reg= await usuario.save();
            res.status(200).json(reg);
        }catch(e){
            res.status(500).send({
                message: 'Ocurrio un eror en el servidor de BD'
            });
            next(e);
        }
    },

    ListUsuario: async(req,res,next)=>{
        try{
            const usuarios= await models.Usuario.find();
            res.json(usuarios);
        }catch(e){
            res.status(500).send({
                message: 'Ocurrio un eror en el servidor de BD'
            });
            next(e);
        }
    },

    DelUsuario: async(req,res,next)=>{
        try{
            const reg= await models.Usuario.findByIdAndDelete(req.params.id);
            res.status(200).json(reg);
        }catch(e){
            res.status(500).send({
                message: 'Ocurrio un eror en el servidor de BD'
            });
            next(e);
        }
    },

    UpUsuario: async (req,res,next)=>{
        try{
            const {
                nombre,
                apellidos,
                profesion,
                email,
                direc 
            }=req.body;

            const usuario= {
                nombre,
                apellidos,
                profesion,
                email,
                direc 
            };
const reg=await models.Usuario.findByIdAndUpdate(req.params.id, usuario);
res.status(200).json(reg);

        }catch(e){
            res.status(500).send({
                message: 'Ocurrio un eror en el servidor de BD'
            });
            next(e);
        }
    },

    OneUsuario: async (req,res,next)=>{
        try{
            const reg= await models.Usuario.findById(req.params.id);
            if(!reg){
                res.status(400).send({
                    message: 'El registro no existe'
                });
            }else{
                res.status(200).json(reg);
            }
        }catch(e){
            res.status(500).send({
                message: 'Ocurrio un eror en el servidor de BD'
            });
            next(e);
        }
       
    }
}