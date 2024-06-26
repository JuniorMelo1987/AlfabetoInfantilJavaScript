
alert('OI BEM VINDO AO ALFABETO DA LAUREN!')

function insert(letra){
    var texto =document.getElementById('texto').innerHTML;
    document.getElementById('texto').innerHTML = texto + letra
}
function enter(){
    var texto =document.getElementById('texto').innerHTML;
    document.getElementById('texto').innerHTML = texto + "<br>"
}
function apagar(){
    var apagar =document.getElementById('texto').innerHTML;
    document.getElementById('texto').innerHTML = apagar.substring(0, apagar.length -1)

}
function unicornio(){
    alert('ESSE É O ALFABETO DA LAUREN')
}
