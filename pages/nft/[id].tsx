import React from 'react'
import { useAddress, useDisconnect, useMetamask } from "@thirdweb-dev/react";


function NFTDropPage() {
    const address = useAddress();
    const disconnect = useDisconnect();
    const metamask = useMetamask();

    
    
  return (
    <div className='flex  flex-col md:flex-row  '>
{/* left */}

<div className=' h-96 md:h-screen md:w-3/4 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400'>  

<h1>NFT</h1>
</div>
{/* right */}

<div className='w-screen h-40 p-2  '>
<header className='flex justify-between p-9 w-full items-center  md:w-full'>
<h1 className=' cursor-pointer w-52 text-3xl font-bold '>K4 NFT<span className='text-gray-400 text-2xl'>  market place</span> </h1>
<button onClick={()=>(address ? disconnect():metamask())} className='bg-black  text-gray-200  h-9 w-20 rounded-md shadow-xl'>{address?"Sign Out":"Sign In"}</button>
</header>
<hr className='my-2 border m-5'/>

{address && (
    <p className=' text-center font-extrabold text-gray-600'>You are logged in with wallet {address.substring(0,5)}...{address.substring(address.length-5)}</p>
)}
{/* content */}
<div className='flex item-center justify-center mt-10'>
    <img className='w-96'  src='https://links.papareact.com/bdy'/>
</div>

<h1 className='text-3xl font-semibold  text-center mt-6'>K4 Ape codding club | NFT drop</h1>

<p className='pt-2 text-green-400 font-medium text-center mt-11'> 13 / 21 NFT claimed</p>


{/* button */}
<button className='h-16 w-full bg-black rounded-xl shadow-2xl text-white text-xl font-bold mt-32  '>Mint NFT (0.01 ETH)</button>
</div>


    </div>
  )
}

export default NFTDropPage