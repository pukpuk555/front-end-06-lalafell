import React, { useState } from "react";

function HeroComponent() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalItems = 4;

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
    };

    return (
        <div className="mt-[120px] mb-5 mx-0 flex justify-center">
            <div className="carousel w-full max-w-[1024px] h-[200px] md:h-[300px] lg:h-[400px] mx-auto overflow-hidden relative rounded-lg">
                <div
                    className="carousel-inner flex transition-transform duration-1000"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    <div className="carousel-item relative w-full flex justify-center items-center">
                        <img src="public/hero-banner-1.png" className="object-cover w-full h-full" />
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                            <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold text-white">Lalafell Keyboard</h1>
                            <p className="text-lg md:text-xl lg:text-2xl my-4 text-white">Custom keyboard for anime fans</p>
                        </div>
                    </div>
                    <div className="carousel-item relative w-full flex justify-center items-center">
                        <img src="public/hero-banner-2.jpg" className="object-cover w-full h-full" />
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center max-w-full w-9/12">
                            <p className="text-sm md:text-lg lg:text-xl text-white bg-black/40 p-4 md:p-6 lg:p-8 md:leading-loose">
                                "พบกับประสบการณ์การพิมพ์เหนือชั้นด้วยคีย์บอร์ดคุณภาพสูงจาก Lalafell Keyboard 
                                ที่ออกแบบมาเพื่อความสะดวกสบายและประสิทธิภาพสูงสุด 
                                ตอบโจทย์ความต้องการไม่ว่าจะเป็นการทำงานหรือการเล่นเกม"
                            </p>
                        </div>
                    </div>
                    <div className="carousel-item relative w-full flex justify-center items-center">
                        <img src="public/hero-banner-3.jpg" className="object-cover w-full h-full" />
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-full w-9/12">
                            <div className="bg-black/40 p-4 md:p-6 lg:p-8">
                                <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-white">ทำไมต้อง Lalafell?</h2>
                                <ul className="list-disc text-sm md:text-lg lg:text-xl text-white py-2">
                                    <li className="md:py-1">เรามี Keyboart คุณภาพสูงจากแบรนด์ชั้นนำ</li>
                                    <li className="md:py-1">บริการหลังการขายที่ยอดเยี่ยม รับประกันความพึงพอใจ</li>
                                    <li className="md:py-1">ทีมงานผู้เชี่ยวชาญที่พร้อมให้คำแนะนำ</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item relative w-full flex justify-center items-center">
                        <img src="public/hero-banner-4.jpg" className="object-cover w-full h-full" />
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center max-w-full w-9/12">
                            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white bg-black/40 p-4 md:p-6 lg:p-8">บริการจัดส่งฟรีทั่วประเทศ</h1>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <button onClick={prevSlide} className="btn btn-circle">❮</button>
                    <button onClick={nextSlide} className="btn btn-circle">❯</button>
                </div>
            </div>
        </div>
    );
}

export default HeroComponent;
