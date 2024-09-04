import React, { useRef, useState } from 'react';
import './ProductCardEffect.css';
import ReactImageMagnify from 'react-image-magnify';
function ProductCardEffect() {
    const images = [
        "https://images-api.datayuge.in/image/dHI6dy0xNDAwLGgtMTQwMCxjLWF0X21heC81NzkxODctMTgxLTE.jpg",
        "https://images-api.datayuge.in/image/dHI6dy0xNDAwLGgtMTQwMCxjLWF0X21heC8yMjE5Ny02OC0x.jpg",
        "https://images-api.datayuge.in/image/dHI6dy0xNDAwLGgtMTQwMCxjLWF0X21heC8yMjE5Ny02OC0x.jpg",
        "https://images-api.datayuge.in/image/dHI6dy0xNDAwLGgtMTQwMCxjLWF0X21heC8yMjE5Ny02OC0x.jpg",
    ];
    const refs = useRef([]);
    const [img, setImg] = useState(images[0]);

    const hoverHandler = (image, i) => {
        setImg(image);

        for (let j = 0; j < refs.current.length; j++) {
            if (refs.current[j]) {
                if (i === j) {
                    refs.current[j].classList.add('active');
                } else {
                    refs.current[j].classList.remove('active');
                }
            }
        }
    }

    refs.current = [];
    const addRefs = (el) => {
        if (el && !refs.current.includes(el)) {
            refs.current.push(el);
        }
    }

    return (
        <div className='main-container'>
            <div className='l-container'>
                <div className='left'>
                    <div className='left_1'>
                        {images.map((image, i) => (
                            <div
                                className={i === 0 ? "img_wrap active" : "img_wrap"}  // Updated to use strict equality (===)
                                key={i}
                                onMouseOver={() => hoverHandler(image, i)}
                                ref={addRefs}
                            >
                                <img src={image} alt='' />
                            </div>
                        ))}
                    </div>
                    <div className='left_2'>
                    <ReactImageMagnify {...{
                        smallImage: {
                            alt: 'Wristwatch by Ted Baker London',
                            isFluidWidth: true,
                            src: img,
                            sizes: '(max-width: 480px) 100vw, (max-width: 1200px) 30vw, 360px'
                        },
                        largeImage: {
                            src: img,
                            width: 1200,
                            height: 1800
                        }
                    }} />
                    </div>
                </div>
                <div className='right'></div>
            </div>
        </div>
    );
}

export default ProductCardEffect;
