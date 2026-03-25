import React, { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const ShowcaseSection = () => {
  const sectionRef = useRef(null)
  const project1Ref = useRef(null)
  const project2Ref = useRef(null)
  const project3Ref = useRef(null)

  
  useGSAP(()=>{
    gsap.fromTo(sectionRef.current, 
      { opacity: 0 }, 
      { opacity: 1, duration: 1.5, ease: "power2.out" }
  )
  const cards  = [project1Ref.current, project2Ref.current, project3Ref.current]
  cards .forEach((card, index) => {
    gsap.fromTo(card, 
      {y:50, opacity: 0},
      {
        y:0, 
        opacity:1, 
        duration:1, 
        delay: 0.3 * (index+1), 
        scrollTrigger: {
          trigger: card,
          start: "top bottom-=100",
        }
      }
    )
    
  });
  },[])

  return (
    <div id='work' ref={sectionRef} className='app-showcase'>
      <div className="w-full">
        <div className='showcaselayout'>
          {/* Left */}
          <div ref={project1Ref} className="first-project-wrapper">
            <div className='image-wrapper'>
              <a href="https://mojito-58yz.vercel.app/" target="_blank">
                <img src="/images/project1.png" alt="Project 1" />
              </a>
              
            </div>
            <div className='text-content'>
              <h2>
                Velvet Pour – Cocktail Bar Landing Page
              </h2>
              <p className='text-white-50 md:text-xl'>
                An app built with React Native, Expo, & TailwindCSS for a fast,
                user-friendly experience.
              </p>
            </div>
          </div>
          {/* Right */}
          <div className='project-list-wrapper overflow-hidden'>
            <div ref={project2Ref} className='project'>
              <div className='image-wrapper bg-[#FFEFDB]'>
                <a href="https://restorant-landing-page-a19rv5z6e-ali-elnobys-projects.vercel.app/" target="_blank">
                  <img src="/images/project2.png" alt="Restaurant Landing Page" />
                </a>
                
              </div>
              <h2>Restaurant Landing Page</h2>
            </div>
            <div ref={project3Ref} className='project'>
              <div className='image-wrapper bg-[#FFE7EB]'>
                <a href="https://ai-rev-puce.vercel.app/" target="_blank">
                  <img src="/images/project3.png" alt="AI Revolution - Tech Landing Page" />
                </a>
                
              </div>
              <h2>AI Revolution - Tech Landing Page</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShowcaseSection