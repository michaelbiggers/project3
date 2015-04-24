
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
		    background: "img/graphic_bg.png",
		    graphic_main: "img/graphic_main.png",
		    graphic_bubble: "img/graphic_bubble.png",
		    graphic_dot1: "img/graphic_dot1.png",
		    graphic_dot2: "img/graphic_dot2.png",
		    graphic_dot3: "img/graphic_dot3.png",
		    graphic_cloud1: "img/graphic_cloud1.png",
		    graphic_cloud2: "img/graphic_cloud2.png",
		    graphic_cloud3: "img/graphic_cloud3.png",
		    graphic_planet: "img/graphic_planet.png",
		    graphic_logo: "img/graphic_logo.png",
		    graphic_plane: "img/graphic_plane.png",

		});

		var background = new collie.DisplayObject({
			width : layer.get("width"),
			height : layer.get("height"),
			fitImage : true,
			zIndex:4,
			backgroundImage : "background"
			}).addTo(layer);

		 var graphic_main = new collie.DisplayObject({
		 	width : layer.get("width"),
			height : layer.get("height"),
			fitImage : true,
			zIndex:4,
			backgroundImage : "graphic_main"
			}).addTo(layer);

		 var graphic_bubble = new collie.DisplayObject({
		 	width : layer.get("width"),
			height : layer.get("height"),
			fitImage : true,
			zIndex:1,
			backgroundImage : "graphic_bubble"
			}).addTo(layer);

		 var graphic_dot1 = new collie.DisplayObject({
		 	width : layer.get("width"),
			height : layer.get("height"),
			fitImage : true,
			zIndex:1,
			backgroundImage : "graphic_dot1"
			}).addTo(layer);

		  var graphic_dot2 = new collie.DisplayObject({
		 	width : layer.get("width"),
			height : layer.get("height"),
			fitImage : true,
			zIndex:1,
			backgroundImage : "graphic_dot2"
			}).addTo(layer);

		   var graphic_dot3 = new collie.DisplayObject({
		 	width : layer.get("width"),
			height : layer.get("height"),
			fitImage : true,
			zIndex:1,
			backgroundImage : "graphic_dot3"
			}).addTo(layer);

		   var graphic_cloud1 = new collie.DisplayObject({
		 	width : layer.get("width"),
			height : layer.get("height"),
			fitImage : true,
			zIndex:3,
			velocityX : -7,
		    zIndex : 2,
		    opacity: .6,
		    backgroundRepeat : "repeat-x",
		    rangeX : [-window.innerWidth, window.innerWidth], // This object can move from first position to second position.
		    positionRepeat : true, // This object move the other side when It's on one end of the edge.
			backgroundImage : "graphic_cloud1"
			}).addTo(layer); 

		   	var graphic_cloud2 = new collie.DisplayObject({
		 	width : layer.get("width"),
			height : layer.get("height"),
			fitImage : true,
			zIndex:3,
			velocityX : -12,
		    zIndex : 2,
		    opacity: 1,
		    backgroundRepeat : "repeat-x",
		    rangeX : [-window.innerWidth, window.innerWidth], // This object can move from first position to second position.
		    positionRepeat : true, // This object move the other side when It's on one end of the edge.
			backgroundImage : "graphic_cloud2"
			}).addTo(layer); 

			var graphic_cloud3 = new collie.DisplayObject({
			 	width : layer.get("width"),
				height : layer.get("height"),
				fitImage : true,
				zIndex:3,
				velocityX : -19,
			    zIndex : 2,
			    opacity: .9,
			    backgroundRepeat : "repeat-x",
			    rangeX : [-window.innerWidth, window.innerWidth], // This object can move from first position to second position.
			    positionRepeat : true, // This object move the other side when It's on one end of the edge.
				backgroundImage : "graphic_cloud3"
			}).addTo(layer); 

			var graphic_planet = new collie.DisplayObject({
				width : layer.get("width"),
				height : layer.get("height"),
				fitImage : true,
				zIndex:2,
				backgroundImage: "graphic_planet"
			}).addTo(layer);

			var graphic_logo = new collie.DisplayObject({
				y:30,
				width : layer.get("width"),
				height : layer.get("height"),
				fitImage : true,
				zIndex:2,
				backgroundImage: "graphic_logo"
			}).addTo(layer);

			var graphic_plane = new collie.DisplayObject({
				width : layer.get("width"),
				height : layer.get("height"),
				fitImage : true,
				zIndex:2,
				backgroundImage: "graphic_plane"
			}).addTo(layer);

			collie.Timer.transition(graphic_logo, 4000, {
		        to : [0, 0],
		        set : ["x", "y"],
		        effect: collie.Effect.cubicEase
		    });
		collie.Renderer.addLayer(layer);
		collie.Renderer.load(document.getElementById("container"));
		collie.Renderer.start();
	}
	else if (programCounter > webCounter && programCounter > graphicCounter){
		//alert("You're a programmer!");

		var layer = new collie.Layer({
		    width: window.innerWidth,
		    height: window.innerHeight
		});
		 
		collie.ImageManager.add({
		    background: "img/develop_bg.png",
		    papers1: "img/develop_papers1.png",
		    papers2: "img/develop_papers2.png",
		    papers3: "img/develop_papers3.png",
		    dev_main: "img/develop_main.png"
		});

		var background = new collie.DisplayObject({
			width : layer.get("width"),
			height : layer.get("height"),
			fitImage : true,
			zIndex: 0,
			backgroundImage : "background"
			}).addTo(layer);
		 
		var papers1 = new collie.DisplayObject({
			width: layer.get("width"),
			height: layer.get("height"),
			fitImage: true,
			velocityY : -50,
		    zIndex : 3,
			backgroundImage : "papers1",
			backgroundRepeat : "repeat-y",
		    rangeY : [-window.innerHeight, window.innerHeight], // This object can move from first position to second position.
		    positionRepeat : true, // This object move the other side when It's on one end of the edge.
		}).addTo(layer);

		var papers2 = new collie.DisplayObject({
			width: layer.get("width"),
			height: layer.get("height"),
			fitImage: true,
			velocityY : -30,
		    zIndex : 2,
			backgroundImage : "papers2",
			backgroundRepeat : "repeat-y",
		    rangeY : [-window.innerHeight, window.innerHeight], // This object can move from first position to second position.
		    positionRepeat : true, // This object move the other side when It's on one end of the edge.
		}).addTo(layer);

		var papers3 = new collie.DisplayObject({
			width: layer.get("width"),
			height: layer.get("height"),
			fitImage: true,
			velocityY : -10,
		    zIndex : 1,
			backgroundImage : "papers3",
			backgroundRepeat : "repeat-y",
		    rangeY : [-window.innerHeight, window.innerHeight], // This object can move from first position to second position.
		    positionRepeat : true, // This object move the other side when It's on one end of the edge.
		}).addTo(layer);

		var dev_main = new collie.DisplayObject({
			width: layer.get("width"),
			height: layer.get("height"),
			fitImage: true,
			zIndex:4,
			backgroundImage: "dev_main"
		}).addTo(layer);
		 
		collie.Renderer.addLayer(layer);
		collie.Renderer.load(document.getElementById("container"));
		collie.Renderer.start();
	
	}
	else {
		alert("You're a great Mix!");
	}
}
