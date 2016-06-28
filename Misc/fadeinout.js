#pragma strict

var overlay : GameObject;
private var fadeout : boolean;
private var fadein : boolean;
private var lerpval : float;
var color : Color;


function Update() {
	
	overlay.GetComponent.<UI.Image>().color = color;
	
	lerpval = lerpval + .0001;
	
	if (fadeout == true) {
		
		fadein = false;
		
		color.a = Mathf.Lerp(color.a, 1, lerpval);
		
		if (color.a > .999) {
			
			fadeout = false;
			
		}
		
	}
	
	else if (fadein == true) {
		
		fadeout = false;
		
		color.a = Mathf.Lerp(color.a, 0, lerpval);
		
		if (color.a < .001) {
			
			fadein = false;
			
		}
		
		
	}
	
	else {
		
		
		
	}
	
	
	if (Input.GetKeyDown("i")) {
		
		fin();
		
	}
	
	if (Input.GetKeyDown("o")) {
		
		fout(0);
		
	}
	
	
}


function fin(){
	
	lerpval = 0.0;
	
	fadein = true;
	
}


function fout(levelnum : int){
	
	lerpval = 0.0;
	
	fadeout = true;
	
	yield WaitForSeconds(4);
	
	Application.LoadLevel(levelnum);
	
}
