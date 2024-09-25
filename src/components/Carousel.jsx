import React, { useState, useRef, useEffect } from 'react';
import Card from './Card';

const Carousel = ({ title, movies }) => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [maxScroll, setMaxScroll] = useState(0);
    const carouselRef = useRef(null);
    const cardWidth = 256 + 16; // Card width + margin

    useEffect(() => {
        if (carouselRef.current) {
            const maxScrollPosition = carouselRef.current.scrollWidth - carouselRef.current.clientWidth;
            setMaxScroll(maxScrollPosition);
        }
    }, [movies]);

    const handleScroll = (direction) => {
        const newPosition = scrollPosition + (direction * cardWidth);
        setScrollPosition(Math.max(0, Math.min(newPosition, maxScroll)));
        carouselRef.current.scrollTo({
            left: newPosition,
            behavior: 'smooth'
        });
    };

    const ArrowButton = ({ direction, onClick, disabled }) => (
        <button
            className={`absolute top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full focus:outline-none hover:bg-opacity-75 transition z-10 ${disabled ? 'opacity-50 cursor-not-allowed' : 'opacity-100 cursor-pointer'} ${direction === 'left' ? 'left-2' : 'right-2'}`}
            onClick={onClick}
            disabled={disabled}
        >
            {direction === 'left' ? '❮' : '❯'}
        </button>
    );

    return (
        <section className="my-12 px-4 relative">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">{title}</h2>
            <div className="relative">
                <ArrowButton
                    direction="left"
                    onClick={() => handleScroll(-1)}
                    disabled={scrollPosition === 0}
                />
                <div
                    className="overflow-hidden"
                    ref={carouselRef}
                >
                    <div 
                        className="flex space-x-4 transition-transform duration-300 ease-out"
                        style={{ transform: `translateX(-${scrollPosition}px)` }}
                    >
                        {movies.map((movie) => (
                            <div className="flex-none w-64" key={movie.id}>
                                <Card movie={movie} />
                            </div>
                        ))}
                    </div>
                </div>
                {scrollPosition < maxScroll && (
                    <ArrowButton
                        direction="right"
                        onClick={() => handleScroll(1)}
                        disabled={scrollPosition >= maxScroll}
                    />
                )}
            </div>
        </section>
    );
};

export default Carousel;