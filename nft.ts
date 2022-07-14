

export function NFT() {
const entity = new Entity()
const shapeComponent = new NFTShape(
  "ethereum://0x06012c8cf97BEaD5deAe237070F9587f8E7A266d/558536"
)
entity.addComponent(shapeComponent)
entity.addComponent(
  new Transform({
     position: new Vector3(15.5, 5, 23),rotation: Quaternion.Euler(0,270,0), 
    scale: new Vector3( 5, 4, 5)
  })
)
engine.addEntity(entity)




}s