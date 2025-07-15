// cropdown das categorias
function show() {
    const div = document.getElementById('dropdown');
    div.classList.toggle('show');
}
// abrir e fechar tab de carrinho
let iconCarrinho = document.querySelector('.icon_cart');
let fecharCarrinho = document.querySelector('.x_carrinho');
let body = document.querySelector('body');

iconCarrinho.addEventListener('click', () => {
  body.classList.add('showCart');
});

fecharCarrinho.addEventListener('click', () => {
  body.classList.remove('showCart');
});

// adicionando itens no carrinho
