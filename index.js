const {registrar, leer} = require ('./operaciones')

const [operacion, nombre, edad, animal, color, enfermedad] = process.argv.slice (2)
    console.log("registro exitoso")

if(operacion === "registrar"){
    registrar(nombre, edad, animal, color, enfermedad)
    }
    if(operacion === "leer"){
    leer()
    }