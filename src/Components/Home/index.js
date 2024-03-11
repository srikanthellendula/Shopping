import { useState, useEffect } from "react"
import ProductGrid from '../ProductGrid/index.js'
import './index.css'

const Home = () => {

    const [itemsList , setItemsList] = useState([])

    useEffect(()=>{
        const ProductsList = async () =>{
            const response = await fetch('https://fakestoreapi.com/products')
            const data = await response.json()
            setItemsList(data)
        }
        ProductsList()

    },[])
    return(
        <div className="home">
            <h1> Products List </h1>
            <div className="item-cont"> 
            {itemsList.map((eachItem) => <ProductGrid itemsList={eachItem} key={eachItem.id} />)}
            </div>
        </div>
    
    
    )
}

export default Home