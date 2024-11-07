import React from 'react';
// icons
import { BsArrowUpRight } from 'react-icons/bs'
// motion
import { motion } from 'framer-motion'
// variants
import { fadeIn } from '../variants'

// services data
const services = [
  {
    name: "Desarrollo Front-End",
    description: "Me especializo en el desarrollo de interfaces de usuario utilizando HTML, CSS y JavaScript, creando sitios web y aplicaciones que ofrecen una experiencia atractiva y funcional.",
  link:'Learn more'
  },
  {
    name: "Optimización de Código",
        description: "Enfocado en escribir código limpio, optimizado y escalable para garantizar un rendimiento eficiente y facilitar futuros desarrollos o mantenimientos.",
  link:'Learn more'
  },
  {
    name: "Integración de APIs",
    description: "Experiencia en la integración de APIs RESTful para conectar el front end con servicios externos y brindar funcionalidades enriquecidas en aplicaciones web.",
  link:'Learn more'
  },
  {
    name: "Responsive Design",
    description: "Adaptación de sitios y aplicaciones web para asegurar que se vean y funcionen correctamente en dispositivos móviles, tablets y escritorios.",
  link:'Learn more'
  },
]

const Services = () => {
  return (
  <section className='section' id='services'>
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row">
        {/* text & image */}
        <motion.div 
        variants={fadeIn('right', 0.3)} 
        initial="hidden" 
        whileInView={'show'} 
        viewport={{once: false, amount: 0.3}}
        className=" flex-1 lg:bg-services lg:bg-bottom bg-no-repeat 
        mix-blend-lighten mb-12 lg:mb-0"
        >
          <h2 className="h2 text-accent mb-6">¿Que hago?</h2>
          <h3 className="h3 max-w-[455px] mb-16">
          Desarrollador Front-End Junior, creo interfaces web atractivas y funcionales.
          </h3>
          <button className="btn btn-sm">Ver mi trabajo</button>
        </motion.div>
        {/* services */}
        <motion.div 
        variants={fadeIn('left', 0.5)} 
        initial="hidden" 
        whileInView={'show'} 
        viewport={{once: false, amount: 0.3}}
        className="flex-1"
        >
          {/* service list */}
          <div className="">
            {services.map((service,index) => {

              const { name, description, link} = service;

              return(
                <div className=" border-b border-white/20 h-[146px] mb-[38px] 
                flex" 
                key={index}
                >
                  <div className=" max-w-[476px]">
                    <h4 className=" text-[20px] tracking-wider font-primary font-semibold
                    mb-6"
                    >
                      {name}
                    </h4>
                    <p className=" font-secondary leading-tight">
                      {description}
                    </p>
                  </div>
                  <div className="flex flex-col flex-1 items-end">
                    <a href="#" className="btn w-9 h-9 mb-[42px] flex justify-center
                    items-center"
                    >
                      <BsArrowUpRight />
                    </a>
                    <a href="#" className="text-gradient text-sm">
                      {link}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
)};

export default Services;

