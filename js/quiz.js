
var webCounter = 0;
var graphicCounter = 0;
var programCounter = 0;

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
		alert("You're a web Designer!");
	}
	else if (graphicCounter > webCounter && graphicCounter > programCounter){
		alert("You're a graphic Designer!");
	}
	else if (programCounter > webCounter && programCounter > graphicCounter){
		alert("You're a programmer!");
	}
	else {
		alert("You're a great Mix!");
	}
}
