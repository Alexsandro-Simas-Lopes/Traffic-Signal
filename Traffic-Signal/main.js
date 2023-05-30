const pedestreButton = document.querySelector(".buttonPedestre");
pedestreButton.addEventListener("click", function (e) {
    e.preventDefault();
    
    const clickButton = document.querySelector(".buttonPedestre");
    const idClickButton = clickButton.value;
    var clicked = document.getElementById(e);
    var buttonPedestre = document.getElementById("greenSign")
    var red = document.getElementById("redSignCar");
    var yelow = document.getElementById("yelowSignCar");
    var green = document.getElementById("greenSignCar");
    var peopleStop = document.getElementById("redSignPeople");
    var peopleGo = document.getElementById("greenSignPeople");
    
    if (idClickButton == clicked) {

        buttonPedestre.style.backgroundColor = 'green'//Ativa hover do button de pedestre
        setTimeout(function() {
            green.style.backgroundColor = 'rgb(0, 63, 0)'//Sinal de Trânsito VERDE Desliga
            yelow.style.backgroundColor = 'yellow'//Sinal de Trânsito AMARELO liga
        }, 3000);
        setTimeout(function() {
            yelow.style.backgroundColor = 'rgb(91, 91, 1)'//Sinal de Trânsito AMARELO Desliga
            red.style.backgroundColor = 'red'//Sinal de Trânsito VERMELHO liga
        }, 5000);
        setTimeout(function() {
            peopleStop.style.backgroundColor = 'rgb(93, 0, 0)'//Sinal de Pedestre VERMELHO Desliga
            peopleGo.style.backgroundColor = 'green'//Sinal de Pedestre VERDE Liga

            
        }, 7000);
        setTimeout(function() {
            peopleGo.style.backgroundColor = 'rgb(0, 63, 0)'//Sinal de Pedestre VERDE Desliga
            peopleStop.style.backgroundColor = 'red'//Sinal de Pedestre VERMELHO Liga
            buttonPedestre.style.backgroundColor = 'rgb(0, 63, 0)'//Desativa hover do button de pedestre
        }, 13000);
        setTimeout(function() {
            red.style.backgroundColor = 'rgb(93, 0, 0)'//Sinal de Trânsito VERMELHO Desliga
            green.style.backgroundColor = 'green'//Sinal de Trânsito VERDE Liga
        }, 15000);
        return
    }
});

// TESTE de TEMPORIZADOR
function startTimer(duration, display) {
    var timer = duration, seconds;
    
        setInterval(function () {
            seconds = parseInt(timer % 60, 10);
            display.textContent = "0" + seconds;
            if (--timer < 0) {
                timer = duration;
            }
        }, 1000);
    
}

window.onload = function () {
    var duration = 60 * 0.09; // Converter para segundos
        display = document.querySelector('#timer'); // selecionando o timer
    startTimer(duration, display); // iniciando o timer
};