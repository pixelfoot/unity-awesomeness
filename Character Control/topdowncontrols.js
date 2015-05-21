@script RequireComponent(CharacterController)


var speed : float = 6.0;
var gravity : float = 20.0;
var movespeed : Vector3;

function Update() {
	
	var controller : CharacterController = GetComponent(CharacterController);
	
	if (controller.isGrounded) {

		moveDirection = Vector3(Input.GetAxis("Horizontal"), 0,Input.GetAxis("Vertical"));
			
		moveDirection = transform.TransformDirection(moveDirection);
			
		moveDirection *= speed;
			
		movespeed = moveDirection;	

	}

	// Apply gravity
	moveDirection.y -= gravity * Time.deltaTime;
		
	// Move the controller
	controller.Move(moveDirection * Time.deltaTime);
		
		
		
}