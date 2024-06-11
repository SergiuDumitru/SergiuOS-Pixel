import React from 'react';
import classNames from 'classnames';

const Icon = ({ label, icon, iconWidth, iconHeight, isSelected, onClick, onDoubleClick }) => {

  return (<div onDoubleClick={onDoubleClick}> 
    <div className={classNames('icon', { 'icon-selected pixel-corners': isSelected })} onClick={onClick}>
      <img width={iconWidth} height={iconHeight} src={icon} alt={label} />  
      <p>{label}</p>
    </div></div>
  );
};

export default Icon;