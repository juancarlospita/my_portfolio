import React from 'react';
// countup
import CountUp from 'react-countup';
// intersection observer hook
import { useInView } from 'react-intersection-observer';
// motion
import { motion } from 'framer-motion';
// variant
import {fadeIn} from '../variants'
import { DiCss3, DiHtml5, DiJavascript, DiReact } from 'react-icons/di';


const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section  id='about' className='section' ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center
        lg:gap-x-20 lg:gap-y-0 h-screen">
          {/* img */}
          <motion.div 
          variants={fadeIn('right', 0.3)} initial="hidden" 
          whileInView={'show'} viewport={{once: false, amount: 0.3}}
          className="flex-1 bg-about bg-contain bg-no-repeat h-[640px]
          mix-blend-lighten bg-top">
            
          </motion.div>
          {/* text */}
          <motion.div 
          variants={fadeIn('left', 0.5)} initial="hidden" 
          whileInView={'show'} viewport={{once: false, amount: 0.3}}
          className="flex-1">
            <h2 className='h2 text-accent'>Acerca de mi</h2>
            <h3 className='h3 mb-4'>
            Soy Desarrollador Front-end Junior en busca de mi primera oportunidad laboral en el área de desarrollo.
            </h3>
            <p className='mb-6 text-[20px]'>Apasionado por crear experiencias web intuitivas y dinámicas. Manejo tecnologías como React, 
              HTML5, CSS3, Tailwind y Bootstrap para desarrollar interfaces modernas y responsivas.
            </p>
            {/* stats */}
            <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
              <div>
                <div className="flex-1 flex justify-center items-center mb-6 me-5">
                  <DiHtml5 className='w-20 h-20 gradient rounded-[10px]'/>
                </div>
                <div className='text-[40px] font-tertiary text-white mb-2'>
                  { inView ? <CountUp start={0} end={100} duration={3}/> : null }%
                </div>
              </div>
              <div>
              <div className="flex-1 flex justify-center items-center mb-6 me-5">
                  <DiCss3 className='w-20 h-20 gradient rounded-[10px]'/>
                </div>
                <div className='text-[40px] font-tertiary text-white mb-2'>
                  { inView ? <CountUp start={0} end={70} duration={3}/> : null }%
                </div>
              </div>
              <div>
              <div className="flex-1 flex justify-center items-center mb-6 me-5">
                  <DiJavascript className='w-20 h-20 gradient rounded-[10px]'/>
                </div>
                <div className='text-[40px] font-tertiary text-white mb-2'>
                  { inView ? <CountUp start={0} end={60} duration={3}/> : null }%
                </div>
              </div>
              <div>
              <div className="flex-1 flex justify-center items-center mb-6 me-5 ">
                  <DiReact className='w-20 h-20 gradient rounded-[10px]'/>
                </div>
                <div className='text-[40px] font-tertiary text-white mb-2'>
                  { inView ? <CountUp start={0} end={70} duration={3}/> : null }%
                </div>
              </div>
            </div>
            <div className='flex gap-x-8 items-center'>
              <a href="#contact">
              <button className='btn btn-lg'>Contactame</button>
              </a>
              <a href="#work" className="text-gradient btn-link">
                Mi Portafolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
