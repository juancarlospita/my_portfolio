import React, { useRef } from 'react';
// motion
import {motion} from 'framer-motion'
// variants
import {fadeIn} from '../variants'
// service email
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4k2imtn', 'template_bfnugyn', form.current, '06GYDD2h310w3UbrR')
      .then((result) => {
        alert("Mensaje enviado exitosamente");
      }, (error) => {
        alert("Hubo un error al enviar el mensaje, intenta nuevamente.");
      });
  };

  return (
    <section className='py-16 lg:section' id='contact'>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div 
            variants={fadeIn('right', 0.3)} 
            initial="hidden" 
            whileInView={'show'} 
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex justify-start items-center">
            <div>
              <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>
                PONTE EN CONTACTO
              </h4>
              <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>
                ¡Trabajemos <br /> juntos!
              </h2>
            </div>
          </motion.div>
          
          <motion.form 
            ref={form}
            onSubmit={sendEmail}
            variants={fadeIn('left', 0.3)} 
            initial="hidden" 
            whileInView={'show'} 
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 border rounded-2x1 flex-col gap-y-6 pb-24 p-6 items-start"
          >
            <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' 
              type='text'
              placeholder='Tu nombre'
              name='your_name'
            />
            <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' 
              type='email'
              placeholder='Tu correo electronico'
              name='user_email'
            />
            <textarea className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12' 
              placeholder='Tu mensaje'
              name='message'
            />
            <button type='submit' className='btn btn-lg'>Enviar mensaje</button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;