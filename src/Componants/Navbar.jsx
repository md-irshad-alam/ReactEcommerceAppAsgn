import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const data = useSelector(state => state.products.product)
    console.log(data)
  return (
    <div style={{position:'absolute', background:'blue', top:0, width:'100%', padding:'5px' }}>
          <nav>
              <ul style={{ width:"80%", margin:'auto', display:'flex', justifyContent:'space-between', textDecoration:'none',listStyle:'none', color:'white', padding:'10px' }}>
                  <li><Link href="#home" style={{color:'white', textDecoration:'none', fontSize:'22px'}}>Home</Link></li>
                 
                  <li><Link to='/cart' style={{ color: 'white', textDecoration: 'none', fontSize: '22px' }}>Cart <span style={{color:'red'}}>{data.length}</span></Link></li>
              </ul>
    
      </nav>
    </div>
  )
}

export default Navbar
