export function video(){
const myVideoClip = new VideoClip(
    'https://player.vimeo.com/external/552481870.m3u8?s=c312c8533f97e808fccc92b0510b085c8122a875'
  )
  
  // #2
  const myVideoTexture = new VideoTexture(myVideoClip)
  
  // #3
  const myMaterial = new Material()
  myMaterial.albedoTexture = myVideoTexture
  myMaterial.roughness = 1
  myMaterial.specularIntensity = 0
  myMaterial.metallic = 0
  
  
  // #4
  const screen = new Entity()
  screen.addComponent(new PlaneShape())
  screen.addComponent(
    new Transform({
      position: new Vector3(15.7, 5, 17.5),rotation: Quaternion.Euler(0,270,0), 
      scale: new Vector3( 3, 2, 3)
      
    })
  )
  screen.addComponent(myMaterial)
  
  engine.addEntity(screen)
  
  myVideoTexture.loop = true
  myVideoTexture.play()
}