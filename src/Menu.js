import React from 'react'
import './Menu.css'
import MenuHeader from './MenuHeader'
import MenuList from './MenuList'
import MenuItem from './MenuItem'
import menuList from './menuList.json'

function Menu() {
  return (
    <div className='menu'>
      <MenuHeader />
      <div className='menu__container'>
        <div className='menu__left'>
          <MenuList />
        </div>
        <div className='menu__right'>
          <h1>Menu</h1>
          <div className='menu__category'>
            <h2>Drinks</h2>
            <div className='menu__items'>
              {menuList.map((menuListCategory) =>
                menuListCategory.drinks.map(({ type, path, image }) => (
                  <MenuItem type={type} image={image} />
                ))
              )}
            </div>
          </div>

          <div className='menu__category'>
            <h2>Food</h2>
            <div className='menu__items'>
              {menuList.map((menuListCategory) =>
                menuListCategory.food.map(({ type, path, image }) => (
                  <MenuItem type={type} image={image} />
                ))
              )}
            </div>
          </div>

          <div className='menu__category'>
            <h2>At Home Coffee</h2>
            <div className='menu__items'>
              {menuList.map((menuListCategory) =>
                menuListCategory.atHomeCoffee.map(({ type, path, image }) => (
                  <MenuItem type={type} image={image} />
                ))
              )}
            </div>
          </div>

          <div className='menu__category'>
            <h2>Merchandise</h2>
            <div className='menu__items'>
              {menuList.map((menuListCategory) =>
                menuListCategory.merchandise.map(({ type, path, image }) => (
                  <MenuItem type={type} image={image} />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu
