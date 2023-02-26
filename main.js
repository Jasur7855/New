let tab
let text

window.onload= function(){
    tab = document.querySelectorAll('.tab');
    text = document.querySelectorAll('.tab-text');
    hidden();
    tab[0].classList.add('active')
    text[0].classList.add('show')
    text[0].classList.remove('hidde')
}
function hidden(){
    for(let i=0;i<text.length;i++){
        text[i].classList.add('hidde');
        tab[i].classList.remove('active')
       
    }
}
document.getElementById('container').onclick=function(e){
    let t = e.target;
    // console.log(t);
    for(let i=0; i<tab.length;i++){
        if(tab[i]==t){
            hidden();
            text[i].classList.add('active');
            text[i].classList.remove('hidde');
            tab[i].classList.add('active');
        }
       
    }
}