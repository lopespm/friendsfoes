#pragma strict

var changeDirectionTime:int = 50;
private var changeDirectionCounter:int = 0;

private var directions =[
	Vector3(1, 0, 0),
    Vector3(-1, 0, 0),
    Vector3(0, 1, 0),
    Vector3(0, -1, 0)
    ];

private var direction:Vector3;

function Start () {

}

function Update () { 
	transform.position += GetDirection()/40;
	
	if(transform.position.y > 0) transform.position.y = 0;
}


function GetDirection() :Vector3 {
	changeDirectionCounter --;	
	if(changeDirectionCounter < 0 || DoesCastCollide(direction)) {
		var tempDirection = directions[Random.Range(0, 3)];	
		
		if(DoesCastCollide(tempDirection)){
			
		} else {
			direction = tempDirection;
			// Reset counter
			changeDirectionCounter = changeDirectionTime;
		}
	}

	return direction;
}

function DoesCastCollide(vector) :boolean {	
	var hit : RaycastHit;
	if (Physics.Raycast (transform.position, vector, hit, 0.6)) {
	    if (hit.collider.gameObject.name == "Dirt(Clone)" ||
	    	hit.collider.gameObject.name == "HardDirt1(Clone)" ||
	    	hit.collider.gameObject.name == "Rock(Clone)") {
	    	hit.collider.gameObject.GetComponent(typeof(TileLife)).Hit(false);
	        return true;
	    }
	}

    return false;
}