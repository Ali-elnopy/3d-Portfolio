import React, { useRef } from 'react'
import { counterItems } from '../constants'
import CountUp from 'react-countup';


const AnimatedCounter = () => {
  const counterRef = useRef(null);
  const countersRef = React.useRef([]);
  return (
    <div id="counter" ref={counterRef} className='padding-x-lg xl:mt-0 mt-32'>
      <div className='mx-auto grid-4-cols'>
        {counterItems.map((item, index)=>(
          <div 
            key={index} 
            className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center"
            ref={(el) => el && (countersRef.current[index] = el)}>
            
            <div className='counter-number text-white text-5xl font-bold mb-2'>
              
              <CountUp suffix={item.suffix} end={item.value} />
            </div>
            <div className=' text-white-50 text-lg'>{item.label}</div>
          </div>
          
        ))}
      </div>
    </div>
  )
}

export default AnimatedCounter