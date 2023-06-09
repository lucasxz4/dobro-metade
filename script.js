let btn = document.querySelector('.btn')
btn.addEventListener('click', function () {
    var res = document.querySelector('.res')
    var n = Number(prompt("Digite um número"))
    var dobro = n * 2
    var metade = n / 2
    res.innerHTML = `O dobro de ${n} é ${dobro} e a metade é ${metade}.`
})