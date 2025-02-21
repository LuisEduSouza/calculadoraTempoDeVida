function tempoDeVida() {
    let nomeCompleto = document.getElementById("nome").value;
    let dataNascimento = document.getElementById("data-nascimento").value;
    let dataFalecimento = new Date(document.getElementById("data-falecimento").value);
    const dataAtual = new Date();


    if(!nomeCompleto){
        alert(`Preencha o campo do nome`);
        return;
    }

    if(!dataNascimento){
        alert(`Preencha o campo da data de nascimento`);
        return;
    }

    dataNascimento = new Date(dataNascimento)

    if (dataFalecimento && !isNaN(dataFalecimento)) {
        if(dataFalecimento > dataNascimento && dataFalecimento < dataAtual && dataNascimento < dataAtual) {
            let milisegundos = dataFalecimento.getTime() - dataNascimento.getTime();

            let diasVividos = Math.floor(milisegundos / 86400000);
            let semanasVividas = Math.floor(milisegundos / 604800000);
            let mesesVividos = Math.floor(milisegundos / 2628000000);
            let anosVividos = Math.floor(milisegundos / 31536000000);

            let resultado = document.getElementById('resultado');
            resultado.textContent = `${nomeCompleto}, viveu aproximadamente: ${diasVividos} dias, ${semanasVividas} semanas, ${mesesVividos} meses, ${anosVividos} anos`;
        } else{
            let resultado = document.getElementById('resultado');
            resultado.textContent = `Insira uma data válida`;
        }
    } else {
        if(dataNascimento < dataAtual && dataNascimento < dataAtual){
            let milisegundos = dataAtual.getTime() - dataNascimento.getTime();

            let diasVividos = Math.floor(milisegundos / 86400000);
            let semanasVividas = Math.floor(milisegundos / 604800000);
            let mesesVividos = Math.floor(milisegundos / 2628000000);
            let anosVividos = Math.floor(milisegundos / 31536000000);

            let resultado = document.getElementById('resultado');
            resultado.textContent = `${nomeCompleto}, já viveu aproximadamente: ${diasVividos} dias, ${semanasVividas} semanas, ${mesesVividos} meses, ${anosVividos} anos`;
        } else{
            let resultado = document.getElementById('resultado');
            resultado.textContent = `Insira uma data válida`;
        }
    }
}
