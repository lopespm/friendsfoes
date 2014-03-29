#pragma strict

var tilePrefab : Transform;

var tileArray = [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,1,0,0,0,0,0,0,0],
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
	for (var x = 0; x < tileArray.Length; x++) {
        for (var y = 0; y < tileArray[0].Length; y++) {
        	var tileType = tileArray[y][x];
        	if(tileType == 0) {
            	var cube = GameObject.CreatePrimitive(PrimitiveType.Cube);
            	cube.transform.position = Vector3 (offsetX + x, offsetY - y, -2);
            }
		}
    }	
}
