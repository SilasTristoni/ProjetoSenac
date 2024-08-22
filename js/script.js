function preencherViaJanela(){
    let nome = prompt ("Digite seu nome: ");
    let email = prompt ("Digite seu email: ");
    let mensagem = prompt("Digite sua mensagem: ")
    const inputNome = document.getElementById("form_nome");
    const inputEmail = document.getElementById("form_email");
    const inputMensagem = document.getElementById("form_mensagem");
    const botao = document.getElementById("botao");
    
    inputNome.value = nome;
    inputEmail.value = email;
    inputMensagem.value = mensagem;
    
}

const botao = document.getElementById("botao");
botao.innerText = "Enviar somente";
botao.innerHTML = "<strong>Enviar somente</strong>";
botao.addEventListener("click", (e) => {
    e.preventDefault();
    preencherViaJanela();
});

// Forma tradicional de declarar uma função
function alertaJanela() {
    alert("Cliquei no botão");
    const funcaoTeste = ()=>{
        alert("Função de teste");
    }
    funcaoTeste();
}

funcaoTeste();

// Forma de declarar uma função anônima em uma variável
const alertaJanela2 = () => {
    alert("Cliquei no botão");
}

// Forma de declarar uma função anônima em uma variável sem chaves
const alertaJanela3 = () => alert("Cliquei no botão");
// você vai precisar fazer um document.getElementById 
// tanto do elemento escolhido quanto do formulário
// depois você vai adicionar um listener ao elemento 
// escolhido, depois você vai usar o forma sua 
// função submit() para enviar o formulário
// lembre-se de dar um ID ao elemento escolhido 
const botaoCliqueExercicio = document.getElementById("clique_exercicio");
botaoCliqueExercicio.addEventListener(
    "click",
    (e) => {
        e.preventDefault();
        const form = document.getElementById("form_exercicio");
        form.submit();
    }
)
