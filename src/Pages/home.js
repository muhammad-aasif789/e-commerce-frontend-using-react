import React from 'react'
import AppBar from '../components/appBar'
import Crousel from '../components/crousel'
import Card from '../components/card'
import Footer from '../components/footer'
import Products from '../Products/products';
import './home.css'


function nCard(val){
    return(
        <Card 
        imagesrc={val.ProImage}
      price={val.ProPrice} 
      />  
    )
    }


class Home extends React.Component{
    render(){
        return(
            <div>
            <AppBar />
            <Crousel />
            <div className="AB">
            {Products.map(nCard)}
            </div>
            <Footer />
          </div>
        )
    }
}

export default Home