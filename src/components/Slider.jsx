import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import React, { useState, useEffect } from 'react';

function TestimonialSlider() {
    const [activeSlide, setActiveSlide] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setActiveSlide((prevSlide) => (prevSlide === 4 ? 0 : prevSlide + 1));
        }, 2000); // Change slide every 5 seconds

        return () => clearInterval(intervalId);
    }, []);

    const handleNextSlide = () => {
        setActiveSlide((prevSlide) => (prevSlide === 4 ? 0 : prevSlide + 1));
    };

    const handlePrevSlide = () => {
        setActiveSlide((prevSlide) => (prevSlide === 0 ? 4 : prevSlide - 1));
    };

    return (
        <div style={{overflowX:"hidden"}}>
            <div className="d-flex justify-content-center align-items-center mt-5 ">
                <ArrowBackIosIcon onClick={handlePrevSlide} />
                <h2>What Our Clients Say About Us</h2>
                <ArrowForwardIosIcon onClick={handleNextSlide} />
            </div>
            <div className="row overflow-x-hidden ">
            <div className='overflow-hidden'>

          
                <div className="d-flex justify-content-center align-items-center ">
                    {[0,1,2,3,4,5,6,7,8,9,10].map((index) => (
                        <div
                            key={index}
                            style={{
                                flex: '0 0 33.33%',
                                transform: `translateX(-${( activeSlide*100)}%)`,
                                transition: 'transform 0.5s ease',
                            }}
                        >
                            <TestimonialSlide />
                        </div>
                    ))}
                            </div>
                </div>
            </div>
        </div>
    );
}

function TestimonialSlide() {
    return (
        <div style={{ backgroundColor: '#FCD89C', width: '270px', height: '290px', marginTop: '30px', borderRadius: '22% 38% 22% 53% / 21% 27% 19% 57%', marginBottom: '55px' }}>
            <div style={{ backgroundColor: '#fff', width: '330px', height: '330px', marginTop: '30px', borderRadius: '22% 38% 22% 53% / 21% 27% 19% 57%', marginBottom: '5px', marginLeft: '10px', boxShadow: 'rgba(0, 0, 0, 0.15) 0px 5px 15px 0px' }}>
                <div className="text-center">
                    <img src="images/57.jpg" alt="" width="82px" height="82px" style={{ marginTop: '-20px' }} />
                    <h6>Ahsan Ali</h6>
                    <p>Father, 6th Grade Student</p>
                    <p className="text-center">I have been a customer for a couple<br /> of years now and the experience has<br /> been very gratifying. When I have<br /> asked for support it has always been<br /> pro... I have been a<br /> customer for a couple of <br /> years now and the.</p>
                </div>
            </div>
        </div>
    );
}

export default TestimonialSlider;
