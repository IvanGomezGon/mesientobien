
async function showhide(linkpage){
    if (document.getElementById) {
        await $( "#menu_seleccionado" ).load(linkpage);
        document.getElementById("menu_seleccionado").style.display = "block";
        document.getElementById("menu_seleccionado").style.height = "100%";
        document.getElementById("menu_seleccionado").scrollIntoView({behavior:'smooth'});          
    } 
    return false;

}

async function showTextDesign(id){
    const texts = document.querySelectorAll('.house h2');
    texts.forEach(text => {
        text.style.opacity = 0;
      });


    if (document.getElementById) {
        document.getElementById(id).style.opacity = 1;        
    } 
    return false;
}
 
