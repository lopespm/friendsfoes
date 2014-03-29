#pragma strict

var life:int = 5;

function Start () {

}

function Update () {

}

function Hit() {
	Debug.Log(life);
	life-=1;
	if(life<0)
		Destroy (gameObject);
}