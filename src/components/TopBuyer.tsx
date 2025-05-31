import image16 from '../assets/magi.png'

const TopBuyer = () => {
  return (
    <div className="flex flex-col h-[128px] w-full rounded-[16px] p-4 m-2  bg-white">
    <p className="font-inter font-semibold text-[16px] leading-[100%] tracking-[-0.4px] text-[#7D7D7D] mb-4">
    Top buyer
  </p>
  <div className='flex flex-col'>
  <img 
  src={image16}
  alt="profile" 
  className="w-[32px] h-[32px] rounded-[24px] mr-3" 
/>
<div className='flex flex-col '>
<p className="font-inter font-medium text-[14px] leading-[100%] tracking-[-0.3px] text-[#131313] mb-1 mt-1 whitespace-nowrap">
Maggie Johnson
</p>
<p className="font-inter font-normal text-[12px] leading-[100%] tracking-[-0.3px] text-[#454545] whitespace-nowrap">
Oasis Organic Inc.
</p>
</div>
 

  
  
  
  </div>
  
    </div>
  )
}

export default TopBuyer