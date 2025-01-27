import imgHero from '../../assets/images/logo-2.jpg';

export default function Hero() {
  
    return (
            <section className=" max-w-screen-xl mx-auto py-8 px-4 lg:py-16 lg:px-6">
                    <div className="">
                    {/* flex gap-6 justify-center items-center  */}
                        <div className="hero">
                        <img className="rounded-full w-2/4  md:w-3/12 md:h-3/12 self-center m-auto" src={imgHero} alt="logo ceec benaias "/>
                            <div className="space-y-8 ">
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <h1 className="text-1xl  font-bold tracking-tight  sm:text-4xl md:text-5xl">
                                            <p>ACOLHEMOS COM AMOR</p> 
                                            <p>INSPIRAMOS COM TREINO</p>    
                                            <p> EMPODERAMOS COM CONHECIMENTO </p> 
                                            <p>SOMOS UMA FAMILIA PARA TREINAR</p> 
                                            <p>SOMOS TODOS BENAIAS</p> 
                                                        
                                                {/* <span
                                                    className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-600">StellarGlo
                                                </span> */}
                
                                        </h1>
                                    </div>

                                        <p className="text-base text-justify  sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                                        A Benaías é uma empresa de esportes que tem a inclusão como sua principal bandeira. 
                                        Promovemos transformação por meio do esporte, criando oportunidades para todos participarem e se sentirem valorizados.
                                        </p>

                               </div>
                                   
                            </div>
                        </div>
                    </div>
                
                
            
            </section>
    )
}