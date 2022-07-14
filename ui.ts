import * as utils from '@dcl/ecs-scene-utils'
import { movePlayerTo } from '@decentraland/RestrictedActions'


export function ID() {

  const canvas = new UICanvas()
  const infocontainer = new UIContainerRect(canvas)

  const close = new UIImage(canvas, new Texture("images/blu image.png"))
  close.name = "click image"
  close.width = "800px"
 
 close.positionY = 100
 close.opacity = 0.5
  close.height = "650px"
  close.sourceWidth = 692
  close.sourceHeight = 300
  close. height = 400
  close.width = 395
 close.vAlign ="Top"

  
  const text = new UIText(canvas)
  


  text.value = " Enter your password"
  text.fontSize = 25
  text.color = Color4.Black()
  text.positionX  = -80
  text.positionY = 250
  
  const newclose = new UIImage(canvas, new Texture("images/button jpg.jfif"))
  newclose.name = "submit"
  newclose.width = "100px"
  newclose.height = "30px"
  newclose.sourceWidth = 223
  newclose.sourceHeight = 82
  newclose.opacity = 0.5
 //  newclose.positionX =5
  newclose.positionY = -10
  newclose.onClick = new OnClick((): void => {
   log("submit")
   canvas.visible = false;
  })
               
  
  
  
  const textInput = new UIInputText(canvas)
  
  textInput.width = "20%"
  textInput.fontSize = 25
  textInput.height = "45px"
  textInput.positionX = "-10"
  textInput.positionY = "300"
  textInput.fontSize = 20
  textInput.placeholder = "password"
 textInput.opacity = 0.5
  textInput.positionY = "150px"
  textInput.isPointerBlocker = true
  textInput.onTextSubmit = new OnTextSubmit((x) => {
   log("submit")
   
   
    
  }
  
  )

 
 
  




}