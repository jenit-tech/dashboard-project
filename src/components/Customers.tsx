import React, { useState } from 'react';
import image13 from '../assets/tablericon.png';
import image14 from '../assets/cust.png';
import image15 from '../assets/chris.png';
import image16 from '../assets/magi.png';
import image17 from '../assets/gael.png';
import image18 from '../assets/jenna.png';
import image22 from '../assets/chat.png';
import image23 from '../assets/star.png';
import image24 from '../assets/pen.png';
import image26 from '../assets/dots.png';

interface CustomerProps {
  profileImage: string;
  name: string;
  company: string;
}

const CustomerRow: React.FC<CustomerProps> = ({ profileImage, name, company }) => {
  return (
    <div className="relative flex w-full flex-col">
      <div className="flex flex-row items-center justify-between rounded-[16px] bg-white px-4 py-3 group hover:bg-[#FFF7E8] transition-colors duration-300 cursor-pointer">
        <div className='flex flex-row items-center'>
          <img
            src={profileImage}
            alt="profile"
            className="w-[32px] h-[32px] rounded-[24px] mr-3"
          />
          <div className='flex flex-col'>
            <p className="font-inter font-medium text-[14px] leading-[100%] tracking-[-0.3px] text-[#131313] mb-1 mt-1">
              {name}
            </p>
            <p className="font-inter font-normal text-[12px] leading-[100%] tracking-[-0.3px] text-[#454545]">
              {company}
            </p>
          </div>
        </div>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center opacity-0 translate-x-0 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-x-4 z-20">
          <div className='flex flex-row items-center space-x-5'>
            <img src={image22} alt="chat" className="w-[12.01px] h-[10.68px]" />
            <img src={image23} alt="star" className="w-[13px] h-[12px]" />
            <img src={image24} alt="pen" className="w-[10px] h-[10px]" />
            <div className="h-px w-[18px] rotate-[-90deg] opacity-20 border border-[#734A00] mx-2"></div>
            <img src={image26} alt="dots" className="w-[3px] h-[10px] mr-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

const Customers = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [sortBy, setSortBy] = useState('Newest');
  const sortOptions = ['Newest', 'Oldest', 'Name (A-Z)', 'Name (Z-A)'];

  const handleSortSelect = (option: string) => {
    setSortBy(option);
    setIsDropdownOpen(false);
    // Here you would implement the actual sorting logic
  };

  return (
    <div className="flex flex-col w-full h-[400px] rounded-[16px] p-6 bg-white">
      {/* Header */}
      <div className="w-full flex justify-between px-4 py-3">
        <p className="font-inter font-semibold text-[20px] leading-[100%] tracking-[-0.2px] text-[#131313]">
          Customers
        </p>
        
        <div className="relative">
          <div 
            className="flex flex-row items-center cursor-pointer"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <p className="font-inter text-[14px] leading-[100%] tracking-[-0.3px] m-1">
              <span className="font-normal">Sort by </span>
              <span className="font-medium">{sortBy}</span>
            </p>
            <img 
              src={image14}
              alt="icon"
              className="w-[7px] h-[3.5px]"
            />
          </div>
          
          {isDropdownOpen && (
            <div className="absolute right-0 mt-1 bg-white shadow-lg rounded-md z-10 min-w-[160px] border border-gray-100">
              {sortOptions.map((option) => (
                <div
                  key={option}
                  className={`px-4 py-2 hover:bg-[#FFF7E8] cursor-pointer font-inter text-[14px]`}
                  onClick={() => handleSortSelect(option)}
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* List of customers */}
      <div className='flex flex-col mb-0'>
        <CustomerRow
          profileImage={image15}
          name="Chris Friedkly"
          company="Supermarket Villanova"
        />
        <CustomerRow
          profileImage={image16}
          name="Maggie Johnson"
          company="Oasis Organic Inc."
        />
        <CustomerRow
          profileImage={image17}
          name="Gael Harry"
          company="New York Finest Fruits"
        />
        <CustomerRow
          profileImage={image18}
          name="Jenna Sullivan"
          company="Walmart"
        />
      </div>

      {/* Footer */}
      <div className='flex flex-row items-center px-4 py-3 cursor-pointer mt-10'>
        <p className="font-inter font-normal text-[14px] leading-[100%] tracking-[-0.3px] text-[var(--Dark-Orange,#734A00)] mr-2">
          All customers
        </p>
        <img
          src={image13}
          alt="icon"
          className="w-[8px] h-[4px]"
        />
      </div>
    </div>
  );
};

export default Customers;