import * as utils from '@dcl/ecs-scene-utils'
export function room2(){
let door = new Entity()

door.addComponent(new GLTFShape("models/Puzzle02_Door.glb"))
door.addComponent(new Transform({position: new Vector3(23.6, 0.1, 25.3),
    scale: new Vector3( 1.3, 1.5, 1)
}))
    let doorAnimator = new Animator()
    doorAnimator.addClip(new AnimationState("Door_Close", {looping:false}))
    doorAnimator.addClip(new AnimationState("Door_Open", {looping:false}))
    door.addComponent(doorAnimator)

    let doorAudioSource = new AudioSource(new AudioClip("sounds/door_squeak.mp3"))
    door.addComponent(doorAudioSource)
   
 
    let door2 = new utils.TriggerBoxShape()
    
    door.addComponent(
      
      new utils.TriggerComponent(
        door2, 
        {
          onCameraEnter : () => {
        
          log('triggered!')
        
          }
          

      
        }
      )
        
               ) 
               engine.addEntity(door)

       
}