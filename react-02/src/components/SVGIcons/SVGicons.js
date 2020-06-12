import React from 'react';
import TTTgame from './TTTgame.svg';
import blackOnWhite from './blackOnWhite.svg';
import Accounts from './Accounts.svg';
import City from './City.svg';
import gears from './gears.svg';
import spectrumOnWhite from './spectrumOnWhite.svg';
import logo from './logo.svg';

function SVGicons(props) {
  return (
    <div className="IconsSVG">
      <header className="SVG-header">
        <img onClick={() => {props.handleClick(0)}} src={logo} className="SVG-icon" alt="icon" />
        <img onClick={() => {props.handleClick(1)}} src={TTTgame} className="SVG-icon" alt="icon" />
        <img onClick={() => {props.handleClick(2)}} src={Accounts} className="SVG-icon" alt="icon" />
        <img onClick={() => {props.handleClick(3)}} src={City} className="SVG-icon" alt="icon" />
        <img onClick={() => {props.handleClick(4)}} src={blackOnWhite} className="SVG-icon filter-white" alt="icon" />
        <img src={gears} className="SVG-icon filter-green" alt="icon" />
        <img src={spectrumOnWhite} className="SVG-icon" alt="icon" />
      </header>
    </div>
  );
}

export default SVGicons;