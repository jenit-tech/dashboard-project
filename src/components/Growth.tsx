import { useState } from 'react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
} from 'recharts';
import image14 from '../assets/cust.png';

// Define types for our data
type DataPoint = {
  year: number;
  value: number;
};

const Growth = () => {
  const allData: DataPoint[] = [
    { year: 2016, value: 10 },
    { year: 2017, value: 20 },
    { year: 2018, value: 50 },
    { year: 2019, value: 80 },
    { year: 2020, value: 30 },
    { year: 2021, value: 40 },
    { year: 2022, value: 70 },
    { year: 2023, value: 100 },
  ];

  const [selectedYear, setSelectedYear] = useState<string | number>('Yearly');
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [chartData, setChartData] = useState<DataPoint[]>(allData);

  const handleYearSelect = (year: string | number) => {
    if (year === 'Yearly') {
      setChartData(allData);
    } else {
      setChartData(allData.filter(item => item.year === year));
    }
    setSelectedYear(year === 'Yearly' ? 'Yearly' : year);
    setIsDropdownOpen(false);
  };

  return (
    <div className="flex flex-col w-full h-[256px] rounded-[16px] p-6 m-2 bg-white">
      <div className="w-full flex justify-between mb-1">
        <p className="font-inter font-semibold text-[20px] leading-[100%] tracking-[-0.2px] text-[#131313]">
          Growth
        </p>
        
        <div className="relative">
          <div 
            className="flex flex-row items-center cursor-pointer"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <p className="font-normal font-inter text-[14px] leading-[100%] tracking-[-0.3px] m-1">
              {selectedYear}
            </p>
            <img 
              src={image14}
              alt="icon" 
              className="w-[7px] h-[3.5px]"
            />
          </div>
          
          {isDropdownOpen && (
            <div className="absolute right-0 mt-1 bg-white shadow-lg rounded-md z-10 min-w-[100px] border border-gray-100">
              <div
                className="px-3 py-2 hover:bg-gray-100 cursor-pointer font-inter text-[14px]"
                onClick={() => handleYearSelect('Yearly')}
              >
                Yearly
              </div>
              {allData.map((item) => (
                <div
                  key={item.year}
                  className="px-3 py-2 hover:bg-gray-100 cursor-pointer font-inter text-[14px]"
                  onClick={() => handleYearSelect(item.year)}
                >
                  {item.year}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div>
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart data={chartData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="year" 
              interval={0} 
              tick={{ fill: '#666' }} 
            />
            <YAxis 
              tickFormatter={(val: number) => `${val}k`} 
              tick={{ fill: '#666' }}
              ticks={[0, 10, 20, 50, 100]}
              domain={[0, 'auto']}
            />
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
  );
};

export default Growth;