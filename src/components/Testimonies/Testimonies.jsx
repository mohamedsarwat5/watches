import React from 'react';
import Space from '../Space/Space';
import Header from '../../Header/Header';
import TestSlider from '../Slider/Slider';

export default function Testimonies() {
    return (<>
        <Space />
        <div className='h-[450px] lg:h-fit w-full overflow-hidden bg-main lg:px-32 relative py-4'>
            <Header text={"Testimonies"} desc2={"Voices from those who chose timeless elegance."} desc={"Voices of timeless elegance"} />

            <h2 className='font-bold banner whitespace-nowrap text-center mx-auto uppercase text-[11vw] lg:text-[10vw] absolute lg:-top-10 top-0 left-1/2 -translate-x-1/2 '>Testimonies</h2>
            <div className='lg:mt-18 px-4 mt-8 lg:mb-12'>
                <TestSlider />
            </div>

        </div>
    </>);
}