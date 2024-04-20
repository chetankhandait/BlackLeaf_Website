import React, { useState } from 'react';

const FloorPlan = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div id='Floor plan' className=' bg-[#111827] m-2 rounded-md p-2   '>
      <h2>City Price & Floor Plan</h2>
      <div className="tabs">
        <button className={activeTab === 'tab1' ? 'active' : ''} onClick={() => handleTabClick('tab1')}>Tab 1</button>
        <button className={activeTab === 'tab2' ? 'active' : ''} onClick={() => handleTabClick('tab2')}>Tab 2</button>
        <button className={activeTab === 'tab3' ? 'active' : ''} onClick={() => handleTabClick('tab3')}>Tab 3</button>
      </div>
      <div className="tab-content">
        {activeTab === 'tab1' && (
          <img src="/images/image.png" alt="Floor Plan 1" className='rounded-md' />
        )}
        {activeTab === 'tab2' && (
          <img src="/images/image.png" alt="Floor Plan 2" className='rounded-md'/>
        )}
        {activeTab === 'tab3' && (
          <img src="/images/image.png" alt="Floor Plan 3" className='rounded-md'/>
        )}
      </div>
    </div>
  );
}

export default FloorPlan;
