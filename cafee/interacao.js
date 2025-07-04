// o JS aq so controla o menu suspenso na responvidade do site

// aq sao as constantes, que basicamente sao variaveis que nao podem ser mudadas 

const mobile_nav_pai = document.getElementById("mobile-navbar-id"); //constante da nav-bar do menu supenso

const imagem_on = document.getElementById("btn-hambuger-id"); //constante que pega a "imagem atual" do btn hamburger (coloco como atual pq depois com o JS mudamos o endereço dela, assim trocando a imagem)

const links_navbar_mobile = document.querySelectorAll(".mobile-navbar a"); // aq essa constante pega apenas os links do menu suspenso

var mudar = true; // aq ele basicamente diz que o valor de uma variavel "mudar" é (true) ou seja verdadeiro, mas essa variavel  "n existe" pq ela n e uma variavel que da um nome pra algum valor, ela e simplesmente como se fosse um conseito abstrato de uma ideia onde e tipo (essa variavel representa a ideia do estado do menu, que pode ser fechado ou aberto dependendo da funçao) seu valor inicial e verdadeiro


//aq criamos uma function, onde ela que sera a responsavel por trocar o estado do menu suspenso (ativado ou desativado)
function menu_control() {
    mudar = !mudar; //aq dizemos que toda vez que essa funçao for chamada por algo ela vai inverter o valor daquela variavel anterior "mudar"

    if (mudar) {
        mobile_nav_pai.classList.add("esconder");
    } //aq diz que se a variavel "mudar" existe (ou seja, e true) ele vai add uma classe que foi anteriormente feita no CSS a constante que é o menu suspenso, e essa classe faz com que esse menu fique escondido, e como declaramos que sempre quando o site for aberto "mudar= true" essa classe ja vem adicionada quando o site esta aberto assim o menu suspenso n aparece em quanto n existir um evento pra chamar essa function que ai sim invertera o valor de "mudar" ai sim deixando o menu visivel


    else {
        mobile_nav_pai.classList.remove("esconder");
    } // ja aq e o contrario, diz que quando "mudar" n existe (ou seja e false) ela remove essa classe  que esconde o menu suspenso (caso a classe ja etiver adicionada, pq caso nao ela simplesmente n faz nada)

    imagem_on.style.opacity = 0;// aq ele faz uma mudança no estilo da imagem (ou seja CSS) que faz com que a imagem sempre começe com ocupacidade 0 ou seja invisivel


    setTimeout(() => {
        imagem_on.src = mudar ? "imagens/icons8-menu-50.png" : "imagens/icons8-less-than-50.png";
        imagem_on.style.opacity = 1;
    }, 180); //aq ele cria um (setTimeout) que é um evento de tempo, e dentro dele ele aciona uma function que ele mesmo criou dentro de si, mudando imagem 
}

imagem_on.addEventListener("click", menu_control);

// Agora funciona: links clicados também fecham o menu
links_navbar_mobile.forEach(a => {
    a.addEventListener("click", menu_control);
});

// Garante que começa escondido
mobile_nav_pai.classList.add("esconder");


document.addEventListener("click", function (evento) {
    const clicouForaDoMenu = !document.querySelector(".mobile-navbar section").contains(evento.target);;
    const clicouForaDoHeader = !document.querySelector(".mobile-header").contains(evento.target);

    if (!mudar && clicouForaDoMenu && clicouForaDoHeader) {
        menu_control();
    }
});
