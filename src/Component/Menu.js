import React from 'react'

const Menu = ({itemz}) => {
  return (
    <div>
        <div className='section-center'>
            {itemz.map((menuItems)=>{
                 const {id, title, price, desc, img}= menuItems
                return(
                    // <div className='menu'>
                    <article key={id} className="menu-item">
                    <img src={img} alt="" className='photo' />
                    <div className='item-info'>
                        <header>
                            <h4 className='title-1'>{title}</h4>
                            <h4 className='price'>$ {price}</h4>
                        </header>
                        <p className='item-text'>{desc}</p>
                    </div>
                    </article>
                    // </div>
                )

            })}
        </div>

    </div>
  )
}

export default Menu