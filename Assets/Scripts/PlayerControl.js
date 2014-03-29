#pragma strict

var werewolfLife:int=100;
var werewolfLifeCounter:int;
var isHuman:boolean;

var humanMaterial :Material;
var werewolfMaterial :Material;

function Start () {

}

function Update () {
  if ( Input.GetKey(KeyCode.UpArrow) ) {
  	if( !DoesCastCollide(Vector3(0, 1, 0)) )
  		transform.position.y += 0.1;
  }
  if ( Input.GetKey(KeyCode.DownArrow) ) {
  	if( !DoesCastCollide(Vector3(0, -1, 0)))
  		transform.position.y -= 0.1;
  }
  if ( Input.GetKey(KeyCode.RightArrow) ) {
  	if( !DoesCastCollide(Vector3(1, 0, 0)))
  		transform.position.x += 0.1;
  }
  
  if ( Input.GetKey(KeyCode.LeftArrow) ) {
	if( !DoesCastCollide(Vector3(-1, 0, 0)))
		transform.position.x -= 0.1;
  }
  
  if(transform.position.y>0) {
  	werewolfLifeCounter = werewolfLife;
  	isHuman = false;
  	renderer.material = werewolfMaterial;
  }
  
  if(werewolfLifeCounter<0) {
  	isHuman = true;	
  	renderer.material = humanMaterial;
  }
  
  if(transform.position.y > 0.142529) {
  	transform.position.y = 0.142529;
  }
  
  SaveOrDieOnTouchFoe();
  
}


function DoesCastCollide(vector) :boolean {	
	var hit : RaycastHit;
	if (Physics.Raycast (transform.position, vector, hit, 0.6)) {
	    if (hit.collider.gameObject.name == "Dirt(Clone)" ||
	    	hit.collider.gameObject.name == "HardDirt1(Clone)" ||
	    	hit.collider.gameObject.name == "Rock(Clone)") {
	    	hit.collider.gameObject.GetComponent(typeof(TileLife)).Hit(isHuman);
	    	werewolfLifeCounter--;
	        return true;
	    }
	}

    return false;
}

function SaveOrDieOnTouchFoe() {
	var colliders : Collider[] = Physics.OverlapSphere( transform.position, 0.2 );
	 
	for(var hit in colliders) {
	    if(hit.gameObject.name == "FriendFoe1(Clone)") {
	    	if(isHuman) {
	    		Debug.Log("Die");
	    		Destroy(gameObject);
	    	} else {
	    		Debug.Log("Save");
	    		Destroy(hit.gameObject);
	    	}
	    }
	}
}
