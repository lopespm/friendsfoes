#pragma strict

var dirtPrefab : GameObject;

var tileArray = [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,1,1,0,0,0,0,0,0],
    [0,0,2,0,0,0,0,1,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,0,0,0,0,0,0],
    [0,0,0,0,2,0,0,1,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0]
];

class Tile {
    public var x:float;
    public var y:float;
    public var gameObject:GameObject;
}


function Start () {
	CreateTiles();
}

function Update () {

}


function CreateTiles() {
	var offsetX = -tileArray.Length/2;
	var offsetY = -1;
	for (var x = 0; x < tileArray[0].Length; x++) {
        for (var y = 0; y < tileArray.Length; y++) {
        	var tileType = tileArray[y][x];
        	if(tileType == 0) {
        	    var cube = Instantiate(dirtPrefab, transform.position, transform.rotation);
            	cube.transform.position = Vector3 (offsetX + x, offsetY - y, -4.7);
            }
		}
    }	
}
