import { useState } from 'react'
import AppSidebar from './AppSidebar'
import Revenue from './Revenue'
import Lost from './Lost'
import Quarter from './Quarter'
import Customers from './Customers'
import Growth from './Growth'
import TopMonth from './TopMonth'
import TopYear from './TopYear'
import TopBuyer from './TopBuyer'
import Chats from './Chats'
import TopStates from './TopStates'
import NewDeals from './NewDeals'

const HomePage = () => {
  const [showIconsOnly, setShowIconsOnly] = useState(false)

  const toggleIconsAndText = () => {
    setShowIconsOnly(prev => !prev)
  }

  // Calculate the left margin for the main content based on sidebar state
  const mainContentMarginLeft = showIconsOnly ? 'ml-[96px]' : 'ml-[296px]'

  return (
    <div className="flex bg-[var(--Off-White,#F6F6F3)] p-5 min-w-[1024px] overflow-x-hidden">
      {/* Sidebar */}
      <AppSidebar 
        showIconsOnly={showIconsOnly} 
        toggleIconsAndText={toggleIconsAndText} 
      />

      {/* Main Content */}
      <div className={`flex-1 ${mainContentMarginLeft} transition-all duration-300 overflow-hidden`}>
        <div className='flex flex-col gap-4'>

          {/* Top Row */}
          <div className='flex flex-row gap-2 flex-shrink-0 flex-wrap'>
            <div className='flex-1 min-w-[240px]'>
              <Revenue/>
            </div>
            <div className='flex-1 min-w-[240px]'>
              <Lost/>
            </div>
            <div className='flex-1 min-w-[240px]'>
              <Quarter/>
            </div>
          </div>

          {/* Middle Row */}
          <div className='flex flex-row h-[400px] gap-2 flex-shrink-0 flex-wrap'>
            <div className='flex-1 min-w-[250px]'>
              <Customers/>
            </div>
            <div className='flex-1 flex flex-col gap-2 min-w-[250px]'>
              <Growth/>
              <div className='flex flex-row gap-2 flex-wrap'>
                <div className='flex-1 min-w-[120px]'>
                  <TopMonth/>
                </div>
                <div className='flex-1 min-w-[120px]'>
                  <TopYear/>
                </div>
                <div className='flex-1 min-w-[120px]'>
                  <TopBuyer/>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row */}
          <div className='flex flex-row h-[256px] gap-2 flex-shrink-0 flex-wrap'>
            <div className='flex-1 w-full'>
              <Chats/>
            </div>
            <div className='flex-1 w-full'>
              <TopStates/>
            </div>
            <div className='flex-1 w-full'>
              <NewDeals/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage