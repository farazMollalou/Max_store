import React from 'react'
import CategoryItem from './Category_item'
import './Category_section.css'

function CategorySection() {

    const categories = [
        {address: 'https://google.com', num: 1, text: 'اسباب بازی و سرگرمی'},
        {address: 'https://google.com', num: 2, text: 'کتاب و لوازم التحریر'},
        {address: 'https://google.com', num: 3, text: 'صنایع دستی'},
        {address: 'https://google.com', num: 4, text: 'کالاهای سوپرمارکتی'},
        {address: 'https://google.com', num: 5, text: 'موبایل'},
        {address: 'https://google.com', num: 6, text: 'خانه و آشپزخانه'},
        {address: 'https://google.com', num: 7, text: 'ورزش و سلامتی'}
    ]

    return (
        <section className='category_container_section'>
            <h5 className='title'>دستــه بنــدی اجـنــاس</h5>
            <div className="category_items_container">
                { categories.map(item => <CategoryItem key={item.num} item_num={item.num} address={item.address} text={item.text}/>) }
                {/* <CategoryItem address='https://google.com' item_num={1} text='اسباب بازی و سرگرمی' />
                <CategoryItem address='https://google.com' item_num={2} text='اسباب بازی و سرگرمی' /> */}
            </div>
        </section>
    )
}

export default CategorySection