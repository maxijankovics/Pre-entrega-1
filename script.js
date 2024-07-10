let reserva = {
    nombre: "",
    personas: 0,
    fecha: "",
    hora: ""
}

function hacerReserva() {
    reserva.nombre = prompt("Ingrese un nombre para la reserva")
    reserva.personas = prompt("Ingrese cantidad de personas")
    reserva.fecha = prompt("Ingrese la fecha de reserva (DD/MM/AAAA)")
    reserva.hora = prompt("Ingrese hora de la reserva (HH:MM)")
    alert("Reserva registrada con exito!")
}

function verReserva() {
    if (reserva.nombre === "") {
        alert("No hay ninguna reserva hecha")
    } else {
        alert("Aqui puede ver su reserva:\n-La reserva esta a nombre de " + reserva.nombre + "\n-Reservo para " + reserva.personas + " personas\n-La reserva es el dia " + reserva.fecha + " a la hora " + reserva.hora)
    }
}

function confirmarReserva() {
    if (reserva.nombre === ""){
        alert("No hay ninguna reserva para confirmar")
    } else {
        alert("Su reserva ha sido confirmada!\n-La reserva esta a nombre de " + reserva.nombre + "\n-Reservo para " + reserva.personas + " personas\n-La reserva es el dia " + reserva.fecha + " a la hora " + reserva.hora)
    }
}

let opcion = Number(prompt("Somos Bistro del Mar, en que le podemos ayudar?\n(1) Quiero hacer una reserva\n(2) Quiero ver mi reserva\n(3) Confirmar reserva\n(4) Salir"))
while (opcion !== 4) {
    if (opcion === 1){
        hacerReserva()
    } else if (opcion === 2){
        verReserva()
    } else if (opcion === 3){
        confirmarReserva()
    } else {
        alert("Opcion incorrecta...")
    }
    opcion = Number(prompt("Somos Bistro del Mar, en que le podemos ayudar?\n(1) Quiero hacer una reserva\n(2) Quiero ver mi reserva\n(3) Confirmar reserva\n(4) Salir"))
}