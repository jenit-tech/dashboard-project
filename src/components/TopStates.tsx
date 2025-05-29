
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
        { state: 'NY', value: 120 },
        { state: 'MA', value: 80 },
        { state: 'NH', value: 70 },
        { state: 'OR', value: 50 },
      ];
     

      

  return (
    <div className="flex flex-col w-full h-[256px] rounded-[16px]  p-4 m-2  bg-white">
    
    <p className="font-inter font-semibold text-[20px] leading-[100%] tracking-[-0.2px] text-[#131313] mb-2">
    Top states
</p>

<div>




<ResponsiveContainer width="100%" height={200}>
  <BarChart data={data} layout="vertical">
    {/* Generate a gradient for each bar */}
    <defs>
      {data.map((index) => (
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

    <Bar dataKey="value" barSize={50}>
      {data.map((index) => (
        <Cell key={`cell-${index}`} fill={`url(#gradient-${index})`} />
      ))}
       <LabelList
        dataKey="value"
        position="left"
        style={{ fill: 'black', fontSize: 12 }}
        formatter={(value: number) => `${value}`}
      />
      <LabelList
        dataKey="value"
        position="right"
        style={{ fill: 'black', fontSize: 12 }}
        formatter={(value: number) => `${value}`}
      />
    </Bar>
  </BarChart>
</ResponsiveContainer>
</div>
</div>
  )
}

export default TopStates