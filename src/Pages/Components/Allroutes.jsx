import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NewArrivals from './NewArrival'
import Collection from './Collection'
import Men from './Men'
import Women from './Women'
import Footwear from './Footwear'
import Innerwear from './Innerwear'
import Kids from './Kids'
import Sale from './Sale'
import Home from './Home'
import Watchlist from '../Logo/Watchlist'
import Cart from '../Logo/Cart'
import Toggle from '../Logo/Toggle'
import Poloshirts from './Poloshirts'
import Jeans from './Jeans'
import Shirts from './Shirts'
import Tshirts from './Tshirts'

const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/newarrivals' element={<NewArrivals/>} />
        <Route path='/collections' element={<Collection/>} />
        <Route path='/men' element={<Men/>} />
        <Route path='/women' element={<Women/>} />
        <Route path='/footwear' element={<Footwear/>} />
        <Route path='/innerwear' element={<Innerwear/>} />
        <Route path='/kids' element={<Kids/>} />
        <Route path='/sale' element={<Sale/>} />
        <Route path='/watchlist' element={<Watchlist/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/loginpage' element={<Toggle/>}/>
        <Route path='/polo-shirts' element={<Poloshirts/>}/>
        <Route path='jeans' element={<Jeans/>}/>
        <Route path='/shirts' element={<Shirts/>}/>
        <Route path='/t-shirts' element={<Tshirts/>}/>
      </Routes>
    </div>
  )
}

export default Allroutes