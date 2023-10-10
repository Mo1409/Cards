var dados = [
    { nome: "Twitter", image: "Twitter.png" },
    { nome: "Instagram", image: "Instagram.png" },
    { nome: "Facebook", image: "Facebook.png" }
];
var cores = [
    "#00acee",
    "#f09433",
    "#3744bf"
];
var gradienteIndex = 1; 

for (var i = 0; i < dados.length; i++) {
    var gradiente = gradienteIndex === i ? "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)" : "";
    var estiloGradiente = gradiente ? `background: ${gradiente};` : "";

    var cor = cores[i];

    var conteudo =
        `<div class="card" style="${estiloGradiente} background-color: ${cor};">
            <div class="image-text">
                <img src="${dados[i].image}" alt="${dados[i].nome}">
                <p>${dados[i].nome}</p>
            </div>
            <div class="desc">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Laudantium placeat voluptas, magnam doloribus adipisci vel
                rem sit. Rem itaque totam corporis inventore, eos at 
                consequaturcum ipsam ratione necessitatibus. Est!</p>
            </div>
            <div class="button">
                <button> READ MORE </button>
            </div>
        </div>`;

    document.getElementById('aplicativos').innerHTML += conteudo;
} 
