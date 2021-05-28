var anoAtual = document.querySelector("p.JSatual")
var data = new Date()
var ano = data.getFullYear()
anoAtual.innerHTML = `Copyright &copy; ${ano} - Todos os direitos reservados.`


window.addEventListener('scroll',function(){
    var nav = document.getElementById("nav-bar")
    nav.classList.toggle("navFundo",window.scrollY>0)
})

function navMobile(){
    var barraM = document.querySelector(".barra-Mobile");
    var navM = document.querySelector(".navbar-items");

    barraM.addEventListener('click',function(){
        navM.classList.toggle("nav-ativo");
        barraM.classList.toggle("imgfechar");
    });
}

navMobile();