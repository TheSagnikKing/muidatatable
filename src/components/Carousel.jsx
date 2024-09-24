
import React, { useState } from 'react';

const Carousel = () => {
    const [carouselarr, setCarouselarr] = useState([
        {
            id: 1,
            img: "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8="
        },
        {
            id: 2,
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUPIfiGgUML8G3ZqsNLHfaCnZK3I5g4tJabQ&s",
        },
        {
            id: 3,
            img: "https://i.pinimg.com/736x/31/46/49/3146494054a879448f2701e6954774a3.jpg"
        }
    ]);

    const [currentIndex, setCurrentIndex] = useState(0);

    const changeimgHandler = (imgIndex) => {
        setCurrentIndex(imgIndex);
    };

    return (
        <main style={{ padding: '100px' }}>
            <div style={{
                width: '600px', // Set the fixed width for the carousel
                height: '400px',
                overflow: 'hidden', // Hide overflow to create the sliding effect
            }}>
                <div style={{
                    background:"red",
                    display: 'flex',
                    width: `${carouselarr.length * 100}%`, // Set the width based on the number of images
                    height: "400px",
                    transform: `translateX(-${currentIndex * 100 / carouselarr.length}%)`, // Translate the carousel to show the current image
                    transition: 'transform 0.5s ease-in-out', // Smooth transition
                }}>
                    {
                        carouselarr.map((item) => {
                            return (
                                <img
                                    src={item.img}
                                    key={item.id}
                                    alt=""
                                    style={{
                                        width: '600px', // Each image should take the full width of the carousel
                                        height: '100%',
                                        objectFit: 'cover',
                                    }}
                                />
                            );
                        })
                    }
                </div>
            </div>

            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginTop: '20px'
            }}>
                {
                    carouselarr.map((item, imgIndex) => {
                        return (
                            <button
                                key={item.id}
                                style={{
                                    width: '25px',
                                    height: '25px',
                                    backgroundColor: imgIndex === currentIndex ? 'black' : 'lightgray',
                                    border: 'none',
                                    borderRadius: '50%',
                                    cursor: 'pointer',
                                }}
                                onClick={() => changeimgHandler(imgIndex)}
                            />
                        );
                    })
                }
            </div>
        </main>
    );
};

export default Carousel;
