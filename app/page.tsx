
import React from 'react'
import Header from './Components/Header'
import Image from 'next/image';

const Home = () => {
  return (
      <div className='h-screen'>
        <Header/>
    
    <section className='flex '>
        <section className='w-1/2 flex flex-col  item-start m-12 gap-5'>  
          <h1 className='text-[40px] w-[496px] '>IMPECCABLE CRAFTSMANSHIP AND FINESSE</h1>

    <section>
      
    <p className='h-[147px] w-[902px]  text-[#A29875]'>An example of intricate workmanship and detail,
       elegant <br/>necklaces and long and short
       chains form a part of our<br/> desirable collection.</p>
    <button className='h-[38px] w-[177px] m-4 rounded text-[20px] text-[#FFFFFF] p-10px' 
    style={{background:'rgb(162,152,117)'}}>Explore Now</button>
   
    </section>
    
</section>

    
    <div className='flex md:justify-center items-center h-screen 
'>
<Image 
src='/image/image.svg'
alt='Image'
width={350}
height={611}
/> </div>
  
  


    </section> 
    </div>
    )
    }
    export default Home