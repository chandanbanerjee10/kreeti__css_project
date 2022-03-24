document.getElementById('menu').addEventListener('click',()=>{
    document.querySelector('nav ul').classList.toggle('showmenu');
    let info = document.getElementById('info');
    info.style.display = "none";
});
