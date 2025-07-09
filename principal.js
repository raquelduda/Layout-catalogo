
// function show() {
//     const div = document.getElementById('dropdown');
//     if (div.style.display === 'none') {
//         div.style.display = 'flex';
//     } else {
//         div.style.display = 'none';
//     }
// }

function show() {
    const div = document.getElementById('dropdown');
    div.classList.toggle('show');
    //  document.getElementById('paragrafo').innerHTML = "Categorias ▲"
}