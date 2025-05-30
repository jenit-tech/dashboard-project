import { useState } from 'react'
import { ChevronDown, ChevronLeft, ChevronUp, Search } from 'lucide-react'
import { ChevronRight } from 'lucide-react'

// Your image imports
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


interface AppSidebarProps {
  showIconsOnly: boolean;
  toggleIconsAndText: () => void;
}

const AppSidebar = ({ showIconsOnly, toggleIconsAndText }: AppSidebarProps) => {
  // Define width based on showIconsOnly
  const sidebarWidth = showIconsOnly ? 'w-[80px]' : 'w-[280px]'

  const [showList, setShowList] = useState(false);

  const toggleShowList = () => {
    setShowList(prev => !prev);
  };

  return (
    <div className={`flex flex-col justify-between  ${sidebarWidth} rounded-[16px] bg-[var(--White,#FFFFFF)] p-5 m-2 transition-all duration-300 fixed overflow-auto`}>
      
      {/* Header */}
      <div className='flex flex-col'>
        <div className='flex flex-row mb-5 items-center'>
          <img src={image1} alt='logo' className='w-[20px] h-[20px] mr-[6px]' />
          {!showIconsOnly && <h2>OrangeFarm</h2>}
        </div>

        {/* Search with toggle */}
        <div>
          {showIconsOnly ? (
            <Search className="w-4 h-4 text-gray-500 mr-2" />
          ) : (
            <div className="flex items-center w-[240px] h-[40px] rounded-[20px] border border-[var(--Light-Gray,#F1F1F1)] bg-[var(--White,#FFFFFF)] px-[16px] py-[12px]">
              <Search className="w-4 h-4 text-gray-500 mr-2" />
              <input
                type="text"
                placeholder="Search"
                className="w-full bg-transparent outline-none text-sm"
              />
            </div>
          )}
          {/* Button to toggle search icon/text */}
         
        </div>

        {/* Navigation Items */}
        <div className='mt-8 '>
          {/* Dashboard */}
          <div className='flex flex-row p-3 items-center my-2 hover:bg-[#FFF7E8] cursor-pointer rounded-[20px]'>
            <img src={image2} alt="icon" className="w-[12px] h-[12px] mr-5" />
            {!showIconsOnly && (
              <p className="font-inter font-normal text-[14px] leading-[14px] tracking-[-0.25px] hover:text-[#734A00]">
                Dashboard
              </p>
            )}
          </div>



          {/* Customers */}
          <div className='p-3 items-center my-2 hover:bg-[#FFF7E8] cursor-pointer rounded-[20px]'>

        
          <div
        className='flex flex-row  '
        onClick={toggleShowList}
      >
        <img src={image3} alt="icon" className="w-[10px] h-[10px] mr-5 hover:[filter:brightness(0)_saturate(100%)_invert(45%)_sepia(95%)_saturate(532%)_hue-rotate(360deg)]" />
        {!showIconsOnly && (
          <div className="w-full flex flex-row items-center justify-between">
            <p className="font-inter font-normal text-[14px] leading-[14px] tracking-[-0.25px] mb-1 hover:text-[#734A00]">
              Customers
            </p>
            {/* Assuming ChevronDown is an icon component */}
            {showList ? (
              <ChevronUp className="w-3 h-3 rounded" />
            ) : (
              <ChevronDown className="w-3 h-3 rounded" />
            )}
          </div>
        )}
        
      </div>
      {showList && (
        <div className='ml-4'>
          <p className="font-inter font-normal text-[14px] leading-[14px] tracking-[-0.25px] m-3 mb-4 hover:text-[#734A00]">
            Current
          </p>
          <p className="font-inter font-normal text-[14px] leading-[14px] tracking-[-0.25px] m-3 mb-4 hover:text-[#734A00]">
            New
          </p>
          <p className="font-inter font-normal text-[14px] leading-[14px] tracking-[-0.25px] m-3 hover:text-[#734A00]">
            Negotiating
          </p>
        </div>
      )}
        </div>
     
  





          {/* All reports */}
          <div className='flex flex-row p-3 items-center my-2 hover:bg-[#FFF7E8] cursor-pointer rounded-[20px]'>
            <img src={image4} alt="icon" className="w-[9px] h-[12px] mr-5 hover:[filter:brightness(0)_saturate(100%)_invert(45%)_sepia(95%)_saturate(532%)_hue-rotate(360deg)]" />
            {!showIconsOnly && (
              <p className="font-inter font-normal text-[14px] leading-[14px] tracking-[-0.25px] hover:text-[#734A00]">
                All reports
              </p>
            )}
          </div>
          {/* Geography */} 
          <div className='flex flex-row p-3 items-center my-2 hover:bg-[#FFF7E8] cursor-pointer rounded-[20px]'>
            <img src={image5} alt="icon" className="w-[12px] h-[12px] mr-5 hover:[filter:brightness(0)_saturate(100%)_invert(45%)_sepia(95%)_saturate(532%)_hue-rotate(360deg)]" />
            {!showIconsOnly && (
              <p className="font-inter font-normal text-[14px] leading-[14px] tracking-[-0.25px] hover:text-[#734A00]">
                Geography
              </p>
            )}
          </div>
          {/* Conversations */}
          <div className='flex flex-row p-3 items-center my-2 hover:bg-[#FFF7E8] cursor-pointer rounded-[20px]'>
            <img src={image6} alt="icon" className="w-[12px] h-[12px] mr-5 hover:[filter:brightness(0)_saturate(100%)_invert(45%)_sepia(95%)_saturate(532%)_hue-rotate(360deg)]" />
            {!showIconsOnly && (
              <p className="font-inter font-normal text-[14px] leading-[14px] tracking-[-0.25px] hover:text-[#734A00]">
                Conversations
              </p>
            )}
          </div>
          {/* Deals */}
          <div className='flex flex-row p-3 items-center my-2 hover:bg-[#FFF7E8] cursor-pointer rounded-[20px]'>
            <img src={image7} alt="icon" className="w-[12px] h-[11px] mr-5 hover:[filter:brightness(0)_saturate(100%)_invert(45%)_sepia(95%)_saturate(532%)_hue-rotate(360deg)]" />
            {!showIconsOnly && (
              <p className="font-inter font-normal text-[14px] leading-[14px] tracking-[-0.25px] hover:text-[#734A00]">
                Deals
              </p>
            )}
          </div>
          {/* Export */}
          <div className='flex flex-row p-3 items-center my-2 hover:bg-[#FFF7E8] cursor-pointer rounded-[20px]'>
            <img src={image8} alt="icon" className="w-[12px] h-[12px] mr-5 hover:[filter:brightness(0)_saturate(100%)_invert(45%)_sepia(95%)_saturate(532%)_hue-rotate(360deg)]" />
            {!showIconsOnly && (
              <p className="font-inter font-normal text-[14px] leading-[14px] tracking-[-0.25px] hover:text-[#734A00]">
                Export
              </p>
            )}
          </div>
        </div>
      </div>

      {/* User info and settings */}
      <div className='w-full flex flex-row justify-end'>
      <button
            onClick={toggleIconsAndText}
            className="mt-2 px-4 py-2 rounded ml-30 cursor-pointer"
          >
            {showIconsOnly ? (
              <ChevronRight className="w-3 h-3 rounded" />
            ) : (
              <ChevronLeft  className="w-3 h-3 rounded" />
            )}
          </button>

      </div>
     
      <div>
        {/* User info */}
        <div className='flex flex-row items-center mb-4'>
          <img src={image9} alt="avatar" className="w-[32px] h-[32px] rounded-[24px] mr-3" />
          {!showIconsOnly && (
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
          )}
        </div>

        {/* Settings */}
        <div className='flex flex-row p-3 items-center my-2 hover:bg-[#FFF7E8] cursor-pointer rounded-[20px]'>
          <img src={image10} alt="settings" className="w-[12px] h-[13px] mr-5 hover:[filter:brightness(0)_saturate(100%)_invert(45%)_sepia(95%)_saturate(532%)_hue-rotate(360deg)]" />
          {!showIconsOnly && (
            <p className="font-inter font-normal text-[14px] leading-[14px] tracking-[-0.25px] hover:text-[#734A00]">
              Settings
            </p>
          )}
        </div>

        {/* Log Out */}
        <div className='flex flex-row p-3 items-center my-2 hover:bg-[#FFF7E8] cursor-pointer rounded-[20px]'>
          <img src={image11} alt="logout" className="w-[10px] h-[10px] mr-5" />
          {!showIconsOnly && (
            <p className="font-inter font-normal text-[14px] leading-[14px] tracking-[-0.25px] hover:text-[#734A00]">
              Log out
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default AppSidebar