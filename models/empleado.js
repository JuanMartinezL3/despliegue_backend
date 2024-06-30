const mongoose = require("mongoose")

//esquema del empleado
const empleadoModel = new mongoose.Schema(
    {
    
        
        nombre:{
            type: String 
        },
        cargo:{
            type: String
        },
        oficina:{
            type: String
        },
        salario:{
            type: Number
        }
    
},
{
        timestamps:true,
        versionKey:false,

}
)
   //Modelo de datos del usuario
const ModelEmpleado = mongoose.model("empleados", empleadoModel);
module.exports = ModelEmpleado; 