import {React , useRef , useEffect , useState} from 'react'
import Images from './Images'
import { motion } from 'framer-motion' // eslint-disable-line no-unused-vars
import './App.css'

const App = () => {
  const sliderRef = useRef()
  const [width , setWidth] = useState(0)
  useEffect(()=> {
    console.log(sliderRef.current.scrollWidth)
    console.log(sliderRef.current.offsetWidth)
    setWidth(sliderRef.current.scrollWidth - sliderRef.current.offsetWidth)
  }, [])


  return (
    <div>
      <motion.div ref={sliderRef} className="slider">
        <motion.div  drag="x"  dragConstraints={{right: 0 , left: -width}} className="inner-slider">
          {Images.map((image)=> (
            <motion.div className="item" key={image} >
              <img src={image} alt="slider-image" />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

export default App