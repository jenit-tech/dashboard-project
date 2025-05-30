
import image12 from '../assets/green.png'
import image13 from '../assets/tablericon.png'

const Revenue = () => {
  return (
    <div className="w-full h-[261px] rounded-[16px]  gap-[8px] bg-[var(--White,#FFFFFF)] flex flex-col  p-6 m-2 pr-50">
 <p className="font-inter font-semibold text-[20px] leading-[100%] tracking-[-0.2px] text-[var(--Black,#131313)] mb-1">
  Revenues
</p>
<div className='mb-10'>
<div className='flex flex-row items-center my-3'>
<p className="font-inter font-medium text-[48px] leading-[100%] tracking-[-2px] text-[var(--Black,#131313)] mr-3">
  15%
</p>
<img
  src={image12}
  alt="icon"
  className="w-[13px] h-[13px] "
/>



</div>
<p className="font-inter font-normal text-[14px] leading-[100%] tracking-[-0.3px] text-[var(--Dark-Gray,#454545)] whitespace-nowrap">
  Increase compared to last week
</p>
</div>

<div className='flex flex-row items-center'>
<p className="font-inter font-normal text-[14px] leading-[100%] tracking-[-0.3px] text-[var(--Dark-Orange,#734A00)] mr-2">
  Revenues report
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

export default Revenue