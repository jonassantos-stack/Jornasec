function atualizarContagem() {
    const eventoData = new Date("Jan 28, 2026 19:00:00").getTime();
    const agora = new Date().getTime();
    const diferenca = eventoData - agora;

    if (diferenca < 0) {
        document.getElementById("contador").innerHTML = "🎉 O evento já começou!";
        return;
    }

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    document.getElementById("contador").innerHTML =
        `${dias}d ${horas}h ${minutos}m ${segundos}s`;
}

setInterval(atualizarContagem, 1000);