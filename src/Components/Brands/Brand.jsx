import React, { useRef } from 'react'
import { useDraggable } from "react-use-draggable-scroll";
import './Brand.css'
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';

function BrandSection() {
    const ref = useRef(); // We will use React useRef hook to reference the wrapping div:
    const { events } = useDraggable(ref); // Now we pass the reference to the useDra
    const brand_list = [
        './images/brands/1.png',
        './images/brands/2.png',
        './images/brands/3.png',
        './images/brands/4.png',
        './images/brands/5.jpg',
        './images/brands/5.png',
        './images/brands/6.jpg',
        './images/brands/6.png',
        './images/brands/7.png',
        './images/brands/7.jpg',
        './images/brands/8.jpg',
    ]

    return (
        <section className='brand_section'>
            <h4 className='title'><MilitaryTechIcon className='medal-icon' /> محبوب ترین برندها <MilitaryTechIcon className='medal-icon' /> </h4>
            <div
                className="flex max-w-xl space-x-3 overflow-x-scroll scrollbar-hide brand-container"
                {...events}
                ref={ref} // add reference and events to the wrapping div
            >
                {brand_list.map(brand => <img key={brand} src={brand} alt="brand" className='brand'/>)}
            </div>

            {/* <div className="brand-container">
                {brand_list.map(brand => <img key={brand} src={brand} alt="brand" className='brand'/>)}
            </div> */}
        </section>
    )
}

export default BrandSection