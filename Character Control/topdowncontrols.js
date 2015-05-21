var speed : float = 6.0;
var jumpSpeed : float = 8.0;
var gravity : float = 20.0;
var projectile : Rigidbody;
var canfire : boolean = true;
var ballspeed : int = 25;
var movespeed : Vector3;

 	function Update() {
		var controller : CharacterController = GetComponent(CharacterController);
		if (controller.isGrounded) {
			// We are grounded, so recalculate
			// move direction directly from axes
			moveDirection = Vector3(Input.GetAxis("Horizontal"), 0,
			                        Input.GetAxis("Vertical"));
			moveDirection = transform.TransformDirection(moveDirection);
			moveDirection *= speed;
				movespeed = moveDirection;	
}

		// Apply gravity
		moveDirection.y -= gravity * Time.deltaTime;
		
		// Move the controller
		controller.Move(moveDirection * Time.deltaTime);
		
		
		
	}