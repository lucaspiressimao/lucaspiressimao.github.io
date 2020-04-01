function toggle(id){
    var disp = document.getElementById(id).style.display
    if(disp == 'none')
        document.getElementById(id).style.display = 'block'
    else 
        document.getElementById(id).style.display = 'none'
}