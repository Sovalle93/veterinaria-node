const fs = require('fs')

const registrar = (nombre, edad, animal, color, enfermedad) => {
    let register = { nombre, edad, animal, color, enfermedad }
    try {
        let citas = JSON.parse(fs.readFileSync('citas.json', 'utf-8'))
        citas.push(register);
        fs.writeFileSync('citas.json', JSON.stringify(citas))
    } catch (error) {
        fs.writeFileSync('citas.json', JSON.stringify([register]))
    }
}

const leer = () => {
    try {
        const read = fs.readFileSync('citas.json', 'utf-8')
        const transform = JSON.parse(read)
        console.log(transform)
    } catch (error) {
        console.error("Error al leer citas.json:", error.message)
    }
}

module.exports = {
    registrar,
    leer,
};
