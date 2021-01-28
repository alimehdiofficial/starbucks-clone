import React from 'react'
import { Link } from 'react-router-dom'
import './MenuList.css'
import menuList from './menuList.json'

function MenuList() {
  return (
    <div className='menuList'>
      <div className='menuList__container'>
        <h4>Drinks</h4>
        <div className='menuList__items'>
          {menuList.map((menuListCategory) =>
            menuListCategory.drinks.map((menuListItem) => (
              <Link>{menuListItem.type}</Link>
            ))
          )}
        </div>
      </div>
      <div className='menuList__container'>
        <h4>Food</h4>
        <div className='menuList__items'>
          {menuList.map((menuListCategory) =>
            menuListCategory.food.map((menuListItem) => (
              <Link>{menuListItem.type}</Link>
            ))
          )}
        </div>
      </div>
      <div className='menuList__container'>
        <h4>At Home Coffee</h4>
        <div className='menuList__items'>
          {menuList.map((menuListCategory) =>
            menuListCategory.atHomeCoffee.map((menuListItem) => (
              <Link>{menuListItem.type}</Link>
            ))
          )}
        </div>
      </div>
      <div className='menuList__container'>
        <h4>Merchandise</h4>
        <div className='menuList__items'>
          {menuList.map((menuListCategory) =>
            menuListCategory.merchandise.map((menuListItem) => (
              <Link>{menuListItem.type}</Link>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default MenuList
