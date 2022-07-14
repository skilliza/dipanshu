


export function cube() {
const box = new Entity()

box.addComponent(new BoxShape())
box.getComponent(BoxShape).withCollisions = false


box.addComponent(new Transform({ position: new Vector3(5, 1, 7) }))

box.addComponent(
new OnPointerDown(()=>
{
  log('triggered!')
  box.removeComponent
}))


engine.addEntity(box)
}
// box.getComponent(utils.TriggerComponent).enabled = false

