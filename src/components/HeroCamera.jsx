import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { easing } from "maath";


const HeroCamera = ({children, isMobile}) => {
    const groupRef = useRef();
    useFrame((state,delata)=>{
        easing.damp3(state.camera.position,[0,0,20],0.25,delata)
        if(!isMobile){
            easing.dampE(groupRef.current.rotation,[-state.pointer.y/3,state.pointer.x/5,0],0.25,delata)

        }
    })
  return (
    <group ref={groupRef}>{children}</group>
  )
}

export default HeroCamera