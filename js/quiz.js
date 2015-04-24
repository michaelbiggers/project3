
var webCounter = 0;
var graphicCounter = 0;
var programCounter = 0;


	var calcWidth = window.innerWidth;
		var ratio = window.innerHeight/window.innerWidth;
		var calcHeight = ratio*calcWidth;
function myFunction() {

    var a = document.getElementById("question1").selectedIndex;
    var b = document.getElementById("question1").options;
    //console.log("Index: " + b[a].index + " is " + b[a].value);

    var l = document.getElementById("question2").selectedIndex;
    var m = document.getElementById("question2").options;
    //console.log("Index: " + m[l].index + " is " + m[l].value);

    var x = document.getElementById("question3").selectedIndex;
    var y = document.getElementById("question3").options;
    //console.log("Index: " + y[x].index + " is " + y[x].value);


/********* Logic for question 1 *********/
    if(b[a].value == "web"){
    	webCounter++;
    	console.log('webcounter is ' + webCounter);
    	}
    else if(b[a].value == "graphic"){
    	graphicCounter++;
    	console.log('graphicCounter is ' + graphicCounter);
    	}
    else if(b[a].value == "program"){
    	programCounter++;
    	console.log('programCounter is ' + programCounter);
    	}
/********* Logic for question 2 *********/
    if (m[l].value == "web"){
    	webCounter++;
    	console.log('webcounter is ' + webCounter);
    }
    else if(m[l].value == "graphic"){
    	graphicCounter++;
    	console.log('graphicCounter is ' + graphicCounter);
    	}
    else if(m[l].value == "program"){
    	programCounter++;
    	console.log('programCounter is ' + programCounter);
    	}
/********* Logic for question 3 *********/
    if (y[x].value == "web"){
    	webCounter++;
    	console.log('webcounter is ' + webCounter);
    }
    else if(y[x].value == "graphic"){
    	graphicCounter++;
    	console.log('graphicCounter is ' + graphicCounter);
    	}
    else if(y[x].value == "program"){
    	programCounter++;
    	console.log('programCounter is ' + programCounter);
    	}

    	console.log("final web is " + webCounter);
    	console.log("final graphic is " + graphicCounter);
    	console.log("final program is " +programCounter);

/********* Logic returning results *********/
	if (webCounter > graphicCounter && webCounter > programCounter){
		//alert("You're a web Designer!");
	

		var layer = new collie.Layer({
		    width: calcWidth,
		    height: calcHeight
		});
		 
		collie.ImageManager.add({
		    clouds1: "img/clouds1.png",
		    clouds2: "img/clouds2.png",
		    background: "img/webDesign.png",
		    wall: "img/wall.png",
		    windowBG: "img/windowBG.png",
		    car: "img/car.png"
		});

		var background = new collie.DisplayObject({
			width : layer.get("width"),
			height : layer.get("height"),
			fitImage : true,
			zIndex: 0,
			backgroundImage : "background"
			}).addTo(layer);

		var windowBG = new collie.DisplayObject({
			width:layer.get("width"),
			height: layer.get("height"),
			fitImage: true,
			zIndex:1,
			backgroundImage:"windowBG"

		}).addTo(layer);

		var clouds1 = new collie.DisplayObject({
		    x : 0,
		    y : 0,
		    width : layer.get("width"),
		    height : layer.get("height"),
		    velocityX : -10,
		    zIndex : 2,
		    backgroundRepeat : "repeat-x",
		    rangeX : [-800, 200], // This object can move from first position to second position.
		    positionRepeat : true, // This object move the other side when It's on one end of the edge.
		    backgroundImage : "clouds1"
		}).addTo(layer);

		var clouds2 = new collie.DisplayObject({
		    x : 0,
		    y : 0,
		    width : layer.get("width"),
		    height : layer.get("height"),
		    velocityX : -7,
		    zIndex : 2,
		    backgroundRepeat : "repeat-x",
		    rangeX : [-800, 400], // This object can move from first position to second position.
		    positionRepeat : true, // This object move the other side when It's on one end of the edge.
		    backgroundImage : "clouds2"
		}).addTo(layer);

		var car = new collie.DisplayObject({
		    x : -500,
		    y : -250,
		    width : layer.get("width"),
		    height : layer.get("height"),
		    velocityX : 200,
		    zIndex : 3,
		    fitImage:true,
		    backgroundRepeat : "repeat-x",
		    rangeX : [-800, 4000], // This object can move from first position to second position.
		    positionRepeat : true, // This object move the other side when It's on one end of the edge.
		    backgroundImage : "car"
		}).addTo(layer);
		 
		var wall = new collie.DisplayObject({
			width: layer.get("width"),
			height: layer.get("height"),
			fitImage: true,
			zIndex: 3,
			backgroundImage: "wall"
		}).addTo(layer);	

		
		 
		collie.Renderer.addLayer(layer);
		collie.Renderer.load(document.getElementById("container"));
		collie.Renderer.start();
		
	}
	else if (graphicCounter > webCounter && graphicCounter > programCounter){
		//alert("You're a graphic Designer!");
	
	
		
		

		var layer = new collie.Layer({
		    width: window.innerWidth,
		    height: window.innerHeight
		});
		 
		collie.ImageManager.add({
		    bubble: "img/bubble.png",
		    background: "img/graphicDesign.png"
		});

		var background = new collie.DisplayObject({
			width : layer.get("width"),
			height : layer.get("height"),
			fitImage : true,
			backgroundImage : "background"
			}).addTo(layer);
		 
		var bubble = new collie.DisplayObject({
		    x: 55,
		    y: 75,
		    scaleX:.5,
		    scaleY:.5,
		   // mass: 1,
		    backgroundImage: "bubble"
		}).addTo(layer);

		collie.Timer.transition(bubble, 3000, {
		        to : [55, 50],
		        set : ["x", "y"],
		        effect: collie.Effect.cubicEase
		    });
		 
		collie.Renderer.addLayer(layer);
		collie.Renderer.load(document.getElementById("container"));
		collie.Renderer.start();
	}
	else if (programCounter > webCounter && programCounter > graphicCounter){
		alert("You're a programmer!");

		var layer = new collie.Layer({
		    width: window.innerWidth,
		    height: window.innerHeight
		});
		 
		collie.ImageManager.add({
		    bubble: "img/bubble.png",
		    background: "img/webDevelop.png"
		});

		var background = new collie.DisplayObject({
			width : layer.get("width"),
			height : layer.get("height"),
			fitImage : true,
			backgroundImage : "background"
			}).addTo(layer);
		 
		var bubble = new collie.DisplayObject({
		    x: 55,
		    y: 75,
		    scaleX:.5,
		    scaleY:.5,
		   // mass: 1,
		    backgroundImage: ""
		}).addTo(layer);

		collie.Timer.transition(bubble, 3000, {
		        to : [55, 50],
		        set : ["x", "y"],
		        effect: collie.Effect.cubicEase
		    });
		 
		collie.Renderer.addLayer(layer);
		collie.Renderer.load(document.getElementById("container"));
		collie.Renderer.start();
	
	}
	else {
		alert("You're a great Mix!");
	}
}
