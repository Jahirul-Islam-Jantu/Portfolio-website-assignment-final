import { useEffect, useState } from 'react';

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = 4; // Total number of slides

    // Function to move to the next slide
    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    };

    // Function to move to the previous slide
    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
    };

    // Automatically change slides every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3000); // Adjust the interval as needed (3000ms = 3 seconds)
        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);

    return (
        <div className="carousel w-full relative overflow-hidden ">
            {/* Slide Container */}
            <div
                className="flex transition-transform duration-700"
                style={{
                    transform: `translateX(-${currentSlide * 100}%)`,
                    width: `${totalSlides * 100}%`,
                }}
            >
                {/* Slide 1 */}
                <div className="carousel-item relative w-full flex-shrink-0">
                    <img src="/img1.jpg" className="w-screen h-screen" alt="Slide 1" />
                    <div className="absolute flex flex-col justify-center items-center w-full h-full bg-opacity-50 bg-gray-800 text-white">
                        <h1 className="text-4xl font-bold">Hello!</h1>
                        <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, qui.</p>
                    </div>
                </div>
                {/* Slide 2 */}
                <div className="carousel-item relative w-full flex-shrink-0">
                    <img src="/img2.jpg" className="w-screen h-screen" alt="Slide 2" />
                    <div className="absolute flex flex-col justify-center items-center w-full h-full bg-opacity-50 bg-gray-800 text-white">
                        <h1 className="text-4xl font-bold">Hello! 2</h1>
                        <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, qui.</p>
                    </div>
                </div>
                {/* Slide 3 */}
                <div className="carousel-item relative w-full flex-shrink-0">
                    <img src="/img3.jpg" className="w-screen h-screen" alt="Slide 3" />
                    <div className="absolute flex flex-col justify-center items-center w-full h-full bg-opacity-50 bg-gray-800 text-white">
                        <h1 className="text-4xl font-bold">Hello! 3</h1>
                        <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, qui.</p>
                    </div>
                </div>
                {/* Slide 4 */}
                <div className="carousel-item relative w-full flex-shrink-0">
                    <img src="/img4.jpg" className="w-screen h-screen" alt="Slide 4" />
                    <div className="absolute flex flex-col justify-center items-center w-full h-full bg-opacity-50 bg-gray-800 text-white">
                        <h1 className="text-4xl font-bold">Hello! 4</h1>
                        <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, qui.</p>
                    </div>
                </div>
            </div>

            {/* Navigation Buttons */}
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <button onClick={prevSlide} className="btn btn-circle">❮</button>
                <button onClick={nextSlide} className="btn btn-circle">❯</button>
            </div>
        </div>
    );
};

export default Slider;
