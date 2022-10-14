const botaoA = document.querySelectorAll('.botaoA');
const botaoB = document.querySelectorAll('.botaoB');
const botaoC = document.querySelectorAll('.botaoC');
const botaoD = document.querySelectorAll('.botaoD');
const refazer = document.getElementById('refaz');
const botao = document.querySelector('.botao');
const numPartidas = 5;
let load = 0;

function game() {

    let click = '';
    let count = 0;
    let partida = 0;

    //hide boxes 1 2 3 4 5
    function box1() {

        setTimeout(() => {
            let perg = document.querySelector('#Pergunta-1');
            perg.classList.add('hide');

            let pergProx = document.querySelector('#Pergunta-2');
            pergProx.classList.remove('hide');
        }, 1000);

    }
    function box2() {

        setTimeout(() => {
            let perg = document.querySelector('#Pergunta-2');
            perg.classList.add('hide');

            let pergProx = document.querySelector('#Pergunta-3');
            pergProx.classList.remove('hide');
        }, 1000);
    }
    function box3() {

        setTimeout(() => {
            let perg = document.querySelector('#Pergunta-3');
            perg.classList.add('hide');

            let pergProx = document.querySelector('#Pergunta-4');
            pergProx.classList.remove('hide');
        }, 1000);
    }
    function box4() {

        setTimeout(() => {
            let perg = document.querySelector('#Pergunta-4');
            perg.classList.add('hide');

            let pergProx = document.querySelector('#Pergunta-5');
            pergProx.classList.remove('hide');
        }, 1000);
    }
    function box5() {

        setTimeout(() => {
            let perg = document.querySelector('#Pergunta-5');
            perg.classList.add('hide');
            result();
            let pergProx = document.querySelector('#Resultado-box');
            pergProx.classList.remove('hide');
        }, 1000);
        console.log(count)
    }
    //box resultado final
    function result() {

        // 5 = 100%
        // count = x%
        let countPercent = (count * 100) / 5;
        const result = document.querySelector('#result');
        const paragrafo = document.querySelector('#paragrafo');
        let p = document.createElement('p');
        let texto = document.createTextNode(`${countPercent}%`);
        p.appendChild(texto);
        result.appendChild(p);
        let texto2 = document.createTextNode(`Você acertou ${count} de ${numPartidas} perguntas`);
        paragrafo.appendChild(texto2);
    }

    //cliques
    function clickA() {
        console.log('clicou no A');
        click = 'A';
        partida += 1;
        botaoCorreto()
    }

    function clickB() {
        console.log('clicou no B');
        click = 'B';
        partida += 1;
        botaoCorreto()
    }

    function clickC() {
        console.log('clicou no C');
        click = 'C';
        partida += 1;
        botaoCorreto()
    }

    function clickD() {
        console.log('clicou no D');
        click = 'D';
        partida += 1;
        botaoCorreto()
    }

    for (let i = 0; i < 5; i++) {
        //eventos
        botaoA[i].addEventListener('click', clickA);
        botaoB[i].addEventListener('click', clickB);
        botaoC[i].addEventListener('click', clickC);
        botaoD[i].addEventListener('click', clickD);
    }

    function botaoCorreto() {

        //primeira partida
        if (partida == 1) {
            box1();
            botaoA[0].style.backgroundColor = 'rgb(110, 183, 110)';
            botaoA[0].style.border = '2px solid black';
            botaoB[0].style.backgroundColor = 'rgb(255, 114, 114)';
            botaoB[0].style.border = '2px solid black';
            botaoC[0].style.backgroundColor = 'rgb(255, 114, 114)';
            botaoC[0].style.border = '2px solid black';
            botaoD[0].style.backgroundColor = 'rgb(255, 114, 114)';
            botaoD[0].style.border = '2px solid black';

            if (click == 'A') {
                count++;
            }
        } else if (partida == 2) {
            box2();
            botaoA[1].style.backgroundColor = 'rgb(255, 114, 114)';
            botaoA[1].style.border = '2px solid black';
            botaoB[1].style.backgroundColor = 'rgb(110, 183, 110)';
            botaoB[1].style.border = '2px solid black';
            botaoC[1].style.backgroundColor = 'rgb(255, 114, 114)';
            botaoC[1].style.border = '2px solid black';
            botaoD[1].style.backgroundColor = 'rgb(255, 114, 114)';
            botaoD[1].style.border = '2px solid black';
            if (click == 'B') {
                count++;
            }
        } else if (partida == 3) {
            box3();
            botaoA[2].style.backgroundColor = 'rgb(110, 183, 110)';
            botaoA[2].style.border = '2px solid black';
            botaoB[2].style.backgroundColor = 'rgb(255, 114, 114)';
            botaoB[2].style.border = '2px solid black';
            botaoC[2].style.backgroundColor = 'rgb(255, 114, 114)';
            botaoC[2].style.border = '2px solid black';
            botaoD[2].style.backgroundColor = 'rgb(255, 114, 114)';
            botaoD[2].style.border = '2px solid black';
            if (click == 'A') {
                count++;
            }
        } else if (partida == 4) {
            box4();
            botaoA[3].style.backgroundColor = 'rgb(255, 114, 114)';
            botaoA[3].style.border = '2px solid black';
            botaoB[3].style.backgroundColor = 'rgb(255, 114, 114)';
            botaoB[3].style.border = '2px solid black';
            botaoC[3].style.backgroundColor = 'rgb(110, 183, 110)';
            botaoC[3].style.border = '2px solid black';
            botaoD[3].style.backgroundColor = 'rgb(255, 114, 114)';
            botaoD[3].style.border = '2px solid black';
            if (click == 'C') {
                count++;
            }
        } else if (partida == 5) {
            box5();
            botaoA[4].style.backgroundColor = 'rgb(255, 114, 114)';
            botaoA[4].style.border = '2px solid black';
            botaoB[4].style.backgroundColor = 'rgb(255, 114, 114)';
            botaoB[4].style.border = '2px solid black';
            botaoC[4].style.backgroundColor = 'rgb(110, 183, 110)';
            botaoC[4].style.border = '2px solid black';
            botaoD[4].style.backgroundColor = 'rgb(255, 114, 114)';
            botaoD[4].style.border = '2px solid black';
            if (click == 'C') {
                count++;
            }
            load = partida;
        }
    }
}

//inicio do quizz
game();

//botao refazer quizz
refazer.addEventListener('click', function () {

    location.reload();
});

