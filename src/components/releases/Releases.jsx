import React from 'react';
import Card from './Cards'; 
import ore_randomizer from '../../assets/Ore_randomizer.jpg'
import { FaQuestion } from 'react-icons/fa';

const Releases = () => {
  return (
    <div className="h-[650px] md:h-[500px] bg-gradient-to-br from-Purple1 to-Cyan2 pt-20 border-t-Gray2 border-t-2">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-4xl text-center mb-8 ">Releases</h1>
        <div className='flex content-between justify-between'>
        <a href='https://mcpedl.com/warped-studios-ore-randomizer/'>
        <Card>
          <div className="flex items-center justify-center mb-4 ">
          <img src= {ore_randomizer} alt='Ore Randomizer' className="h-24 items-center" />
          </div> 
          <div className="flex items-center justify-center"> 
            <h2 className="text-xl font-semibold mb-2">Ore Randomizer</h2>
          </div>
          <div className='flex items-center justify-center'>
          <p className="text-gray-600">Description</p>
          </div>
        </Card>
        </a>
        <Card>
          <div className="flex items-center justify-center mb-4 ">
          <FaQuestion className='h-24 items-center'/>
          </div> 
          <div className="flex items-center justify-center"> 
            <h2 className="text-xl font-semibold mb-2">Coming Soon</h2>
          </div>
          <div className='flex items-center justify-center'>
          <p className="text-gray-600">Description</p>
          </div>
        </Card>
        <Card>
          <div className="flex items-center justify-center mb-4 ">
          <FaQuestion className='h-24 items-center'/>
          </div> 
          <div className="flex items-center justify-center"> 
            <h2 className="text-xl font-semibold mb-2">Coming Soon</h2>
          </div>
          <div className='flex items-center justify-center'>
          <p className="text-gray-600">Description</p>
          </div>
        </Card>
        </div>
      </div>
    </div>
  );
};

export default Releases;