#pragma strict

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
}


function DoesCastCollide(vector) :boolean {	
	var hit : RaycastHit;
	if (Physics.Raycast (transform.position, vector, hit, 0.6)) {
	    if (hit.collider.gameObject.name == "Dirt(Clone)") {
	    	hit.collider.gameObject.GetComponent(typeof(Dirt)).Hit();
	            return true;
	        }
	}

    return false;
}