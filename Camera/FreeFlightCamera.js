#pragma strict

class FreeFlightCamera extends MonoBehaviour {
	
	var speedNormal:float = 10.0f;
	var speedFast:float = 50.0f;
	var mouseSensitivityX:float = 5.0f;
	var mouseSensitivityY:float = 5.0f;
	
	function Start() {
		
		var component:Rigidbody = gameObject.GetComponent(Rigidbody);
		
		if (component) {
			
			component.freezeRotation = true;
			
		}
		
	}
	
	function Update() {
		
		var rotY:float = 0.0f;
		var rotX:float = 0.0f;
		var forward:float;
		var strafe:float;
		var speed:float;
		var trans:Vector3;
		
		forward = Input.GetAxis('Vertical');
		strafe = Input.GetAxis('Horizontal');
		
		// Rotation:
		if (Input.GetMouseButton(0)) {
			
			rotX = transform.localEulerAngles.y + Input.GetAxis('Mouse X') * mouseSensitivityX;
			rotY += Input.GetAxis('Mouse Y') * mouseSensitivityY;
			rotY = Mathf.Clamp(rotY, -89.5f, 89.5f);
			
			transform.localEulerAngles = new Vector3(-rotY, rotX, 0.0f);
			
		}
		
		// Move forwards/backwards:
		if (forward != 0.0f) {
			
			speed = Input.GetKey(KeyCode.LeftShift) ? speedFast : speedNormal;
			trans = new Vector3(0.0f, 0.0f, forward * speed * Time.deltaTime);
			
			gameObject.transform.localPosition += gameObject.transform.localRotation * trans;
			
		}
		
		// Strafe left/right:
		if (strafe != 0.0f) {
			
			speed = Input.GetKey(KeyCode.LeftShift) ? speedFast : speedNormal;
			trans = new Vector3(strafe * speed * Time.deltaTime, 0.0f, 0.0f);
			
			gameObject.transform.localPosition += gameObject.transform.localRotation * trans;
			
		}
		
	}
	
}
