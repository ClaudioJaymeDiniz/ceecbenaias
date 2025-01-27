import { useState } from 'react';
import Hero from "../../components/hero/Hero";
import imgIde from '../../assets/images/ide.jpg';
import SobreNos from "./SobreNos";
import MaisInfo from "./MaisInfo";

export default function Home() {
    const [showMaisInfo, setShowMaisInfo] = useState(false);

    const handleSaibaMaisClick = () => {
        setShowMaisInfo(!showMaisInfo);
    };

    return (
        <>
            <Hero />
            <SobreNos handleSaibaMaisClick={handleSaibaMaisClick} />
            {showMaisInfo && <MaisInfo />}
            <div className="">
                <section className="max-w-screen-xl mx-auto py-8 px-4 lg:py-16 lg:px-6">
                    <div className="text-center md:mb-10">
                        <h2 className="text-4xl tracking-tight text-vermelho font-bold text-primary-800">CEEC Benaias: Transformando Vidas com Movimento e Cuidado</h2>
                    </div>
                    <div className="mr-0 md:mr-8 mb-6 md:mb-0">
                        <img className="rounded-full w-1/3 md:w-3/12 md:h-3/12 ml-auto mr-auto mt-6 mb-6" src={imgIde} alt="can_help_banner" />
                    </div>

                    <div className="flex flex-col md:flex-row">
                        <div className="flex-1 flex flex-col sm:flex-row flex-wrap -mb-4 -mx-2">
                            <div className="w-full sm:w-1/2 mb-4 px-2 ">
                                <div className="h-full py-4 px-6 border border-vermelho shadow-vermelho-sm border-t-0 border-l-0 rounded-br-xl">
                                    <h3 className="text-1xl md:text-2xl font-bold text-md mb-6">Transformando Vidas com Movimento e Cuidado</h3>
                                    <p className="text-1xl text-justify">O CEEC Benaias é muito mais do que um centro de atividades; somos um lugar de transformação e cuidado, especialmente para aqueles que enfrentam desafios como o autismo, a síndrome de Todd, entre outros. Nossa missão é acolher e desenvolver pessoas de todas as idades, oferecendo um ambiente que combina capoeira, esportes e a poderosa abordagem da psicomotricidade como ferramentas para promover crescimento, autonomia e bem-estar.</p>
                                </div>
                            </div>
                            <div className="w-full sm:w-1/2 mb-4 px-2 ">
                                <div className="h-full py-4 px-6 border border-vermelho shadow-vermelho-sm border-t-0 border-l-0 rounded-br-xl">
                                    <h3 className="text-2xl font-bold text-md mb-6">Metodologia que Transforma</h3>
                                    <p className="text-1xl text-justify">Nosso trabalho é guiado por uma metodologia única que une a ludicidade dos movimentos à ciência do corpo e da mente. Através da psicomotricidade, desenvolvemos habilidades motoras, cognitivas e emocionais, ajudando nossos alunos a superar barreiras e descobrir novas possibilidades. Seja na roda de capoeira, no jogo ou nas atividades físicas adaptadas, cada movimento é um passo em direção à evolução.</p>
                                </div>
                            </div>
                            <div className="w-full sm:w-1/2 mb-4 px-2 ">
                                <div className="h-full py-4 px-6 border border-vermelho shadow-vermelho-sm border-t-0 border-l-0 rounded-br-xl">
                                    <h3 className="text-2xl font-bold text-md mb-6">Inclusão e Acessibilidade</h3>
                                    <p className="text-1xl text-justify"> No CEEC Benaias, acreditamos que todos têm potencial para superar limites. Cada programa é adaptado para atender às necessidades individuais de nossos alunos, respeitando suas particularidades e celebrando suas conquistas. Nosso compromisso é criar um espaço onde cada pessoa se sinta valorizada, acolhida e capaz de brilhar.</p>
                                </div>
                            </div>

                            <div className="w-full sm:w-1/2 mb-4 px-2 ">
                                <div className="h-full py-4 px-6 border border-vermelho shadow-vermelho-sm border-t-0 border-l-0 rounded-br-xl">
                                    <h3 className="text-2xl font-bold text-md mb-6">Venha Transformar Vidas Conosco!</h3>
                                    <p className="text-1xl text-justify">No CEEC Benaias, cuidamos de cada aluno com dedicação e carinho, acreditando que a transformação começa com a oportunidade certa. Somos um lugar onde movimento é sinônimo de vida e onde cada aula é um convite para descobrir o seu melhor.</p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}


// import Hero from "../../components/hero/Hero";
// import imgIde from '../../assets/images/ide.jpg';
// import SobreNos from "./SobreNos";
// import MaisInfo from "./MaisInfo";


// export default function Home() {
    
//     return (
//         <>
//         <Hero />
//         <SobreNos />
//         <MaisInfo />
//         <div className="">
//         <section className="max-w-screen-xl mx-auto py-8 px-4 lg:py-16 lg:px-6">
//             <div className="text-center md:mb-10">
//                 <h2 className="text-4xl tracking-tight text-vermelho font-bold text-primary-800">CEEC Benaias: Transformando Vidas com Movimento e Cuidado</h2>
//             </div>
//             <div className="mr-0 md:mr-8 mb-6 md:mb-0">
//                     <img className="rounded-full w-1/3  md:w-3/12 md:h-3/12  ml-auto mr-auto mt-6 mb-6 " src={imgIde} alt="can_help_banner"/>
//                 </div>

//             <div className="flex flex-col md:flex-row">
                
                
//                 <div className="flex-1 flex flex-col sm:flex-row flex-wrap -mb-4 -mx-2">
//                     <div className="w-full sm:w-1/2 mb-4 px-2 ">
//                         <div className="h-full py-4 px-6 border border-vermelho shadow-vermelho-sm border-t-0 border-l-0 rounded-br-xl">
//                             <h3 className="text-1xl md:text-2xl font-bold text-md mb-6">Transformando Vidas com Movimento e Cuidado</h3>
//                             <p className="text-1xl text-justify">O CEEC Benaias é muito mais do que um centro de atividades; somos um lugar de transformação e cuidado, especialmente para aqueles que enfrentam desafios como o autismo, a síndrome de Todd, entre outros. Nossa missão é acolher e desenvolver pessoas de todas as idades, oferecendo um ambiente que combina capoeira, esportes e a poderosa abordagem da psicomotricidade como ferramentas para promover crescimento, autonomia e bem-estar.</p>
//                         </div>
//                     </div>
//                     <div className="w-full sm:w-1/2 mb-4 px-2 ">
//                         <div className="h-full py-4 px-6 border border-vermelho shadow-vermelho-sm border-t-0 border-l-0 rounded-br-xl">
//                             <h3 className="text-2xl font-bold text-md mb-6">Metodologia que Transforma</h3>
//                             <p className="text-1xl text-justify">Nosso trabalho é guiado por uma metodologia única que une a ludicidade dos movimentos à ciência do corpo e da mente. Através da psicomotricidade, desenvolvemos habilidades motoras, cognitivas e emocionais, ajudando nossos alunos a superar barreiras e descobrir novas possibilidades. Seja na roda de capoeira, no jogo ou nas atividades físicas adaptadas, cada movimento é um passo em direção à evolução.</p>
//                         </div>
//                     </div>
//                     <div className="w-full sm:w-1/2 mb-4 px-2 ">
//                         <div className="h-full py-4 px-6 border border-vermelho shadow-vermelho-sm border-t-0 border-l-0 rounded-br-xl">
//                             <h3 className="text-2xl font-bold text-md mb-6">Inclusão e Acessibilidade</h3>
//                             <p className="text-1xl text-justify"> No CEEC Benaias, acreditamos que todos têm potencial para superar limites. Cada programa é adaptado para atender às necessidades individuais de nossos alunos, respeitando suas particularidades e celebrando suas conquistas. Nosso compromisso é criar um espaço onde cada pessoa se sinta valorizada, acolhida e capaz de brilhar.</p>
//                         </div>
//                     </div>

//                     <div className="w-full sm:w-1/2 mb-4 px-2 ">
//                         <div className="h-full py-4 px-6 border border-vermelho shadow-vermelho-sm border-t-0 border-l-0 rounded-br-xl">
//                             <h3 className="text-2xl font-bold text-md mb-6">Venha Transformar Vidas Conosco!</h3>
//                             <p className="text-1xl text-justify">No CEEC Benaias, cuidamos de cada aluno com dedicação e carinho, acreditando que a transformação começa com a oportunidade certa. Somos um lugar onde movimento é sinônimo de vida e onde cada aula é um convite para descobrir o seu melhor.</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//         </div>
        
//         </>
//     )
// }