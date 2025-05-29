import image13 from '../assets/tablericon.png'
import image14 from '../assets/cust.png'
import image15 from '../assets/chris.png'
import image16 from '../assets/magi.png'
import image17 from '../assets/gael.png'
import image18 from '../assets/jenna.png'


import image22 from '../assets/chat.png'
import image23 from '../assets/star.png'
import image24 from '../assets/pen.png'

import image26 from '../assets/dots.png'

const Customers = () => {
  return (
    <div className="flex flex-col w-full h-[400px] rounded-[16px]  p-6   bg-white">
        <div className="w-full flex justify-between  px-4 py-3">
        <p className="font-inter font-semibold text-[20px] leading-[100%] tracking-[-0.2px] text-[#131313]">
  Customers
</p>
<div className='flex flex-row items-center'>
<p className="font-inter text-[14px] leading-[100%] tracking-[-0.3px] m-1">
  <span className="font-normal">Sort by </span>
  <span className="font-medium">Newest</span>
</p>
<img 
  src={image14}
  alt="icon" 
  className="w-[7px] h-[3.5px]"
/>
</div>
</div>

<div className='flex flex-col mb-7'>
    <div className='flex flex-row items-center  px-4 py-3'>
    <img 
  src={image15}
  alt="profile" 
  className="w-[32px] h-[32px] rounded-[24px] mr-3" 
/>
<div className='flex flex-col '>
<p className="font-inter font-medium text-[14px] leading-[100%] tracking-[-0.3px] text-[#131313] mb-1 mt-1">
  Chris Friedkly
</p>
<p className="font-inter font-normal text-[12px] leading-[100%] tracking-[-0.3px] text-[#454545]">
  Supermarket Villanova
</p>
</div>
</div>

<div className="flex flex-row items-center  w-full justify-between rounded-[16px]  bg-[#FFF7E8] px-4 py-3">
<div className='flex flex-row items-center'>
    <img 
  src={image16}
  alt="profile" 
  className="w-[32px] h-[32px] rounded-[24px] mr-3" 
/>
<div className='flex flex-col '>
<p className="font-inter font-medium text-[14px] leading-[100%] tracking-[-0.3px] text-[#131313] mb-1 mt-1">
Maggie Johnson
</p>
<p className="font-inter font-normal text-[12px] leading-[100%] tracking-[-0.3px] text-[#454545]">
Oasis Organic Inc.
</p>
</div>
</div>


<div className='flex flex-row items-center space-x-5'>
<img
  src={image22}
  alt="icon"
  className="w-[12.01px] h-[10.68px]"
/>
<img
  src={image23}
  alt="icon"
  className="w-[13px] h-[12px]"
/>
<img
  src={image24}
  alt="icon"
  className="w-[10px] h-[10px]"
/>
<div className="h-px w-[18px] rotate-[-90deg] opacity-20 border border-[#734A00]"></div>



<img
  src={image26}
  alt="icon"
  className="w-[3px] h-[10px]"
/>



</div>
 
</div>





<div className='flex flex-row items-center  px-4 py-3'>
    <img 
  src={image17}
  alt="profile" 
  className="w-[32px] h-[32px] rounded-[24px] mr-3" 
/>
<div className='flex flex-col '>
<p className="font-inter font-medium text-[14px] leading-[100%] tracking-[-0.3px] text-[#131313] mb-1 mt-1">
Gael Harry
</p>
<p className="font-inter font-normal text-[12px] leading-[100%] tracking-[-0.3px] text-[#454545]">
New York Finest Fruits
</p>
</div>
</div>

<div className='flex flex-row items-center px-4 py-3'>
    <img 
  src={image18}
  alt="profile" 
  className="w-[32px] h-[32px] rounded-[24px] mr-3" 
/>
<div className='flex flex-col '>
<p className="font-inter font-medium text-[14px] leading-[100%] tracking-[-0.3px] text-[#131313] mb-1 mt-1">
Jenna Sullivan
</p>
<p className="font-inter font-normal text-[12px] leading-[100%] tracking-[-0.3px] text-[#454545]">
Walmart
</p>
</div>
</div>
</div>


<div className='flex flex-row items-center px-4 py-3'>
<p className="font-inter font-normal text-[14px] leading-[100%] tracking-[-0.3px] text-[var(--Dark-Orange,#734A00)] mr-2">
All customers
</p>
<img
  src={image13}
  alt="icon"
  className="w-[8px] h-[4px]"
/>


</div>


   
  </div>
  
  )
}

export default Customers