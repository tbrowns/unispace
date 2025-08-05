
function rr(){
    
    document.getElementById("product1").style.display="flex";
    document.getElementById("ww").style.display="flex";
    document.getElementById("sec-container").style.display="flex";
    document.getElementById("newsletter").style.display="flex";
    const product1Section = document.getElementById('product1');
    if (product1Section) {
        const scrollDuration = 1500;
        var scroll= 500 // Duration in milliseconds (0.5 seconds)
        setTimeout(() => {
          product1Section.scrollIntoView({ behavior: 'smooth',duration: scroll,block: 'start', inline: 'nearest' });}
          ,scrollDuration);       
    }   
}
    document.getElementById("q1").onclick = function(){
        
        var id = 0; // Replace this with the ID you want to use dynamically
        var url = "projo.html?id=" + id;
        window.location.href = url;
    }
    document.getElementById("q2").onclick = function(){
        var id = "1"; // Replace this with the ID you want to use dynamically
        var url = "projo.html?id=" + id;
        window.location.href = url;
    }
    document.getElementById("q3").onclick = function(){
        
        var id = 2; // Replace this with the ID you want to use dynamically
        var url = "projo.html?id=" + id;
        window.location.href = url;
    }
    document.getElementById("q12").onclick = function(){
        
        var id = 3; // Replace this with the ID you want to use dynamically
        var url = "projo.html?id=" + id;
        window.location.href = url;
    }
    document.getElementById("q4").onclick = function(){
        
        var id = 4; // Replace this with the ID you want to use dynamically
        var url = "projo.html?id=" + id;
        window.location.href = url;
    }
    document.getElementById("q5").onclick = function(){
        
        var id = 5; // Replace this with the ID you want to use dynamically
        var url = "projo.html?id=" + id;
        window.location.href = url;
    }






