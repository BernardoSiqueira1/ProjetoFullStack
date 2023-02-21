let botaoenviar = document.getElementById("enviar").style.display = "none";

let botaojogo = document.getElementById("botaojogo").onclick = IniciarJogo;

let pontosIniciais = 0;
let tempoInicial = 45;

function IniciarJogo(){
    botaojogo = document.getElementById("botaojogo").style.display = "none" //Deletar o botão assim que o jogo começar
    Jogo();
    Temporizador(); 
}   


function Jogo(){

    let telajogo = document.getElementById("jogo") //Div que receberá os elementos do jogo
    let bloco = document.createElement('button')
    bloco.innerText = "+1";

    bloco.onclick = () => { //Define a função do botão no jogo.
        pontosIniciais += 1;
        let pontuacao = document.getElementById("pontuacao");
        pontuacao.value = pontosIniciais;
        bloco.remove();
    }
    
    let mudarLugar = setInterval(() => { //Função para realocar aleatóriamente o objeto dentro da tela.
        let x = Math.round(Math.random() * 480);
        let y = Math.round(Math.random() * 480);

        bloco.style.position = "relative";
        bloco.style.top = `${x}px`;
        bloco.style.left = `${y}px`;
        telajogo.appendChild(bloco);
    }, 700)

    setTimeout(() => { //Encerra o jogo após 45 segundos e libera o botão de enviar para a lista de jogadores.
        clearInterval(mudarLugar);
        botaoenviar = document.getElementById("enviar").style.display = "block";
    }, 46000);
};

function Temporizador(){
    let DiminuiTempo = setInterval(()=>{
        let tempo = document.getElementById("tempo");
        tempo.innerHTML = tempoInicial;
        tempoInicial -=1;
    }, 1000)

    setTimeout(()=>{
        clearInterval(DiminuiTempo);
    }, 46000)
}
