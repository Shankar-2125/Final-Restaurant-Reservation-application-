import React from 'react'
import {data} from '../restApi.json'
const Menu = () => {
  return (
    
      <section className='menu' id='menu'>
        <div className="container">
            <div className="heading_section">
                <h1 className="heading">POPULAR DISHES</h1>
                <p>
                  At OM Restro our popular dishes are the talk of the town. From mouthwatering classics to innovative specialties, each plate is a culinary delight that keeps guests coming back for more. Indulge in our signature favorites, expertly prepared and bursting with flavor, ensuring an unforgettable dining experience that captures the essence of our establishment.
                </p>
            </div>
            <div className="dishes_container">
                {data[0].dishes.map(element => {
                    return (
                        <div className="card" key={element.id}>
                                <img src={element.image} alt={element.title} />
                                <h3>{element.title}</h3>
                                <button>{element.category}</button>
                        </div>
                    );
                })}   
            </div>
        </div>
      </section>
    
  )
}

export default Menu