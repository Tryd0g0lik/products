import React, { useState } from 'react';
import IconSwitch from './IconSwitch'
import ShopItem from './ShopItem'
import ShopCard from './ShopCard'
import ListView from './ListView'
import CardsView from './CardsView'


export default function Store(prop) {
  const [active, onActive] = useState('view_module');
  const { products } = prop;

  const handToggle = (currentState) => {
    currentState === 'view_list' ? (currentState = "view_module") : (currentState = "view_list")
    onActive(currentState)
  }

  console.log('ACTIVE: ', active)
  return (
    <div>
      <IconSwitch icon={active} onSwitch={handToggle} />
      {active !== 'view_list' ? <CardsView cards={<ShopCard products={products} />} /> :
        <ListView items={<ShopItem products={products} />} />
      }

    </div>
  )


}

