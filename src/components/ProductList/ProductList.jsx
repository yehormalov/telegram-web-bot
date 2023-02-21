import React from "react";
import { useTelegram } from "../../hooks/useTelegram";
import { useState } from "react";
import ProductItem from "../ProductItem/ProductItem"
import '../ProductList/ProductList.css'

const products = [
  {id: '1', title: 'Джинсы', price: 1000, description: 'Синие'},
  {id: '2', title: 'Куртка', price: 1000, description: 'Белая'},
  {id: '3', title: 'Рубашка', price: 1000, description: 'Красная'},
  {id: '4', title: 'Шарф', price: 1000, description: 'Черный'},
  {id: '5', title: 'Штаны', price: 1000, description: 'Черные'},
  {id: '6', title: 'Шапка', price: 1000, description: 'Красная'},
  {id: '7', title: 'Перчатки', price: 1000, description: 'Черные'}
]

const ProductList = () => {
  const [addedItems, setAddedItems] = useState([]);
  const {tg} = useTelegram

  const onAdd = (product) => {
    const alreadyAdded = addedItems.find(item => item.id === product.id);
    let newItems = [];

    if (alreadyAdded) {
      newItems = addedItems.filter(item => item.id !== product.id)
    } else {
      newItems = [...addedItems, product]
    }

    setAddedItems(newItems)

    if (newItems.length === 0) {
      tg.MainButton.hide()
    } else {
      tg.MainButton.show()
      tg.MainButton.setParams({
        text: `Купить (${newItems.length})`
      })
    }
  }

  return (
    <div className="list">
      {products.map(item => (
        <ProductItem 
          product={item}
          onAdd={onAdd}
          className={'item'}
        />
      ))}
    </div>
  )
}

export default ProductList