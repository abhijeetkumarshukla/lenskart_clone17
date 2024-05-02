  
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Wishlist from '/src/Pages/wishlist/Wishlist.jsx' 
 
 
import Contact from  '/src/Pages/Contact Us/Contact Us.jsx'
import SignIn from '/src/Pages/login/SignIn.jsx' 
import SignUp1 from '/src/Pages/login/SignUp.jsx'
import Men from '/src/Pages/Products/Men.jsx'
import Women from '/src/Pages/Products/Women.jsx'
import Kid from '/src/Pages/Products/Kid.jsx'
 
import MenSunglassess from '/src/Pages/Products/SunGlassessProductPage/MenSunglassess.jsx'
import WomenSunglasses from '/src/Pages/Products/SunGlassessProductPage/WomenSunglass.jsx'
import EyeGlasses from '/src/Pages/Products/KidGlassess/EyeGlasses.jsx'
import MenProductDetails from '/src/Pages/productDetails/MenProductDetails.jsx'
import WomenProductDetails from '/src/Pages/productDetails/WomenProductDetails.jsx'
import KidProductDetails from '/src/Pages/productDetails/KidProductDetails.jsx'
import EyeGlassessproductDetails from '/src/Pages/productDetails/kIdGlassess/EyeGlassessproductDetails.jsx'
import MenSunGlassessProductDetails from '/src/Pages/productDetails/SunGlassess/MenSunGlassessproductDetails.jsx'
import MouniRoy from '/src/Pages/Products/MouniRoy.jsx'
import MouniRoyProductDetails from '/src/Pages/productDetails/MouniRoyProductDetails.jsx'
import Premiumproduct from '/src/Pages/Products/PremiumEyeGlassess.jsx'
import PremiumEyeGlassessDetails from '/src/Pages/productDetails/PremiumProductDetails.jsx'
import KaranJohar from '/src/Pages/Products/KaranJohar.jsx'
import KaranJoharProductDetails from '/src/Pages/productDetails/KaranJoharProductDetails.jsx'
import Home from '/src/Pages/Home.jsx'
import Cart from '/src/Pages/cart/Cart.jsx'
 
 
 
 

function App() {
   

  return (
    <>
      
        
       <Routes>
             <Route path='/' element={<Home/>}/>
             <Route path='/signin' element={<SignIn/>}/>
              <Route path='/signup' element={<SignUp1/>}/>
             <Route path='/cart' element={<Cart/> }/>
             <Route path='/wishlist' element={<Wishlist/>}/>
             <Route path='/contact' element={<Contact/>}/>
             <Route path='/menproduct' element={<Men/>}/>
             <Route path='/womenProduct' element={<Women/>}/>
             <Route path='/kidProduct' element={<Kid/>}/>
             <Route path='/mensunglassess' element={<MenSunglassess/>}/>
             <Route path='/womensunglassess' element={<WomenSunglasses/>}/>
             <Route path='/kidsunglassess' element={<EyeGlasses/>}/>
             <Route path='/mouniroyproduct' element={<MouniRoy/>}/>
             <Route path='/premiumproduct' element={<Premiumproduct/>}/>
             <Route path='/karanjoharproduct' element={<KaranJohar/>}/>
{/* -------------- */}
              <Route path='/menproduct/:id' element={<MenProductDetails/>}/> 
              <Route path='/womenproduct/:id' element={<WomenProductDetails/>}/> 
              <Route path='/kidproduct/:id' element={<KidProductDetails/>}/>
              <Route path='/kidsunglassessproduct/:id' element={<EyeGlassessproductDetails/>}/> 
              <Route path='/mensunglassessproduct/:id' element={<MenSunGlassessProductDetails/>}/>  
              <Route path='/mouniroyproduct/:id' element={<MouniRoyProductDetails/>}/>  
              <Route path='/premuimproduct/:id' element={<PremiumEyeGlassessDetails/>}/>
              <Route path='/karanjoharproduct/:id' element={<KaranJoharProductDetails/>}/>
              
       </Routes>
      
    </>
  )
}

export default App

