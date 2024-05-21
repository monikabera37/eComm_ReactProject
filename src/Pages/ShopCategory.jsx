import React, { useContext } from 'react'
import "./CSS/ShopCategory.css"
import { ShopContext } from '../Context/ShopContext'
import Item from '../Components/Items/Item'

import dropdown_icon from "../Components/Assets/dropdown_icon.png"

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext)
  return (
    <div className='shop_category'>

      <img src={props.banner} alt="" className='shop_category_banner' />
      <div className="shop_category_indexSort">
        <p>
          <span>Showing 1-12</span>out of 36 products
        </p>
        <div className="shop_category_sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shop_category_products">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return <Item
              keys={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price} />
          }else{
            return null
          }
        })}
      </div>
      <div className="shop_category_loadmore">
        Explore More
      </div>
    </div>
  )
}

export default ShopCategory
