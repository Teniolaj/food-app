import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className="container pt-6">
        <div className="flex justify-between items-center px-6">
            <Image src="/logo.png" width={50} height={50} alt='logo' />
            <ul className="md:flex hidden gap-8 font-semibold text-[14px] items-center">
                <li>Home</li>
                <li>About</li>
                <li>Food</li>
                <li>Dish</li>
                <li>Contact</li>

                <button className="rounded-3xl bg-accent text-white px-4 py-2">Signup</button>

            </ul>
        </div>
    </div>
  )
}

export default Navbar