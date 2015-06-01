#pragma strict
enum axis {XZ, XY}
var target : Transform;
var Axis: axis;
var smoothTime = 0.3;
private var thisTransform : Transform;
private var velocity : Vector3;



function Start() {
	
	thisTransform = transform;

}

function Update() {

	if (Axis == axis.XZ) {	
	
	thisTransform.position.x = Mathf.SmoothDamp( thisTransform.position.x, target.position.x, velocity.x, smoothTime);

	thisTransform.position.z = Mathf.SmoothDamp( thisTransform.position.z, target.position.z, velocity.z, smoothTime);

}


if (Axis == axis.XY) {

	thisTransform.position.x = Mathf.SmoothDamp( thisTransform.position.x, target.position.x, velocity.x, smoothTime);

	thisTransform.position.y = Mathf.SmoothDamp(thisTransform.position.y, target.position.y, velocity.y, smoothTime);


}

}