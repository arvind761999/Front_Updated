import React from "react";
import backgroundImg from "../../assets/TrainImages/Kandy-to-Ell-by-train.jpg"

const BookTrainAd = ()=>{

    return(
        <div className='bg-[#DEEFFF] flex p-20 items-center flex-col lg:flex-row mx-auto justify-center'>
        <div className='w-[300px] lg:w-[600px]'>
            <img src={backgroundImg} alt='rentCarAdImg' />
        </div>
        <div className='pl-12'>
            <h1 className='text-3xl lg:text-5xl font-bold '>Do you want to</h1>
            <h1 className='text-4xl lg:text-6xl font-bold text-red-500   py-3'>Book Train Tickets?</h1>
            <form> 
                <button className='bg-red-500 text-white px-8 font-bold rounded-lg p-2 mt-6 shadow-lg hover:bg-red-700 '>Register</button>
            </form>
            
        </div>
    </div>
    )
}


export default BookTrainAd;