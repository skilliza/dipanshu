import utils from "../node_modules/decentraland-ecs-utils/index"

export function door1() : void{
 
    const openDoorTime = 10

    let formatCountdownString = (seconds: number) =>{
        let mins = Math.floor(seconds/ 60)
        let secs = Math.floor(seconds % 60)
        return mins.toLocaleString(undefined, {minimumIntegerDigits: 2}) + ":" + secs.toLocaleString(undefined, {minimumIntegerDigits: 2})     
    }

    let room = new Entity()
    room.addComponent(new GLTFShape("models/roomTesting.glb"))
    room.addComponent(new Transform({position:new Vector3(25, 0, 25)}))
    let door = new Entity()

    door.addComponent(new GLTFShape("models/Puzzle01_Door.glb"))
    door.addComponent(new Transform({position: new Vector3(23.8, 0.1, 15.3),
    scale: new Vector3( 1.6, 1.5, 2)
}))


    let doorAnimator = new Animator()
    doorAnimator.addClip(new AnimationState("Door_Close", {looping:false}))
    doorAnimator.addClip(new AnimationState("Door_Open", {looping:false}))
    door.addComponent(doorAnimator)

    let doorAudioSource = new AudioSource(new AudioClip("sounds/door_squeak.mp3"))
    door.addComponent(doorAudioSource)


    let countDownDisplayer = new Entity()

 
    let countdown = new Entity()

  
    countdown.setParent(countDownDisplayer)

    countdown.addComponent(new Transform({position: new Vector3(25, 5.5, 15), scale: new Vector3( 2, 0.7, 5) }))

  
    let countdownTextShape = new TextShape(formatCountdownString(openDoorTime))
    countdownTextShape.color = Color3.Red()
    countdownTextShape.fontSize = 5
    countdown.addComponent(countdownTextShape)

        if (!countDownDisplayer.hasComponent(utils.Interval)){
       
            let countdown = openDoorTime
            countDownDisplayer.addComponent(new utils.Interval(1000,()=>{
                countdown --
                if (countdown > 0){
                    countdownTextShape.value = formatCountdownString(countdown)
                }
                else{
              
                    countDownDisplayer.removeComponent(utils.Interval)  
                    doorAnimator.getClip("Door_Open").stop()
                    doorAnimator.getClip("Door_Close").play()
                    doorAudioSource.playOnce()   
                    countdownTextShape.value = formatCountdownString(openDoorTime)
                }
            }))

            doorAnimator.getClip("Door_Close").stop()
            doorAnimator.getClip("Door_Open").play()   
            doorAudioSource.playOnce()
           
    }

    engine.addEntity(door);
    engine.addEntity(room);
    engine.addEntity(countDownDisplayer);
}