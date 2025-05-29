
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
  return (

  <>
   <div className="flex flex-row bg-[var(--Off-White,#F6F6F3)] p-5">
    <div className='sticky top-5 h-screen w-[280px]  min-w-[280px] max-w-[320px] overflow-hidden m-2'>
    <AppSidebar />

    </div>
 
  <div className='flex flex-col'>
    <div className='flex flex-row'>
      <Revenue/>
<Lost/>
<Quarter/>
    </div>
    <div className='flex flex-row h-[400px] m-2'>
      <div className='w-full m-2'>
      <Customers/>

      </div>

<div className='flex flex-col w-full'>
  <Growth/>
  <div className='flex flex-row'>
    <TopMonth/>
    <TopYear/>
    <TopBuyer/>

  </div>

</div>
    </div>


    <div className='flex flex-row m-2 h-[256px]'>
      <Chats/>
      <TopStates/>
      <NewDeals/>

    </div>

  </div>
</div>

  </>
  )
}

export default HomePage