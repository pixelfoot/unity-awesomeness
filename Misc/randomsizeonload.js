//Primarily for use in tandem with generateobjects.js.

#pragma strict

var SizeMin = 0.0;
var SizeMax = 0.0;
var XMin = 0.0;
var XMax = 0.0;
var Zmin = 0.0;
var Zmax = 0.0;


function Awake () {

var scl= 0.0;

scl = Random.Range(SizeMin,SizeMax);

transform.position.x=(Random.Range(Xmin,Xmax));

transform.position.z=(Random.Range(Zmax,Zmax));

transform.localScale+=Vector3(scl,1,scl);

}

function Update () {

}