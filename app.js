
    function myFunction(){
        let info = document.getElementById("info");
        let showmenu = document.querySelector('nav ul');
        var x = window.matchMedia("(max-width: 500px)");
        if(x.matches){
            if(showmenu.style.display === "block"){
                showmenu.style.display = "none";
                info.style.display = "block";
            }else{
                showmenu.style.display = "block";
                info.style.display = "none";
            }
        }
    }


    var mq = window.matchMedia( "(max-width: 570px)" );
    if (!mq.matches) {
        var x = document.getElementsByClassName('header__second__list--icons');
        x
    }
    else {
        // window width is greater than 570px
    }
    

