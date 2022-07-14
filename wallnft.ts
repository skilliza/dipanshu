export function wall() {
const entity = new Entity()
const shapeComponent = new NFTShape(
  "https://opensea.io/assets/ethereum/0x06012c8cf97bead5deae237070f9587f8e7a266d/879154"
)
entity.addComponent(shapeComponent)
entity.addComponent(
  new Transform({
    position: new Vector3(34.2, 5, 20),rotation: Quaternion.Euler(0,90,0),
    scale: new Vector3( 4, 4, 4)
  })
)
engine.addEntity(entity)
}