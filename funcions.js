
async function showhide(linkpage, id){
    if (document.getElementById) {
        await $( "#" + id ).load(linkpage);
        document.getElementById(id).style.display = "block";
        document.getElementById(id).style.height = "100%";
        document.getElementById(id).scrollIntoView({behavior:'smooth'});          
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
 
