@script RequireComponent(CharacterController)

enum hassprite {Yes, No}
var speed: float = 6.0;
var gravity: float = 20.0;
var movespeed: Vector3;
var target : GameObject;
var FlipSprite : hassprite;

private var sprite : GameObject;




function Start(){

	speed = Random.Range(4.0, 7.6);

	sprite = gameObject.transform.Find("Sprite").gameObject;

}


function Update() {

    var controller: CharacterController = GetComponent(CharacterController);
    
    var relativedir : Vector3;
    
    relativedir = transform.TransformDirection(target.transform.position - transform.position);

	moveDirection = relativedir.normalized;

	moveDirection = transform.TransformDirection(moveDirection);

	moveDirection *= speed;

	movespeed = moveDirection;

    // Apply gravity
    moveDirection.y -= gravity * Time.deltaTime;

    // Move the controller
    controller.Move(moveDirection * Time.deltaTime);
    

  	//Flip the sprite if you have the option selected in editor.
  	if (FlipSprite == hassprite.Yes){
	
		if (movespeed.x < 0.0){
	
			sprite.GetComponent.<SpriteRenderer>().flipX = true;
	
		}
	
		else if (movespeed.x > 0.0){
	
			sprite.GetComponent.<SpriteRenderer>().flipX = false;
	
		}
    
    }
    
}