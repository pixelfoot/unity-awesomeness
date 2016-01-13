@script RequireComponent(CharacterController)

@Tooltip ("Set the speed of the player when running.")
var speed: float = 6.0;

@Tooltip ("Strength of gravity on the player.")
var gravity: float = 20.0;

@Tooltip ("The strength of the player's jump.")
var jumpamount : float = 10.0;

@Tooltip ("Lock the player's Z axis position.")
var lockz : float = 0.0;

private var sprite : GameObject;
private var moveDirection : Vector3;
private var movespeed: Vector3;


function Start(){

	if (gameObject.transform.Find("sprite") != null){
	
		sprite = gameObject.transform.Find("sprite").gameObject;

	}

}



function Update() {

	
	gameObject.transform.position.z = lockz;

    var controller: CharacterController = GetComponent(CharacterController);
    
    if (controller.isGrounded == true) {

        moveDirection = Vector3(Input.GetAxis("Horizontal"), 0,0);

        moveDirection = transform.TransformDirection(moveDirection);

        moveDirection *= speed;

        movespeed = moveDirection;

    }
    

	if (controller.isGrounded == false) {

        moveDirection.x = Vector3(Input.GetAxis("Horizontal"), 0,0).x;

        moveDirection = transform.TransformDirection(moveDirection);

        moveDirection.x *= speed;

        movespeed = moveDirection;

    }


    if (controller.isGrounded && Input.GetButtonDown("Jump")){
    
    	jump();
    
    }
    
    
    // Apply gravity
    moveDirection.y -= gravity * Time.deltaTime;

    // Move the controller
    controller.Move(moveDirection * Time.deltaTime);

	
	//Flip the sprite if one attached.
	
	if (sprite != null){
	
		if (movespeed.x < -0.5){
	
			sprite.GetComponent.<SpriteRenderer>().flipX = true;
	
		}
	
		else if (movespeed.x > 0.5){
	
			sprite.GetComponent.<SpriteRenderer>().flipX = false;
	
		}

	}
	
}




function jump() {

	moveDirection.y += jumpamount;


}

