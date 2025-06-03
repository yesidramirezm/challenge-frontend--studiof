import React from 'react'
import useProduct from 'vtex.product-context/useProduct'
const VitrinaCustom = () => {
 const {product} = useProduct()
 console.log(product,"data")

  return (
    <div>
      ref
    </div>
  )
}

export default VitrinaCustom
