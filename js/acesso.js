const minhaData = () => {
    var data = new Date()
    var dias = data.getDay()
    var mes = data.getMonth()
    var ano = data.getFullYear()

    var meses = new Array(
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro"
    )

    var diaSemana = [
        "Domingo",
        "Segunda",
        "Terça",
        "Quarta",
        "Quinta",
        "Sexta",
        'Sábado'
    ]

    var hoje = data.getDate()
    var hora = data.getHours()
    var min = data.getMinutes()
    var sec = data.getSeconds()

    var strHora = hora + ":" + min + ":" + sec
    var strData = diaSemana[dias] + ', ' +  hoje + ' de ' + meses[mes] + ' de ' + ano + ', ' + strHora

    document.write(strData)
}