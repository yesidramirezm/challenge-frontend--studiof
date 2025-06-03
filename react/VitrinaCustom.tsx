import React from 'react'
import useProduct from 'vtex.product-context/useProduct'
import { useOrderItems } from 'vtex.order-items/OrderItems';


interface Propagations {
  stopPropagation: () => void;
  preventDefault: () => void
}

const VitrinaCustom = () => {
  const { selectedItem: { complementName, itemId, sellers } } = useProduct()

  const { addItems } = useOrderItems();

  const addToCart = (e: Propagations) => {
    e.stopPropagation();
    e.preventDefault()

    const itemToAdd = [{
      id: itemId,
      quantity: 1,
      seller: sellers[0].sellerId
    }]

    addItems(itemToAdd);
  };

  return (
    <div >
      <button onClick={addToCart}>
        <p>{complementName}</p>

        <p>{itemId}</p>
      </button>
    </div>
  )
}

export default VitrinaCustom
