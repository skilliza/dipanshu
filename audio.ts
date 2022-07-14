
export function button(){
let button = new Entity()

button.addComponent(new GLTFShape("models/Round_Button.glb"))
button.addComponent(new Transform({position: new Vector3(34.5, 3, 20),rotation: Quaternion.Euler(0,180,0), }))
button.addComponent(
    new OnPointerDown(
      (e) => {
        log("myEntity clicked", e)
      },
      {
        button: ActionButton.PRIMARY,
        showFeedback: true,
        hoverText: "Music Open",
     
      }
    )
  )
const streamSource = new Entity()
streamSource.addComponent(
  new AudioStream(
    "https://icecast.ravepartyradio.org/ravepartyradio-192.mp3"
  )
)
engine.addEntity(streamSource)
streamSource.getComponent(AudioStream).playing = true

let buttonAnimator = new Animator()
buttonAnimator.addClip(new AnimationState("Button_Action", {looping: true}))
button.addComponent(buttonAnimator)
engine.addEntity(button)




}