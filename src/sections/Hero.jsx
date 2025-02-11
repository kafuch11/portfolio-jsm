import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import { HackerRoom } from '../components/HackerRoom'
import { Suspense } from 'react'
import CanvasLoader from '../components/CanvasLoader'
import { useMediaQuery } from 'react-responsive'
import { calculateSizes } from '../constants/index'
import Target from '../components/Target'
import ReactLogo from '../components/ReactLogo';
import Rings from '../components/Ring'
import Cube from '../components/Cube'
import HeroCamera from '../components/HeroCamera'
import Button from '../components/Button'

const Hero = () => {
  const isSmall = useMediaQuery({ maxWidth: 440 })
  const isMobile = useMediaQuery({ maxWidth: 768 })
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 })

  const sizes = calculateSizes(isSmall, isMobile, isTablet)


  return (
    <section className="min-h-screen w-full flex flex-col relative" id={'home'}>
      <div className="w-full mx-auto z-50 flex flex-col sm:mt-28 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">Hi, I am Kafeel <span className="waving-hand">👋</span></p>
        <p className="hero_tag text-gray_gradient">Building Products & Brands</p>
      </div>
      <div className="w-full h-full inset-0 absolute">
        {/* <Leva /> */}
        <Canvas className='h-full w-full'>
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 20]} />
            <ambientLight intensity={1} />
            <HeroCamera isMobile={isMobile}>

              <HackerRoom
                position={sizes.deskPosition}
                scale={sizes.deskScale}
                rotation={[0, Math.PI, 0]}
              />

            </HeroCamera>
            <group>
              <Target position={sizes.targetPosition} />
              <ReactLogo position={sizes.reactLogoPosition} />
              <Cube position={sizes.cubePosition} />
              <Rings position={sizes.ringPosition} />
            </group>
          </Suspense>

        </Canvas>
      </div>
      <div className='absolute bottom-7 left-0 right-0 w-full z-10 c-space'>
    <a href="#about" className='w-fit'>
      <Button name={"Let's work togather"} isBeam containerClass='sm:w-fit w-full sm:min-w-96' />
    </a>
      </div>
    </section>
  )
}

export default Hero