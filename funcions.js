
function showhide(id){

    if (document.getElementById) {
        $( "#menu_seleccionado" ).load( "cine.html" );
        document.getElementById("menu_seleccionado").style.display = "block";
        document.getElementById("menu_seleccionado").scrollIntoView({behavior:'smooth'});
       
      
    } 
    return false;
}
 
