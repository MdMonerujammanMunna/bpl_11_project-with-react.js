import React from 'react';
import BackGround from '../../assets/banner-main.png'
// import Back from ''
const HeroBanner = () => {
    return (
        <>
            <div
                className="hero max-w-[1380px] mx-auto px-[10rem] py-[4rem] mt-8 rounded-3xl"
                style={{
                    backgroundImage:
                        "url(https://i.ibb.co.com/chbj9D6h/Frame-8.png)",
                }}
            >
                <div className="hero-content text-neutral-content text-center">
                    <div className="flex flex-col items-center justify-center">
                        <img src={BackGround} alt="" className='max-w-[200px] mb-6' />
                        <h1 className='text-[2.5rem] font-bold mb-4'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
                        <p className='text-2xl font-medium mb-4 text-[#FFFFFF70]'>Beyond Boundaries Beyond Limits</p>
                        <div className="border-2 border-[#E7FE29] p-2 rounded-xl bg-[#FFFFFF05]">
                            <button className='bg-[#E7FE29] font-bold text-[#131313] px-[20px] py-[14px] rounded-xl'>Claim Free Credit</button></div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default HeroBanner;