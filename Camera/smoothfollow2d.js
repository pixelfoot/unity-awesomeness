//Configured by default for top-down camera (X and Z axis). See comments below to change for (X,Y) camera.

#pragma strict

var target : Transform;
var smoothTime = 0.3;
private var thisTransform : Transform;
private var velocity : Vector3;



function Start() {
	
	thisTransform = transform;

}

function Update() {

	//X Axis Movement

	thisTransform.position.x = Mathf.SmoothDamp( thisTransform.position.x, target.position.x, velocity.x, smoothTime);


	//Z Axis Movement

	thisTransform.position.z = Mathf.SmoothDamp( thisTransform.position.z, target.position.z, velocity.z, smoothTime);


	//Y Axis Movement - Be sure to comment out Z axis when using.

	//thisTransform.position.y = Mathf.SmoothDamp(thisTransform.position.y, target.position.y, velocity.y, smoothTime);

}