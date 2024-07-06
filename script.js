
///.............menu bar open and close............../////
const menuopen=document.getElementById("menuopen")
const menubarclose=document.getElementById("closebutton");

function closemenu(){
    menubarclose.style.display="none";
}
function openmenu(){
    menubarclose.style.display="block";
}



//***navbar fixed */
function changebg(){
    var scrollValue=window.scrollY;
    var navbar=document.getElementsByClassName("nav-bar")[0];

    if(scrollValue < 50){
        console.log(scrollValue);
        navbar.classList.remove('bgcolor');
    }else{
        navbar.classList.add('bgcolor');
    }
}

window.addEventListener('scroll',changebg);


/*...footer(second section) plus responsive concept....*/

document.addEventListener("DOMContentLoaded",function(){
    var plusElements=document.querySelectorAll(".pluse");
    var content=document.querySelectorAll(".list");
 
plusElements.forEach(function(plus){
    plus.addEventListener("click",function(){
        var content=this.parentElement.nextElementSibling;
           content.classList.toggle('show');
           toggleMenuIcon(content, plus);
    });
  });

  function toggleMenuIcon(content, plus) {
    if (content.classList.contains('show')) {
        plus.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16"><path d="M3.5 8a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5z"/></svg>';
    } else {
        plus.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16"><path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/></svg>';
    }
  }
});



    // document.addEventListener("DOMContentLoaded", function() {
    //     const plusIcons = document.querySelectorAll(".plus");
        
    //     plusIcons.forEach(icon =>{
    //         icon.addEventListener("click", function() {
    //             const list = this.closest(".column").querySelector(".list");
    //             list.classList.toggle("show");
    //         });
    //     });
    // });



