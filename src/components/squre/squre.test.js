import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Squre from './squre';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Squre />, div);
});

it('check for starting position', () =>{
     const squreX = shallow(
    <Squre player={null} /> 
    );
    expect(squreX.text()).toEqual("");
});

it('check the move of Player X', () =>{
     const squreX = shallow(
    <Squre player={"X"} /> 
    );
    expect(squreX.text()).toEqual('X');
});

it('check the move of Player Y', () =>{
     const squreX = shallow(
    <Squre player={"Y"} /> 
    );
    expect(squreX.text()).toEqual('Y');
});



it('move is being made by play X when a squre is clicked', () => {
  var props = {
    player:null
  };
  const mockFn = jest.fn(() => {
      props.player = "X";
    });
   
  const squre = shallow(
    <Squre onClick={()=> mockFn()}/>
  );
  expect(squre.text()).toEqual('');
  

  squre.simulate('click');

  const squreX = shallow(
    <Squre player = {props.player} onClick={()=> mockFn()}/>
  );
  expect(squreX.text()).toEqual('X');

});

