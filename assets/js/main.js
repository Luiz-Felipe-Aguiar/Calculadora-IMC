function meuEscopo() {
    const form = document.querySelector('#form');
    const resultado = document.querySelector('.resultado')

    function cauculaImc (evento) {
        evento.preventDefault();
        console.log('Evento prevenido')
        const inputPeso = form.querySelector('#peso');
        const inputAltura = form.querySelector('#altura');
        const peso = Number(inputPeso.value);
        const altura = Number(inputAltura.value);

        if(!peso){
            const p = document.createElement('p');
            p.classList.add('paragrafo-invalido');
            p.innerHTML = `Peso inválido!`;
            resultado.appendChild(p);
            return;
        }
        if(!altura){
            const p = document.createElement('p');
            p.classList.add('paragrafo-invalido');
            p.innerHTML = `Altura inválida!`;
            resultado.appendChild(p);
            return;
        }

        const iMC = peso / (altura ** 2);
        iMC.toFixed(2);

       if (iMC < 18.5 ){
            resultado.innerHTML = '';
            const p = document.createElement('p');
            p.classList.add('paragrafo-resultado');
            p.innerHTML = `O seu IMC é: ${iMC.toFixed(2)} - você está abaixo do peso.`;
            resultado.appendChild(p);
        }else if (iMC >= 18.5 && iMC <25) {
            resultado.innerHTML = ``;
            const p = document.createElement('p');
            p.classList.add('paragrafo-resultado');
            p.innerHTML = `O seu IMC é: ${iMC.toFixed(2)} - seu peso está normal.`;
            resultado.appendChild(p);
        }else if (iMC >= 25 && iMC < 30){
            resultado.innerHTML = ``;
            const p = document.createElement('p');
            p.classList.add('paragrafo-resultado');
            p.innerHTML = `O seu IMC é: ${iMC.toFixed(2)} - você está com sobrepeso.`;
            resultado.appendChild(p);
        }else if (iMC >= 30 && iMC < 35){
            resultado.innerHTML = ``;
            const p = document.createElement('p');
            p.classList.add('paragrafo-invalido');
            p.innerHTML = ` O seu IMC é: ${iMC.toFixed(2)} - você está com obesidade grau 1.`;
            resultado.appendChild(p);
        }else if (iMC >= 35 && iMC < 40){
            resultado.innerHTML = ``;
            const p = document.createElement('p');
            p.classList.add('paragrafo-invalido');
            p.innerHTML = `O seu IMC é: ${iMC.toFixed(2)} - você está com obesidade grau 2.`;
            resultado.appendChild(p);
        }else {
            resultado.innerHTML = ``;
            const p = document.createElement('p');
            p.classList.add('paragrafo-invalido');
            p.innerHTML = `O seu IMC é: ${iMC.toFixed(2)} - você está com obesidade grau 3.`;
            resultado.appendChild(p);
        }
     } 
    form.addEventListener('submit', cauculaImc)


}
meuEscopo();