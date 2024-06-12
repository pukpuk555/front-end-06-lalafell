export function HeroComponent() {
  return (
    <div className="carousel flex lg:w-[1024px] lg:h-[419px] rounded rounded-lg m-auto mt-[120px] mb-5">
      <div
        id="slide1"
        className="carousel-item relative w-full flex justify-center"
      >
        <img
          src="/image.png"
          className="object-cover object-center w-full opacity-60"
        />
        <div className="absolute flex mt-[100px]">
          <h1 className="text-5xl text-white font-bold">Lalafell Keyboard</h1>
        </div>
        <div className="absolute flex px-[200px] mt-[180px] text-center">
            <p className="text-xl text-white">พบกับประสบการณ์การพิมพ์เหนือชั้นด้วยคีย์บอร์ดคุณภาพสูงจาก<br /> Lalafel Keyboard ที่ออกแบบมาเพื่อความสะดวกสบายและประสิทธิภาพสูงสุด ตอบโจทย์ทุกความต้องการไม่ว่าจะเป็นการทำงานหรือการเล่นเกม</p>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle shadow-lg">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle shadow-lg">
            ❯
          </a>
        </div>
        <div></div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="/AI_Generated_Image_2024-06-11_455785615023201.png"
          className="object-cover object-center w-full opacity-80"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="/AI_Generated_Image_2024-06-11_455785591020201.png"
          className="w-full object-cover object-center opacity-80"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img
          src="/AI_Generated_Image_2024-06-11_455785591010201.png"
          className="w-full object-cover object-center opacity-80"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle ">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
}
