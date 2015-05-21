//A simple script for generating a large number of objects on load. 


#pragma strict

var obj1 : GameObject; //Add more  as "obj##" below this line for a variety of objects

var numthings = 100; //How many things?

function Start () {
for (var i : int = 0; i < numthings; i++) {
        Instantiate(obj1); //Make sure to instantiate additional objects below this line.

    }
}

function Update () {

}