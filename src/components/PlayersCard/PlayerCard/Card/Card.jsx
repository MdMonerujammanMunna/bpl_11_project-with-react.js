import React from 'react';
// Icon add on react-icons
import { IoPersonCircleOutline } from "react-icons/io5";
import { GrFlagFill } from "react-icons/gr";
const Card = ({ value }) => {
    return (
        <>
            <div className="card bg-base-100 shadow-sm mt-8">
                <figure>
                    <img
                        src={value.PlayerImage}
                        alt="Shoes"
                        className='w-full' />
                </figure>
                <div className="card-body">
                    <h2 className="card-title font-semibold text-[20px]"><IoPersonCircleOutline className='w-[28px] h-[28px] mb-4' />{value.PlayerName}</h2>

                    <div className="flex justify-between items-center">
                        <p className='flex gap-3 text-[#13131350] items-center font-bold'><GrFlagFill className='w-[20px] h-[20px]' /> {value.PlayerCountry}</p>
                        <button class="btn btn-ghost font-semibold text-[14px]">{value.PlayerType}</button>
                    </div>
                    <hr className="my-4 border-[#13131330] border-[1.5px]"></hr>

                    <div className="flex items-center gap-1 font-bold mb-4">
                        <h3>Rating </h3>
                        <span>({value.Rating})</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <h3 className='font-semibold'>{value.PlayerType === 'Batsman' ? 'Batting Style' : 'Bowling Style'}</h3>
                        <span className='text-[#13131370]'>{value.PlayerType === 'Batsman' ? value.BattingStyle : value.BowlingStyle}</span>
                    </div>
                    <div className="card-actions flex items-center justify-between gap-1 mt-3">
                        <h2 className='font-semibold'>Price:- {value.Price}</h2>
                        <button className="btn btn-ghorst font-normal">Choose Player</button>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Card;