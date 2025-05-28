import React from 'react'
import AppSidebar from './AppSidebar'
import Revenue from './Revenue'
import Lost from './Lost'
import Quarter from './Quarter'

const HomePage = () => {
  return (

  <>
   <div className="flex flex-row bg-[var(--Off-White,#F6F6F3)] p-5">
  <AppSidebar />
  <div className='flex flex-col'>
    <div className='flex flex-row'>
      <Revenue/>
<Lost/>
<Quarter/>
    </div>

  </div>
</div>

  </>
  )
}

export default HomePage