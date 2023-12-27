import React, {useState} from 'react'
import Product from '../components/Product'
import Display from '../components/Display'

function Home() {

    const [products, setProducts] = useState([])
  return (
    <div>
    <Product products={products} setProducts={setProducts} />
    <Display products={products} setProducts={setProducts} />
    </div>
  )
}

export default Home;