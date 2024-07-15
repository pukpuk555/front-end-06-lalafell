import React from "react";

const OurProductSection = () => {
    return (

        <div className="md:w-[1024px] w-screen md:mx-auto scroll-smooth mb-10 flex flex-cols items-center">
            <section className="m-auto mx-5 lg:mx-0 w-screen ">
                <h3 className="text-2xl md:text-3xl font-bold my-5">Our Products</h3>
                <div className="md:flex lg:flex justify-center mx-auto container">
                    <div className="grid gap-5 md:grid-cols-3 md:max-w-[900px]">
                        <div className="md:mb-0 ease-in col-span-1 md:col-span-2 relative">
                            <a href="/productlist">
                                <img
                                    className="w-full h-[150px] rounded-lg md:h-[400px] lg:h-[600px] md:mb-4 md:object-center object-cover lg:duration-300 lg:transform lg:hover:scale-105"
                                    src="./public/our-product keyboart.png"
                                    alt="keyboard"
                                />
                            </a>
                            <div className="absolute inset-0 flex flex-col justify-center items-center text-gray-200 bg-black/40 md:hidden">
                                <h3 className="text-xl font-semibold">Keyboard</h3>
                                <p className="text-m">Our customer Keyboard For you!</p>
                            </div>
                            <div className="hidden md:block">
                                <h3 className="text-xl font-bold">Keyboard</h3>
                                <p className="text-m">Our customer Keyboard For you!</p>
                            </div>
                        </div>
                        <div className="grid gap-5 grid-cols-1 w-full">
                            <div className="relative h-[150px]">
                                <a href="/productlist">
                                    <img
                                        className="w-full h-full rounded-lg md:h-[150px] lg:h-[250px] lg:mb-4 object-left object-cover lg:duration-300 lg:transform lg:hover:scale-105"
                                        src="./public/our-product keycap.png"
                                        alt="keycap"
                                    />
                                </a>
                                <div className="absolute inset-0 flex flex-col justify-center items-center text-gray-200 bg-black/40 md:hidden">
                                    <h3 className="text-xl font-semibold">Keycap</h3>
                                    <p className="text-m">
                                        Your Keyboard is too plain? Try this.
                                    </p>
                                </div>
                                <div className="hidden md:block">
                                    <h3 className="text-xl font-bold">Keycap</h3>
                                    <p className="text-m">
                                        Your Keyboard is too plain? Try this.
                                    </p>
                                </div>
                            </div>

                            <div className="relative h-[150px]">
                                <a href="/productlist">
                                    <img
                                        className="w-full h-full rounded-lg md:h-[150px] lg:h-[250px] lg:mb-4 object-left object-cover duration-300 transform hover:scale-105"
                                        src="./public/our-product switch.png"
                                        alt="switch"
                                    />
                                </a>
                                <div className="absolute inset-0 flex flex-col justify-center items-center text-gray-200 bg-black/40 md:hidden">
                                    <h3 className="text-xl font-semibold">Switch</h3>
                                    <p className="text-m">For better feeling!</p>
                                </div>
                                <div className="hidden md:block">
                                    <h3 className="text-xl font-bold">Switch</h3>
                                    <p className="text-m">For better feeling!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </div >
    );
};

export default OurProductSection;
