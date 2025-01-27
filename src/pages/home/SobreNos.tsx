// import imgSede from '../../assets/images/sede.jpg';
// import imgUm from '../../assets/images/redondo1.png';
// import imgDois from '../../assets/images/rafa-jump.jpg';
// import imgTres from '../../assets/images/img21.jpg';

// export default function SobreNos({ handleSaibaMaisClick }) { 
//     return (
//                     //  ABOUT Section 
//             <div className="w-full m-auto flex items-center justify-cetner px-2 py-20 bg-gray-200 ">
//                 <div className="w-full h-full flex flex-col justify-center items-center sm:px-4 px-2">
//                     {/* <!--  --> */}
//                     <div className="lg:w-[90%] w-full mx-auto flex flex-col lg:gap-6 lg:flex-row items-center justify-center ">
//                         <div className="relative">
//                             {/* <!-- Side Img 1 --> */}
//                             <img className="absolute z-20 lg:left-[2rem] -top-4 left-[1rem] lg:w-[8rem] lg:h-[8rem] sm:w-[6rem] sm:h-[6rem] w-[3rem] h-[3rem] rounded-full" 
//                             src={imgUm} alt="Side Image" />

//                             {/* <!-- Side Img 2 --> */}
//                             <img className="absolute z-20 lg:top-[12rem] sm:top-[11rem] top-[5rem] sm:-left-[3rem] -left-[2rem] lg:w-[8rem] lg:h-[8rem] sm:w-[6rem] sm:h-[6rem] w-[3rem] h-[3rem] rounded-full" 
//                             src={imgDois} alt="Side Image 2" />

//                             {/* <!-- Side Img 3 --> */}
//                             <img className="absolute z-20 lg:top-[23rem] sm:top-[20.5rem] top-[10.5rem] left-[2rem] lg:w-[8rem] lg:h-[8rem] sm:w-[6rem] sm:h-[6rem] w-[3rem] h-[3rem] rounded-full" 
//                             src={imgTres} alt="Side Image 3" />

//                             {/* <!-- Main Img --> */}
//                             <img
//                         className="rounded-full relative object-cover right-0 lg:w-[30rem] lg:h-[30rem] sm:w-[25rem] sm:h-[25rem] 
//                         w-[12rem] h-[12rem] outline sm:outline-offset-[.77em] outline-offset-[.37em] outline-vermelho"
//                         src={imgSede} alt="About us" />
//                         </div>
//                         {/* <!--  --> */}
//                         <div
//                             className="lg:w-[60%] p-4 w-full h-full bg-white shadow-xl shadow-vermelho-sm flex flex-col justify-center items-center sm:px-6 px-4 rounded-xl">
//                             <h2 className="text-4xl text-center text-vermelho font-bold px-4 py-1 md:mt-0 mt-10">
//                                 Quem Somos
//                             </h2>
//                             <p className="md:text-3xl text-2xl text-center text-gray-800 font-bold my-5">CEEC Benaias: Educação, Esporte e Cultura
//                             </p>
//                             <p className="md:text-xl sm:text-lg text-base mt-2 text-justify sm:px-2 dark:text-gray-900">
//                                 O CEEC Benaias, fundado em 2022, é resultado do trabalho dedicado do Professor Rafael, que uniu sua experiência na capoeira e sua formação em Educação Física para criar a metodologia "Brincando que se Aprende".
//                             </p>

//                             <p className="md:text-xl sm:text-lg text-base mt-2 text-justify sm:px-2 dark:text-gray-900"> 
//                             O centro promove inclusão e desenvolvimento físico, cognitivo e social por meio de atividades lúdicas e dinâmicas. Com foco na transformação de vidas, atende crianças, adultos e idosos, integrando esporte, educação e cultura em um ambiente acolhedor e inovador.
//                             </p>

//                             {/* <!-- button --> */}
//                             <button onClick={handleSaibaMaisClick} className="bg-vermelho text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
//                                         Saiba Mais
//                                     </button>

//                         </div>

