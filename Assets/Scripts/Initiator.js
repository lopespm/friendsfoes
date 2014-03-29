#pragma strict

var dirtPrefab : GameObject;
var hardRock1Prefab : GameObject;
var rockPrefab : GameObject;
var friendfoe1Prefab : GameObject;

//0 dirt 1 empty 2 hard 3 rock 4 friendfoe


var tileArray = [
    [0,0,0,0,0,0,0,0,0,2,0,3,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,1,1,0,0,0,0,0,0],
    [0,0,2,0,0,0,0,1,0,0,0,2,0,0],
    [0,0,0,0,0,0,0,1,0,0,0,0,0,0],
    [0,0,0,0,2,0,0,1,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,0,0,0,0,0,0],
    [0,0,0,0,1,1,1,1,1,4,0,0,0,0],
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
        	var cube:GameObject;
        	if(tileType == 0) {
        	    cube = Instantiate(dirtPrefab, transform.position, transform.rotation);
            	cube.transform.position = Vector3 (offsetX + x, offsetY - y, -4.7);
            } else if(tileType == 2) {
        	    cube = Instantiate(hardRock1Prefab, transform.position, transform.rotation);
            	cube.transform.position = Vector3 (offsetX + x, offsetY - y, -4.7);
            } else if(tileType == 3) {
        	    cube = Instantiate(rockPrefab, transform.position, transform.rotation);
            	cube.transform.position = Vector3 (offsetX + x, offsetY - y, -4.7);
            } else if(tileType == 4) {
        	    cube = Instantiate(friendfoe1Prefab, transform.position, transform.rotation);
            	cube.transform.position = Vector3 (offsetX + x, offsetY - y, -4.7);
            }
            
		}
    }	
}
