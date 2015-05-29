#pragma strict

var tag1: String;
var tag2: String;
var tag3: String;
var tag4: String;
var tag5: String;

function Start() {

}

function Update() {

}


function OnTriggerEnter(other: Collider) {

    if (other.tag == tag1 || other.tag == tag2 || other.tag == tag3 || other.tag == tag4 || other.tag == tag5) {

        Debug.Log("hit something");

        Destroy(other.gameObject);

    }

}