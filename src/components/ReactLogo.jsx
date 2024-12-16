
// import React, { useRef } from 'react'
import { useGLTF, Float  } from '@react-three/drei'

 function ReactLogo({...props}) {
  const { nodes, materials } = useGLTF('/models/react.glb')
  return (
    <Float floatIntensity={1}>
        <group  {...props} scale={0.4} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['React-Logo_Material002_0'].geometry}
        material={materials['Material.002']}
        position={[0, 0.079, 0.181]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.392, 0.392, 0.527]}
      />
</group>
    </Float>
  )
}


useGLTF.preload('/models/react.glb')
export default ReactLogo;