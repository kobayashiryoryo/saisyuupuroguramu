const images=["re2.jpg", "mobitQP1O.jpg", "mobIDBsat.jpg", "c96f3813674b9861bd92a7f98f12c.png", "7c0b66287e152e72f051f6581147c-02.jpg"]
let currentIndex=0;

function changeImage(){const imgElement=document.getElementById("slideshow");
                       currentIndex=(currentINdex + 1) % images.length;
                       imgElement.src=images[currentIndex];}
setInterval(changeImage,2000);
