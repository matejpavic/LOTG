import React from 'react';
import NSZSDGrb from './NSZSDGrb.svg';

const LoginEng = ({onInputChange, onButtonPristupi, onButtonHrvatski}) => { 
    return (
      <div className="App">
        <div className="bg-black">
        <button 
        onClick={onButtonHrvatski}
        className="f5 red bg-white grow ba bw2 ph3 pv1">
        Hrvatski</button>
        </div>
        <header className="App-header">
          <img src={NSZSDGrb} className="App-logo" alt="logo" />
          <p>
            Laws of the game
          </p>
          <input
          type='password'
          name='password'
          className='bg-light-blue w-30 ma2' 
          placeholder='Enter password'
          onChange={onInputChange}
          />
            <button
            onClick={onButtonPristupi}
            className="f5 bg-green br-pill grow ba bw2 ph3 pv1">
              Access
            </button>
        </header>
      </div>
    );
}

export default LoginEng;