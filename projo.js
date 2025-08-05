

var urlParams = new URLSearchParams(window.location.search);
var Id = urlParams.get('id');

let str=[
    
    "./img/home/planters-fencing-4.png",
    "./img/projects/one-arm-sided.jpg",
    "./img/projects/project-stairs.jpg",
    "./img/blog/ward-dro-be.cabin.jpg",
    "./img/projects/door-project1-wood.jpg",
    "./img/products/1.jpg"
]  
let st=[
    "./img/outdoor/out1.jpg",
    "./img/projects/pallette-bench-2.jpg",
    "./img/projects/wall-holders.jpg",
    "./img/home/cabin-wall-wardrobe.jpg",
    "./img/interior/bathroom-desin.jpg",
    "./img/home/uni7.jpg"
]
let stt=[
    "./img/projects/project-bench-tree.jpg",
    "./img/home/home-palette-bench.jpg",
    "./img/interior/custom-close-des.jpg",
    "./img/home/wardrobe-cabinet-wall.jpg",
    "./img/home/stone-wall-window.jpg",
    "./img/unispace/sp4.jpg"

]
let sttt=[
    "./img/home/gazebo-outhouse.jpg",
    "./img/projects/projects-item-1.jpg",
    "./img/home/20221128_162016.jpg",
    "./img/home/wall-cabinet-shelves.jpg",
    "./img/projects/wall-holders.jpg",
    "./img/projects/project-home-stand1.jpg"

]
let stttt=[
    "./img/home/tree-bench-pal.jpg",
    "./img/home/bech-palette.jpg",
    "./img/blog/interior-corridor-0w.jpg",
    "./img/unispace/un1.jpg",
    "./img/unispace/ops3.jpg",
    "./img/home/photo_2022-12-26_20-45-18.jpg"
]
let sttttr=[
    "./img/home/planters-palette-burnt.jpg",
    "./img/unispace/op2.jpg",
    "./img/blog/ceiling-gyps-um.jpg",
    "./img/unispace/uni3.jpg",
    "./img/unispace/un7.jpg",
    "./img/projects/pallette-side-cabn.jpg"
]
let sttttrr=[
    "./img/unispace/u1.jpg",
    "./img/unispace/up2.jpg",
    "./img/blog/blg-floor-tnm.jpg",
    "./img/unispace/uni5.jpg",
    "./img/unispace/un5.jpg",
    "img/projects/deco-u-project.jpg"
]
let sttttrrr=[
    "./img/unispace/u1.jpg",
    "./img/unispace/up2.jpg",
    "./img/blog/blg-floor-tnm.jpg",
    "./img/unispace/uni5.jpg",
    "./img/unispace/un5.jpg",
    "img/projects/deco-u-project.jpg"
]
let sttttrrrr=[
    "./img/unispace/u1.jpg",
    "./img/unispace/up2.jpg",
    "./img/blog/blg-floor-tnm.jpg",
    "./img/unispace/uni5.jpg",
    "./img/unispace/un5.jpg",
    "img/projects/deco-u-project.jpg"
]
let sttttrrrrr=[
    "./img/unispace/u1.jpg",
    "./img/unispace/up2.jpg",
    "./img/blog/blg-floor-tnm.jpg",
    "./img/unispace/uni5.jpg",
    "./img/unispace/un5.jpg",
    "img/projects/deco-u-project.jpg"
]
let sttttrrrrrr=[
    "./img/unispace/u1.jpg",
    "./img/unispace/up2.jpg",
    "./img/blog/blg-floor-tnm.jpg",
    "./img/unispace/uni5.jpg",
    "./img/unispace/un5.jpg",
    "img/projects/deco-u-project.jpg"
]
function pi(){
    document.getElementById("product0").style.display="flex";
    var product1Section=document.getElementById("product0");
    if (product1Section) {
        const scrollDuration = 1000; // Duration in milliseconds (0.5 seconds)

        setTimeout(() => {
          product1Section.scrollIntoView({ behavior: 'smooth',duration: scrollDuration,block: 'start', inline: 'nearest' });}
          ,scrollDuration);
        
    }
}
var newDiv = document.createElement('img');
newDiv.src = str[Id] ;
newDiv.id="ee";

document.getElementById("po").appendChild(newDiv);


