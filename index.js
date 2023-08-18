let saldo = 0;
let historialTransacciones = [];

function realizarDeposito(monto) {
    saldo += monto;
    historialTransacciones.push({
        tipo: "depósito",
        monto: monto,
        fecha: new Date(),
    });
}

function realizarRetiro(monto) {
    if (monto <= saldo) {
        saldo -= monto;
        historialTransacciones.push({
            tipo: "retiro",
            monto: monto,
            fecha: new Date(),
        });
    } else {
        console.log("Saldo insuficiente");
    }
}

function consultarSaldo() {
    console.log("Saldo actual:", saldo);
}

function mostrarHistorialTransacciones() {
    console.log("Historial de Transacciones:");
    historialTransacciones.forEach((transaccion) =>
        console.log(
            `${transaccion.tipo} - Monto: ${transaccion.monto} - Fecha: ${transaccion.fecha}`
        )
    );
}

document.addEventListener("DOMContentLoaded", function () {
    const depositarButton = document.getElementById("depositar");
    const retirarButton = document.getElementById("retirar");
    const saldoButton = document.getElementById("saldo");
    const historialButton = document.getElementById("historial");
    const salirButton = document.getElementById("salir");

    depositarButton.addEventListener("click", function () {
        let deposito = parseFloat(prompt("Ingresa la cantidad a depositar:"));
        if (!isNaN(deposito) && deposito > 0) {
            realizarDeposito(deposito);
            console.log("Depósito realizado con éxito");
        } else {
            console.log("Cantidad inválida");
        }
    });

    retirarButton.addEventListener("click", function () {
        let retiro = parseFloat(prompt("Ingresa la cantidad a retirar:"));
        if (!isNaN(retiro) && retiro > 0) {
            realizarRetiro(retiro);
            console.log("Retiro realizado con éxito");
        } else {
            console.log("Cantidad inválida");
        }
    });

    saldoButton.addEventListener("click", function () {
        consultarSaldo();
    });

    historialButton.addEventListener("click", function () {
        mostrarHistorialTransacciones();
    });

    salirButton.addEventListener("click", function () {
        console.log("Gracias por utilizar el Simulador Bancario");
    });
});
