#pragma strict

var life:float = 5;
var hardness:int = 1;

function Start() {
}

function Hit(isHuman) {
	if(isHuman)
		life-= (0.5/hardness);
	else
		life-= (1.0/hardness);
	
	Debug.Log(life);
	
	if(life<0)
		Destroy (gameObject);
}
