function toggle(id){
    var artcls = document.getElementsByTagName('article')
    for (let i = 0; i < artcls.length; i++) {
        const element = artcls[i];
        element.style.display = 'none'
    }
    var disp = document.getElementById(id).style.display
    if(disp == 'none')
        document.getElementById(id).style.display = 'flex'
    else 
        document.getElementById(id).style.display = 'none'
}