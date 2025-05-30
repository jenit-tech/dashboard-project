import image13 from '../assets/tablericon.png'
import image16 from '../assets/magi.png'
import image19 from '../assets/personone.png'
import image20 from '../assets/persontwo.png'
import image21 from '../assets/personthree.png'

const Chats = () => {
  return (
    <div className="flex flex-col justify-between w-full h-[256px] rounded-[16px] p-4 pb-6 m-2 bg-white">
      {/* Top Section */}
      <div>
        <div className="flex flex-col mb-4">
          <p className="font-inter font-semibold text-[20px] leading-[100%] tracking-[-0.2px] text-[#131313] mb-2">
            Chats
          </p>
          <p className="font-inter font-normal text-[14px] leading-[100%] tracking-[-0.3px] text-[#454545]">
            2 unread messages
          </p>
        </div>

        {/* Profile Images Row */}
        <div className='flex flex-row items-center'>
          {/* Wrap each image in a group for hover effect */}
          <div className="group w-[56px] h-[56px] rounded-[16px] p-[12px] transition-colors duration-300 hover:bg-[#FFF7E8] mr-2 cursor-pointer">
            <img 
              src={image16}
              alt="profile" 
              className="w-[32px] h-[32px] rounded-[24px]" 
            />
          </div>

          <div className="group w-[56px] h-[56px] rounded-[16px] p-[12px] transition-colors duration-300 hover:bg-[#FFF7E8] mr-2 cursor-pointer">
            <img 
              src={image19}
              alt="profile" 
              className="w-[32px] h-[32px] rounded-[24px]" 
            />
          </div>

          <div className="group w-[56px] h-[56px] rounded-[16px] p-[12px] transition-colors duration-300 hover:bg-[#FFF7E8] mr-2 cursor-pointer">
            <img 
              src={image20}
              alt="profile" 
              className="w-[32px] h-[32px] rounded-[24px]" 
            />
          </div>

          <div className="group w-[56px] h-[56px] rounded-[16px] p-[12px] transition-colors duration-300 hover:bg-[#FFF7E8] mr-2 cursor-pointer">
            <img 
              src={image21}
              alt="profile" 
              className="w-[32px] h-[32px] rounded-[24px]" 
            />
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className='flex flex-row items-center'>
        <p className="font-inter font-normal text-[14px] leading-[100%] tracking-[-0.3px] text-[var(--Dark-Orange,#734A00)] mr-2">
          All messages
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

export default Chats