//                     </div>
//                 </div>
//             </div>
//     );
// }




import imgSede from '../../assets/images/sede.jpg';
import imgUm from '../../assets/images/redondo1.png';
import imgDois from '../../assets/images/rafa-jump.jpg';
import imgTres from '../../assets/images/img21.jpg';

interface SobreNosProps {
    handleSaibaMaisClick: () => void;
}

export default function SobreNos({ handleSaibaMaisClick }: SobreNosProps) { 
    return (
        //  ABOUT Section 
        <div className="box-quem-somos w-full m-auto flex items-center justify-center px-2 py-20 bg-gray-200 ">
            <div className="w-full h-full flex flex-col justify-center items-center sm:px-4 px-2 ">
                {/* <!--  --> */}
                <div className="lg:w-[90%] w-full mx-auto flex flex-col lg:gap-6 lg:flex-row items-center justify-center ">
                    <div className="relative">
                        {/* <!-- Side Img 1 --> */}
                        <img className="absolute z-20 lg:left-[2rem] -top-4 left-[1rem] lg:w-[8rem] lg:h-[8rem] sm:w-[6rem] sm:h-[6rem] w-[3rem] h-[3rem] rounded-full" 
                        src={imgUm} alt="Side Image" />

                        {/* <!-- Side Img 2 --> */}
                        <img className="absolute z-20 lg:top-[12rem] sm:top-[11rem] top-[5rem] sm:-left-[3rem] -left-[2rem] lg:w-[8rem] lg:h-[8rem] sm:w-[6rem] sm:h-[6rem] w-[3rem] h-[3rem] rounded-full" 
                        src={imgDois} alt="Side Image 2" />

                        {/* <!-- Side Img 3 --> */}
                        <img className="absolute z-20 lg:top-[23rem] sm:top-[20.5rem] top-[10.5rem] left-[2rem] lg:w-[8rem] lg:h-[8rem] sm:w-[6rem] sm:h-[6rem] w-[3rem] h-[3rem] rounded-full" 
                        src={imgTres} alt="Side Image 3" />

                        {/* <!-- Main Img --> */}
                        <img
                    className="rounded-full relative object-cover right-0 lg:w-[30rem] lg:h-[30rem] sm:w-[25rem] sm:h-[25rem] 
                    w-[12rem] h-[12rem] outline sm:outline-offset-[.77em] outline-offset-[.37em] outline-vermelho"
                    src={imgSede} alt="About us" />
                    </div>
                    {/* <!--  --> */}
                    <div
                        className="baner-quem-somos lg:w-[60%] p-4 w-full h-full bg-white shadow-xl shadow-vermelho-sm flex flex-col justify-center items-center sm:px-6 px-4 rounded-xl">
                        <h2 className="text-4xl text-center text-vermelho font-bold px-4 py-1 md:mt-0 mt-10">
                            Quem Somos
                        </h2>
                        <p className="md:text-3xl text-2xl text-center text-gray-800 font-bold my-5">CEEC Benaias: Educação, Esporte e Cultura
                        </p>
                        <p className="md:text-xl sm:text-lg text-base mt-2 text-justify sm:px-2 dark:text-gray-900">
                            O CEEC Benaias, fundado em 2022, é resultado do trabalho dedicado do Professor Rafael, que uniu sua experiência na capoeira e sua formação em Educação Física para criar a metodologia "Brincando que se Aprende".
                        </p>

                        <p className="md:text-xl sm:text-lg text-base mt-2 text-justify sm:px-2 dark:text-gray-900"> 
                        O centro promove inclusão e desenvolvimento físico, cognitivo e social por meio de atividades lúdicas e dinâmicas. Com foco na transformação de vidas, atende crianças, adultos e idosos, integrando esporte, educação e cultura em um ambiente acolhedor e inovador.
                        </p>

                        {/* <!-- button --> */}
                        <button onClick={handleSaibaMaisClick} className="mt-6 bg-vermelho text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
                            Saiba Mais
                        </button>

                    </div>

                </div>
            </div>
        </div>
    );
}