var newDivv = document.createElement('img');
newDivv.src = st[Id] ;
newDivv.id ="qqqqqq";
newDivv.addEventListener('click', function() {
    var image1 = document.getElementById("qqqqqq");
    var image2 = document.getElementById("ee");
    var xx=image2.src;
    image2.src = image1.src;
    image1.src=xx;
});
document.getElementById("q1").appendChild(newDivv);

var newDivvv = document.createElement('img');
newDivvv.src = stt[Id] ;
newDivvv.id ="qqqqq";
newDivvv.addEventListener('click', function() {
    var image1 = document.getElementById("qqqqq");
    var image2 = document.getElementById("ee");
    var xx=image2.src;
    image2.src = image1.src;
    image1.src=xx;
});
document.getElementById("q2").appendChild(newDivvv);

var newDivvvv = document.createElement('img');
newDivvvv.src = sttt[Id] ;
newDivvvv.id ="qqqq";
newDivvvv.addEventListener('click', function() {
    var image1 = document.getElementById("qqqq");
    var image2 = document.getElementById("ee");
    var xx=image2.src;
    image2.src = image1.src;
    image1.src=xx;
});
document.getElementById("q3").appendChild(newDivvvv);

var newDivvvvv = document.createElement('img');
newDivvvvv.src = stttt[Id] ;
newDivvvvv.id ="qqq";
newDivvvvv.addEventListener('click', function() {
    var image1 = document.getElementById("qqq");
    var image2 = document.getElementById("ee");
    var xx=image2.src;
    image2.src = image1.src;
    image1.src=xx;
});
document.getElementById("q12").appendChild(newDivvvvv);

var newDivvvvvr = document.createElement('img');
newDivvvvvr.src = sttttr[Id] ;
newDivvvvvr.id ="qq";
newDivvvvvr.addEventListener('click', function() {
    var image1 = document.getElementById("qq");
    var image2 = document.getElementById("ee");
    var xx=image2.src;
    image2.src = image1.src;
    image1.src=xx;
});
document.getElementById("q4").appendChild(newDivvvvvr);

var newDivvvvvrr = document.createElement('img');
newDivvvvvrr.src = sttttrr[Id] ;
newDivvvvvrr.id ="q";
newDivvvvvrr.addEventListener('click', function() {
    var image1 = document.getElementById("q");
    var image2 = document.getElementById("ee");
    var xx=image2.src;
    image2.src = image1.src;
    image1.src=xx;
});
document.getElementById("q5").appendChild(newDivvvvvrr);
var newDivvvvvrrr = document.createElement('img');
newDivvvvvrrr.src = sttttrrr[Id] ;
newDivvvvvrrr.id ="qqqqqqq";
newDivvvvvrrr.addEventListener('click', function() {
    var image1 = document.getElementById("qqqqqqq");
    var image2 = document.getElementById("ee");
    var xx=image2.src;
    image2.src = image1.src;
    image1.src=xx;
});
document.getElementById("q6").appendChild(newDivvvvvrrr);
var newDivvvvvrrrr = document.createElement('img');
newDivvvvvrrrr.src = sttttrrrr[Id] ;
newDivvvvvrrrr.id ="qqqqqqqq";
newDivvvvvrrrr.addEventListener('click', function() {
    var image1 = document.getElementById("qqqqqqqq");
    var image2 = document.getElementById("ee");
    var xx=image2.src;
    image2.src = image1.src;
    image1.src=xx;
});
document.getElementById("q7").appendChild(newDivvvvvrrrr);
var newDivvvvvrrrrr = document.createElement('img');
newDivvvvvrrrrr.src = sttttrrrr[Id] ;
newDivvvvvrrrrr.id ="qqqqqqqqq";
newDivvvvvrrrrr.addEventListener('click', function() {
    var image1 = document.getElementById("qqqqqqqqq");
    var image2 = document.getElementById("ee");
    var xx=image2.src;
    image2.src = image1.src;
    image1.src=xx;
});
document.getElementById("q8").appendChild(newDivvvvvrrrrr);
var newDivvvvvrrrrrr = document.createElement('img');
newDivvvvvrrrrrr.src = sttttrrrr[Id] ;
newDivvvvvrrrrrr.id ="qqqqqqqqqq";
newDivvvvvrrrrrr.addEventListener('click', function() {
    var image1 = document.getElementById("qqqqqqqqqq");
    var image2 = document.getElementById("ee");
    var xx=image2.src;
    image2.src = image1.src;
    image1.src=xx;
});
document.getElementById("q9").appendChild(newDivvvvvrrrrrr);


