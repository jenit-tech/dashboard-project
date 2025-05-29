
import image1 from '../assets/Logomark.png'
import image2 from '../assets/dashboard.png'
import image3 from '../assets/customer.png'
import image4 from '../assets/reports.png'
import image5 from '../assets/geo.png'
import image6 from '../assets/Vector8.png'
import image7 from '../assets/Vector9.png'
import image8 from '../assets/Vector10.png'
import image10 from '../assets/Vector11.png'
import image11 from '../assets/Vector12.png'

import image9 from '../assets/man.png'




import { Search } from 'lucide-react';


const AppSidebar = () => {
  return (
    <div className="flex flex-col justify-between h-screen w-[280px]  min-w-[280px] max-w-[320px] rounded-[16px]  bg-[var(--White,_#FFFFFF)] p-5 ">

    <div className='flex flex-col'>
        <div className='flex flex-row mb-5'>
            <img src={image1} alt='logo'  className="w-[20px] h-[20px] mr-[6px]"/>
            <h2>OrangeFarm</h2>

        </div>


        <div className=''>
        <div className="flex items-center w-[240px] h-[40px] rounded-[20px] border border-[var(--Light-Gray,#F1F1F1)] bg-[var(--White,#FFFFFF)] px-[16px] py-[12px]">
      <Search className="w-4 h-4 text-gray-500 mr-2" />
      <input
        type="text"
        placeholder="Search"
        className="w-full bg-transparent outline-none text-sm"
      />
    </div>
    <div className=''>
        <div className='flex flex-row p-3 items-center my-2'>
        <img
  src={image2}
  alt="icon"
  className="w-[12px] h-[12px] mr-5"
/>
<p className="font-inter font-normal text-[14px] leading-[14px] tracking-[-0.25px]">
Dashboard 
</p>



        </div>


        <div className='flex flex-row p-3 items-center my-2'>
        <img
  src={image3}
  alt="icon"
  className="w-[10px] h-[10px] mr-5"
/>
<p className="font-inter font-normal text-[14px] leading-[14px] tracking-[-0.25px]">
  Customers
</p>



        </div>


        <div className='flex flex-row p-3 items-center my-2'>
        <img
  src={image4}
  alt="icon"
  className="w-[9px] h-[12px] mr-5"
/>
<p className="font-inter font-normal text-[14px] leading-[14px] tracking-[-0.25px]">
All reports
</p>



        </div>




        <div className='flex flex-row p-3 items-center my-2'>
        <img
  src={image5}
  alt="icon"
  className="w-[12px] h-[12px] mr-5"
/>
<p className="font-inter font-normal text-[14px] leading-[14px] tracking-[-0.25px]">
Geography
</p>



        </div>







        <div className='flex flex-row p-3 items-center my-2'>
        <img
  src={image6}
  alt="icon"
  className="w-[12px] h-[12px] mr-5"
/>
<p className="font-inter font-normal text-[14px] leading-[14px] tracking-[-0.25px]">
Conversations
</p>



        </div>



        <div className='flex flex-row p-3 items-center my-2'>
        <img
  src={image7}
  alt="icon"
  className="w-[12px] h-[11px] mr-5"
/>
<p className="font-inter font-normal text-[14px] leading-[14px] tracking-[-0.25px]">
Deals
</p>



        </div>



        <div className='flex flex-row p-3 items-center my-2'>
        <img
  src={image8}
  alt="icon"
  className="w-[12px] h-[12px] mr-5"
/>
<p className="font-inter font-normal text-[14px] leading-[14px] tracking-[-0.25px]">
Export
</p>



        </div>













    </div>

        </div>

    </div>













    <div className=''>
<div className='flex flex-row items-center'>
<img
  src={image9}
  alt="avatar"
  className="w-[32px] h-[32px] rounded-[24px] mr-3"
/>
<div>
<p className="font-inter font-medium text-[14px] leading-[100%] tracking-[-0.25px] mb-1">
  Gustavo Xavier
</p>
<div className="w-[40px] h-[16px] rounded-[24px] bg-[var(--Mid-Orange,#FFCD71)] px-[6px] flex items-center gap-[8px]">
<p className="font-inter font-normal text-[10px] leading-[16px] tracking-[-0.5px]">
  Admin
</p>

</div>

</div>

</div>

<div className='flex flex-row p-3 items-center my-2'>
        <img
  src={image10}
  alt="icon"
  className="w-[12px] h-[13px] mr-5"
/>
<p className="font-inter font-normal text-[14px] leading-[14px] tracking-[-0.25px]">
Settings
</p>
 </div>



 <div className='flex flex-row p-3 items-center my-2'>
        <img
  src={image11}
  alt="icon"
  className="w-[10px] h-[10px] mr-5"
/>
<p className="font-inter font-normal text-[14px] leading-[14px] tracking-[-0.25px]">
Log out
</p>



        </div>






    </div>

  </div>

  
  )
}

export default AppSidebar