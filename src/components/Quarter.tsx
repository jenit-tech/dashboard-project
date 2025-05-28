
import {
    RadialBarChart,
    RadialBar,
   

    PolarAngleAxis
  } from 'recharts';
  
import image13 from '../assets/tablericon.png'
const Quarter = () => {
   
      
      
    return (
        <div className="w-[262px] h-[256px] rounded-2xl bg-white shadow p-4 flex flex-col items-center justify-between m-2 ">
        {/* Top title */}
        <h2 className="text-[#131313] font-inter font-semibold text-lg mb-2">
          Quarter goal
        </h2>
      
        {/* Chart + Centered Percentage */}
        <div className="relative w-[200px] h-[100px] flex items-center justify-center">
          <RadialBarChart
            width={200}
            height={200}
            cx="50%"
            cy="50%"
            innerRadius="80%"
            outerRadius="100%"
            barSize={20}
            data={[{ name: 'Goal', value: 84, fill: '#FFCD71' }]}
            startAngle={180}
            endAngle={0}
          >
            <PolarAngleAxis
              type="number"
              domain={[0, 100]}
              angleAxisId={0}
              tick={false}
            />
            <RadialBar
              background
             
              dataKey="value"
              angleAxisId={0}
            />
          </RadialBarChart>
      
          {/* Centered Percentage Text */}
          <div className="absolute top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <p className="font-inter font-medium text-[32px] text-[#131313] m-0">84%</p>
          </div>
        </div>
      
        {/* Footer Link */}
        <div className='flex flex-row items-center'>
<p className="font-inter font-normal text-[14px] leading-[100%] tracking-[-0.3px] text-[var(--Dark-Orange,#734A00)] mr-2">
All goals
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

export default Quarter