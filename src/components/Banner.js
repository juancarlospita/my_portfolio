import React from 'react';
import Image from '../assets/avatar.png'
import {FaGithub, FaLinkedin, FaInstagram} from 'react-icons/fa'
import {DiCss3, DiJavascript, DiHtml5, DiReact, DiBootstrap,DiPhotoshop, DiIllustrator, DiWordpress} from 'react-icons/di'
import {TypeAnimation} from 'react-type-animation'
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'

const Banner = () => {
  return (
    <section id='home' className='min-h-[85vh] lg:min-h-[72vh] flex items-center '>
      <div className="container mx-auto">
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
          {/* texto */}
          <div className='flex-1 text-center font-secondary lg:text-left'>
              <motion.h1 variants={fadeIn('up', 0.3)} initial="hidden" 
              whileInView={'show'} viewport={{once: false, amount: 0.7}}  className='text-[55px] font-bold leading-[0.8] lg:text-[82px]'>
                JUAN CARLOS <span>PITA</span>
              </motion.h1>
            <motion.div variants={fadeIn('up', 0.4)} initial="hidden" 
              whileInView={'show'} viewport={{once: false, amount: 0.7}}  className='mb-6 text-[36px] lg:text-[54px] font-secondary 
            font-semibold uppercase leading-[1]'>
              <span className='text-white mr-4'>Soy un</span> <br />
              <TypeAnimation sequence={[
                  'DESARROLLADOR FRONT END',
                  2000,
                  'DISEÑADOR GRAFICO',
                  2000
                ]}
                speed={50}
                className='text-accent'
                wrapper='span'
                repeat={Infinity}
              />
            </motion.div>
            <motion.p variants={fadeIn('up', 0.5)} initial="hidden" 
              whileInView={'show'} viewport={{once: false, amount: 0.7}}  className='mb-8 max-w-lg mx-auto lg:mx-0'> 
              Soy un desarrollador front end junior apasionado por la creación de experiencias de usuario visualmente atractivas y funcionales. 
              Busco mi primera oportunidad laboral en el campo del desarrollo web, 
              donde pueda aplicar mis conocimientos en HTML, CSS, JavaScript, y React. 
              Estoy listo para aprender, colaborar y crecer en un equipo que valore la creatividad
              y la innovación. 
            </motion.p>
                      {/* botones */}
          <motion.div variants={fadeIn('up', 0.6)} initial="hidden" 
              whileInView={'show'} viewport={{once: false, amount: 0.7}}  className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0 '>
            <a href="#contact">
            <button className="btn btn-lg">Contactame</button>
            </a>
            <a href="#work" className=' text-gradient btn-link '>Mi Portafolio</a>
          </motion.div>
          {/* redes sociales */}
          <motion.div variants={fadeIn('up', 0.7)} initial="hidden" 
              whileInView={'show'} viewport={{once: false, amount: 0.7}}  className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0">
            <a href="https://github.com/juancarlospita" className='w-20 h-20'>
              <FaGithub className='w-10 h-10'/>
            </a>
            <a href="https://linkedin.com/in/juan-carlos-pita-alves-110839280">
              <FaLinkedin className='w-10 h-10'/>
            </a>

          </motion.div>

          </div>
          {/* imagen */}
          <motion.div variants={fadeIn('down', 0.5)} initial="hidden" 
              whileInView={'show'}  className=' hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'>
            <img src={Image} alt="" />
          </motion.div>
        </div>
      </div>
    </section>
)};

export default Banner;
