
//===========================Pegar pontuação do banco de dados===================================
const leaderboard = document.getElementById("leaderboard");

async function PegarDados(){
    try{
    const retorno = await fetch("https://joguindeclicar.onrender.com/leaderboard");
    const lista = await retorno.json();
    MostrarDados(lista);
    }
    catch(error){
        console.log(error)
    }
}

function MostrarDados(lista){
    let numeroLista = 0;
    lista.forEach(item => {
        numeroLista += 1;
        const score = ` <span class="dados">${numeroLista}</span> - <span class="dados">${item.initials} :</span>
        <span class="dados">${item.score}</span>
        <br>`
        leaderboard.innerHTML += score;
    });
}

PegarDados();


//==============================Enviar pontuacao pro banco de dados==========================================

const botaoEnviar = document.getElementById("enviar").onclick = ChecarDados;

function ChecarDados(){
    let iniciais = document.getElementById("iniciais").value.toUpperCase();
    let pontuacao = document.getElementById("pontuacao").value;

    if (iniciais === ""){
        return alert("Não foi possível salvar a pontuação (campo nome inválido)")
    }
    else{
        EnviarDados(iniciais, pontuacao);
        location.reload();
    }

}

async function EnviarDados(iniciais, pontuacao){

    const dadosjson = {
        initials: iniciais,
        score: pontuacao
    }
    
    await fetch("https://joguindeclicar.onrender.com/leaderboard", {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dadosjson)
    })
}
