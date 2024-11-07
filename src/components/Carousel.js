// import React, { useState } from 'react';
// // motion
// import { motion } from 'framer-motion';
// // img
// import Img1 from '../assets/portfolio-img1.png';
// import Img2 from '../assets/portfolio-img2.png';
// import Img3 from '../assets/portfolio-img3.png';

// // Lista de proyectos
// const projects = [
// {
//     image: Img1,
//     title: 'Proyecto 1',
//     description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. At ullam consequuntur dicta. Cupiditate veniam optio rem tenetur odit. Delectus, quia!',
// },
// {
//     image: Img2,
//     title: 'Proyecto 2',
//     description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. At ullam consequuntur dicta. Cupiditate veniam optio rem tenetur odit. Delectus, quia!',
// },
// {
//     image: Img3,
//     title: 'Proyecto 3',
//     description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. At ullam consequuntur dicta. Cupiditate veniam optio rem tenetur odit. Delectus, quia!',
// },
// ];

// const Carousel = () => {
// const [currentIndex, setCurrentIndex] = useState(0);

// const handlePrev = () => {
//     setCurrentIndex((prevIndex) =>
//     prevIndex === 0 ? projects.length - 1 : prevIndex - 1
//     );
// };

// const handleNext = () => {
//     setCurrentIndex((prevIndex) =>
//     prevIndex === projects.length - 1 ? 0 : prevIndex + 1
//     );
// };

// const { image, title, description } = projects[currentIndex];

// return (
//     <section className="section" id="carousel">
//     <div className="container mx-auto relative">
//         {/* Flecha Izquierda */}
//         <button
//         onClick={handlePrev}
//         className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 text-white bg-gray-800 rounded-full opacity-60 hover:opacity-90 transition-all duration-300 z-50"
//         style={{ width: '40px', height: '40px' }}
//         >
//         &#10094;
//         </button>
//         {/* Contenedor de Proyecto con Transición */}
//         <motion.div
//         key={currentIndex}
//         className="flex flex-col lg:flex-row items-start gap-x-10"
//         initial={{ opacity: 0, x: -50 }}
//         animate={{ opacity: 1, x: 0 }}
//         exit={{ opacity: 0, x: 50 }}
//         transition={{ duration: 0.5 }}
//         >
//         {/* Texto del Proyecto */}
//         <div>
//             <h2 className="h2 leading-tight text-accent mt-10">
//             {title.toUpperCase()}
//             </h2>
//             <p className="max-w-lg mb-12">{description}</p>
//         </div>

//         {/* Imagen del Proyecto */}
//         <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
//             {/* Overlay */}
//             <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
//             {/* Imagen */}
//             <img
//             className="group-hover:scale-125 transition-all duration-500"
//             src={image}
//             alt={title}
//             />
//         </div>
//         </motion.div>

//         {/* Flecha Derecha */}
//         <button
//         onClick={handleNext}
//         className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 text-white bg-gray-800 rounded-full opacity-60 hover:opacity-90 transition-all duration-300 z-50"
//         style={{ width: '40px', height: '40px' }}
//         >
//         &#10095;
//         </button>      </div>
//     </section>
// );
// };

// export default Carousel;
