import React, { use } from 'react';
import { useState } from 'react';
import Card from './Card/Card'
import Selected from '../SelectedCard/Selected';
const Player = ({ PlayersData }) => {
    const Player = use(PlayersData)
    const [SelectedType, setSelectedType] = useState("Available")
    return (
        <>
            <div className="max-w-345 mx-auto">

                <div className="mt-20 mb-8 flex justify-between items-center">
                    {
                        SelectedType == "Available" ? <h2 className='font-bold text-3xl'>Available Players</h2> : <h2 className='font-bold text-3xl'>Selected Player ({""})</h2 >
                    }
                    <div className=" text-black">
                        <button onClick={() => setSelectedType("Available")} className={`btn shadow-none outline-none border-none rounded-l-xl ${SelectedType === "Available" ? "bg-[#E7FE29]" : "bg-base-200"}`}>Available</button>
                        <button onClick={() => setSelectedType("Selected")} className={`btn shadow-none outline-none border-none rounded-r-xl ${SelectedType === "Selected" ? "bg-[#E7FE29]" : "bg-base-200"}`}>Selected ({0})</button>
                    </div>
                </div>
                {/* card */}
                {(SelectedType == "Selected") ?
                    <>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 items-center gap-6  justify-between">
                            <Selected></Selected>
                        </div>
                    </>
                    :
                    <>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 items-center gap-6  justify-between">
                            {
                                Player.map((value, index) => <Card key={index} value={value}></Card>)
                            }
                        </div>
                    </>
                }
            </div>
        </>
    );
};
export default Player;

