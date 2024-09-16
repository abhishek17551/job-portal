import React from 'react'
import { Link } from 'react-router-dom'
//import { Button } from './ui/button'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'

const Header = () => {
  return (
    <div>
        <nav className="py-4 flex justify-between items-center">
            <Link> 
                <img src='/logo-dark.jpeg' className='h-28 bg-white ' alt="Logo"/>
            </Link>

            <div className="flex gap-8">
            
            <Button variant="outline" >
              Login
            </Button>


        
            </div>
        </nav>
    </div>
  )
}

export default Header