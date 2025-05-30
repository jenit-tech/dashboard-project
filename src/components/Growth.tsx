

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,

  CartesianGrid,

} from 'recharts';

import image14 from '../assets/cust.png'

const Growth = () => {

  const data = [
  { year: 2016, value: 10 },
  { year: 2017, value: 20 },
  { year: 2018, value: 50 },
  { year: 2019, value: 80 },
  { year: 2020, value: 30 },
  { year: 2021, value: 40 },
  { year: 2022, value: 70 },
  { year: 2023, value: 100 },
];
  return (
    <div className="flex flex-col w-full h-[256px] rounded-[16px]  p-6 m-2  bg-white">
   <div className="w-full flex justify-between mb-1">
        <p className="font-inter font-semibold text-[20px] leading-[100%] tracking-[-0.2px] text-[#131313]">
        Growth
</p>
<div className='flex flex-row items-center'>
<p className="font-normal font-inter text-[14px] leading-[100%] tracking-[-0.3px] m-1">
Yearly
</p>
<img 
  src={image14}
  alt="icon" 
  className="w-[7px] h-[3.5px]"
/>
</div>
</div>









<div >
<ResponsiveContainer className='flex-1' width={450} height={200}>
  <AreaChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
    {/* Optional grid */}
    <CartesianGrid strokeDasharray="3 3" />

    {/* X-axis for years with all ticks shown */}
    <XAxis dataKey="year" interval={0} tick={{ fill: '#666' }} />

    {/* Y-axis for growth values */}
    <YAxis tickFormatter={(val) => `${val}k`} tick={{ fill: '#666' }} />

    {/* Tooltip on hover */}
   

    {/* Optional legend */}
  

    {/* Area representing growth with fill color and stroke */}
    <Area
      type="monotone"
      dataKey="value"
      stroke="#4CAF50"
      strokeDasharray="4 4"
      strokeWidth={2}
      fillOpacity={1}
      fill="url(#colorGrowth)"
      name="Growth"
    />

    {/* Gradient definition for fill */}
    <defs>
      <linearGradient id="colorGrowth" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#4CAF50" stopOpacity={0.3} />
        <stop offset="100%" stopColor="#4CAF50" stopOpacity={0} />
      </linearGradient>
    </defs>
  </AreaChart>
</ResponsiveContainer>




</div>
</div>

  )
}

export default Growth









