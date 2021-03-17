import React, { useState } from 'react';

import WorkHistoryItem from './WorkHistoryItem';
import '../../styles/workhistorylist.less';

import workhistory from '../../data/workhistory.json';

function mod(n, m) {
  return ((n % m) + m) % m;
}

/**
 * TODO: handle keyboard controls (arrowUp, arrowDown, enter)
 * 1) on uparrow/down arrow -> change style of currently selected icon
 * Note: job position itself should no change
 * 2) on press enter, we set the currentActiveTab to the currentHighlighted
 */
const WorkHistoryList = () => {
  const [selectedPosition, setSelectedPosition] = useState(0);
  const { positions } = workhistory;

  const handleKeyDown = (e, index) => {
    const { code } = e;
    e.currentTarget.focus();

    if (code === 'ArrowDown') {
      setSelectedPosition(mod(selectedPosition + 1, positions.length));
    } else if (code === 'ArrowUp') {
      setSelectedPosition(mod(selectedPosition - 1, positions.length));
    } else if (code === 'Enter') {
      setSelectedPosition(index);
    }
  };

  return (
    <div className="work-wrapper">
      <div className="work-container">
        <h2 className="section-title">Where I&apos;ve Worked</h2>
        <div className="work-history">
          <div className="indicator" role="tablist" aria-label="Job tabs">
            <div
              className="circle-wrapper"
              role="tab"
              aria-selected={selectedPosition === 0 ? 'true' : 'false'}
              tabIndex="-1"
              onKeyDown={(e) => handleKeyDown(e, 0)}
              onClick={() => setSelectedPosition(0)}
            >
              <div className={selectedPosition === 0 ? 'circle active' : 'circle'} />
            </div>
            <div
              className="circle-wrapper"
              role="tab"
              aria-selected={selectedPosition === 1 ? 'true' : 'false'}
              tabIndex="-1"
              onKeyDown={(e) => handleKeyDown(e, 1)}
              onClick={() => setSelectedPosition(1)}
            >
              <div className={selectedPosition === 1 ? 'circle active' : 'circle'} />
            </div>
            <div
              className="circle-wrapper"
              role="tab"
              aria-selected={selectedPosition === 2 ? 'true' : 'false'}
              tabIndex="-1"
              onKeyDown={(e) => handleKeyDown(e, 2)}
              onClick={() => setSelectedPosition(2)}
            >
              <div className={selectedPosition === 2 ? 'circle active' : 'circle'} />
            </div>
            <span className="cut" />
          </div>
          {positions.map((position, i) => (
            <WorkHistoryItem
              key={i}
              className={selectedPosition === i ? 'active' : ''}
              title={position.title}
              company={position.company}
              dateStr={position.dateStr}
              accomplishments={position.accomplishments}
              url={position.url}
            />
          ))}
        </div>
      </div>
      <aside className="staircases">
        <div className="staircase">
          <div className="stair stair-1" />
          <div className="stair stair-2" />
          <div className="stair stair-3" />
          <div className="stair stair-4" />
          <div className="stair stair-5" />
        </div>
        <div className="staircase staircase-transparent">
          <div className="stair stair-1" />
          <div className="stair stair-2" />
          <div className="stair stair-3" />
          <div className="stair stair-4" />
          <div className="stair stair-5" />
        </div>
      </aside>
    </div>
  );
};

export default WorkHistoryList;
