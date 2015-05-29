 var Player: Transform;
 var MoveSpeed = 4.0;
 var MaxDist = 10.0;
 var MinDist = 5.0;




 function Start() {

 }

 function Update() {
     transform.LookAt(Player);

     if (Vector3.Distance(transform.position, Player.position) >= MinDist && Vector3.Distance(transform.position, Player.position) <= MaxDist) {

         transform.position += transform.forward * MoveSpeed * Time.deltaTime;

         if (Vector3.Distance(transform.position, Player.position) <= MaxDist) {

             //This area can be used to configure actions when player is in range.

         }

     }

 }