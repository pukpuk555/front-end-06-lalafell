import React, { useEffect, useState } from "react";

function HeroComponent() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = 4; // Number of carousel items
  const intervalTime = 3000; // Time in milliseconds for each slide

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
    }, intervalTime);

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [totalItems]);

  const handleButtonClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative">
      <div className="carousel-container relative lg:w-[1024px] lg:h-[419px] rounded-xl m-auto mt-[120px] mb-5 bg-black overflow-hidden">
        <div
          className="carousel flex transition-transform duration-1000"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          <div
            id="1"
            className="carousel-item relative flex justify-center w-full min-w-full"
          >
            <img
              src="/image.png"
              className="object-cover object-center w-full opacity-60"
            />
            <div className="absolute top-[100px]">
              <h1 className="text-5xl text-white font-bold">
                Lalafell Keyboard
              </h1>
            </div>
            <div className="absolute px-[200px] top-[180px] text-center">
              <p className="text-xl text-white">
                พบกับประสบการณ์การพิมพ์เหนือชั้นด้วยคีย์บอร์ดคุณภาพสูงจาก
                <br /> Lalafel Keyboard
                ที่ออกแบบมาเพื่อความสะดวกสบายและประสิทธิภาพสูงสุด
                ตอบโจทย์ทุกความต้องการไม่ว่าจะเป็นการทำงานหรือการเล่นเกม
              </p>
            </div>
          </div>
          <div
            id="2"
            className="carousel-item relative flex justify-center w-full min-w-full"
          >
            <img
              src="/AI_Generated_Image_2024-06-11_455785615023201.png"
              className="object-cover object-center w-full opacity-80"
            />
          </div>
          <div
            id="3"
            className="carousel-item relative flex justify-center w-full min-w-full"
          >
            <img
              src="/AI_Generated_Image_2024-06-11_455785591020201.png"
              className="w-full object-cover object-center opacity-80"
            />
          </div>
          <div
            id="4"
            className="carousel-item relative flex justify-center w-full min-w-full"
          >
            <img
              src="/AI_Generated_Image_2024-06-11_455785591010201.png"
              className="w-full object-cover object-center opacity-80"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full pb-2 gap-2 absolute bottom-5 left-1/2 transform -translate-x-1/2">
        <button
          onClick={() => handleButtonClick(0)}
          className={`btn btn-xs ${currentIndex === 0 ? "btn-active" : ""}`}
        >
          1
        </button>
        <button
          onClick={() => handleButtonClick(1)}
          className={`btn btn-xs ${currentIndex === 1 ? "btn-active" : ""}`}
        >
          2
        </button>
        <button
          onClick={() => handleButtonClick(2)}
          className={`btn btn-xs ${currentIndex === 2 ? "btn-active" : ""}`}
        >
          3
        </button>
        <button
          onClick={() => handleButtonClick(3)}
          className={`btn btn-xs ${currentIndex === 3 ? "btn-active" : ""}`}
        >
          4
        </button>
      </div>
    </div>
  );
}

export default HeroComponent;