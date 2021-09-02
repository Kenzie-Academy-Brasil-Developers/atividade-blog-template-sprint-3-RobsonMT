function unloadScrollBars() {
    document.documentElement.style.overflowX = 'hidden';
    document.body.scroll = "no"; // IE
}
unloadScrollBars();

function openMenu(){
    let $menuArea = document.getElementById("menu-area");

    if($menuArea.style.width == '300px'){
        $menuArea.style.width = '0px' ;
    }else {
        $menuArea.style.width = '300px';
    }
}

