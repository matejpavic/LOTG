import React from 'react';
import NSZSDGrb from './NSZSDGrb.svg';

const Login = ({onInputChange, onButtonPristupi, onButtonEnglish}) => { 
    return (
      <div className="App">
        <div className="bg-black">
        <button 
        onClick={onButtonEnglish}
        className="f5 white bg-blue grow ba bw2 ph3 pv1">
        English</button>
        </div>
        <header className="App-header">
          <img src={NSZSDGrb} className="App-logo" alt="logo" />
          <p>
            Pravila nogometne igre
          </p>
          <input
          type='password'
          name='password'
          className='bg-light-blue w-30 ma2' 
          placeholder='Unesi lozinku'
          onChange={onInputChange}
          />
            <button
            onClick={onButtonPristupi}
            className="f5 bg-green br-pill grow ba bw2 ph3 pv1">
              Pristupi
            </button>
        </header>
      </div>
    );
}

export default Login;
