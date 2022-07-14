import * as utils from '@dcl/ecs-scene-utils'
import { ID } from './ui'

// import { Tset } from './enter' 
export function IIt() {

const mymaterial = new Material()
mymaterial.albedoColor = Color3.White()
mymaterial.metallic = 0.9
mymaterial.roughness = 0.1



const box = new Entity()
box.addComponent(new BoxShape())
box.getComponent(BoxShape).withCollisions = false

box.addComponent(new Transform({ position: new Vector3(24.8, 1, 13), }))
box.addComponent(mymaterial)
mymaterial.albedoColor = new Color4(1, 0, 0,0)


engine.addEntity(box)


  let triggerBox = new utils.TriggerBoxShape()

box.addComponent(
  
  new utils.TriggerComponent(
    triggerBox, 
    {
      onCameraEnter : () => {
        ID() 
	 


      }
  
    }
  )
    
	       ) 
   
      }