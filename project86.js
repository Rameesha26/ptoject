var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

 var block_img;
function new_image()
{
	fabric.Image.fromURL("BirthdayImage.jpg",function(Img){
block_img=Img;
block_img.scaleToWidth(800);
block_img.scaleToHeight(500);
block_img.set({
    top:0,
    left:-5
});
canvas.add(block_img);
    });
	
}

function playSound(){
	x.play();
}
