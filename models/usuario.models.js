import mongoose, {Schema} from 'mongoose';

const usuario= new Schema({

    nombre :{type:String},
    apellidos :{type:String},
    profesion :{type:String},
    email:{type:String},
    direc:{type:String},
    createdAt:{type: Date, default: Date.now}
});

const Usuario = mongoose.model('Usuarios',usuario);
export default Usuario;