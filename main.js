let ali = document.getElementById('001');
window.onscroll = function(){
    let value = scrollY;
    ali.style.right = value + 'px';
}