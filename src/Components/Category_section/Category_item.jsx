import React from 'react'

function CategoryItem(props) {
  return (
    <a href={props.address}>
        <img src={`./images/category_img/${props.item_num}.webp`} alt="category-item" />
        <span>{props.text}</span>
    </a>
  )
}

export default CategoryItem