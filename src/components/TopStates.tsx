
import {
  BarChart,
  Bar,
  XAxis,
 

  ResponsiveContainer,
  Cell,
  LabelList,
} from 'recharts';

const TopStates = () => {

    const data = [
        { place: 'NY', value: 120 },
        { place: 'MA', value: 80 },
        { place: 'NH', value: 70 },
        {place: 'OR', value: 50 },
      ];
     

      

  return (
    <div className="flex flex-col w-full h-[256px] rounded-[16px]  p-4 m-2  bg-white">
    
    <p className="font-inter font-semibold text-[20px] leading-[100%] tracking-[-0.2px] text-[#131313] mb-2">
    Top states
</p>

<div>




<ResponsiveContainer width="100%" height={200}>
  <BarChart data={data} layout="vertical" barCategoryGap="0%">
    {/* Generate a gradient for each bar */}
    <defs>
      {data.map((_, index) => (
        <linearGradient
          key={`gradient-${index}`}
          id={`gradient-${index}`}
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
        >
          <stop offset="-2.57%" stopColor="#FFCD71" stopOpacity={1} />
          <stop offset="112.5%" stopColor="rgba(255, 205, 113, 0)" stopOpacity={0} />
        </linearGradient>
      ))}
    </defs>

    {/* Hide XAxis labels */}
    <XAxis type="number" tick={false} axisLine={false} />

    {/* Remove or comment out */}
    {/* <Tooltip formatter={(value) => `${value}`} /> */}

    <Bar dataKey="value">
      {data.map((_, index) => (
        <Cell key={`cell-${index}`} fill={`url(#gradient-${index})`} />
      ))}
       <LabelList
        dataKey="place"  // Changed from "value" to "place"
        position="insideLeft"
        style={{ fill: 'black', fontSize: 12,  fontWeight: 'bold'}}
      />
      <LabelList
        dataKey="value"
        position="insideRight"
        style={{ fill: 'black', fontSize: 12 }}
        formatter={(value: number) => `${value}K`}
      />
    </Bar>
  </BarChart>
</ResponsiveContainer>




</div>
</div>
  )
}

export default TopStates