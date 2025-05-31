import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    ResponsiveContainer,
    Cell,
    LabelList,
  } from 'recharts';
  
  const TopStates = () => {
    const data = [
      { place: 'NY', value: 120 },
      { place: 'MA', value: 80 },
      { place: 'NH', value: 70 },
      { place: 'OR', value: 50 },
    ];
  
    return (
      <div className="flex flex-col w-full h-[256px] rounded-[16px] p-4 m-2 bg-white">
        <p className="font-inter font-semibold text-[20px] leading-[100%] tracking-[-0.2px] text-[#131313] mb-2">
          Top states
        </p>
  
        <div className='mt-2'>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart 
              data={data} 
              layout="vertical" 
              barCategoryGap="15%"
              margin={{ top: 0, right: 20, left: 0, bottom: 0 }}
             
            >
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
  
              <XAxis 
                type="number" 
                hide // This completely hides the XAxis
              />
              <YAxis 
                type="category" 
                dataKey="place" 
                hide // This hides the YAxis labels
                width={0} // This ensures no space is taken by YAxis
              />
  
              <Bar 
                dataKey="value" 
                radius={[4, 4, 4, 4]}
               
              >
                {data.map((_, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={`url(#gradient-${index})`} 
                  />
                ))}
                <LabelList
                  dataKey="place"
                  position="insideLeft"
                  style={{ fill: 'black', fontSize: 12, fontWeight: 'bold' }}
                  offset={10} // Added some offset from the left edge
                />
                <LabelList
                  dataKey="value"
                  position="insideRight"
                  style={{ fill: 'black', fontSize: 12}}
                  formatter={(value: number) => `${value}K`}
                  offset={-10} // Added some offset from the right edge
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  }
  
  export default TopStates;