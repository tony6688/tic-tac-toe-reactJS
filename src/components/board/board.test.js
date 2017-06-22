import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Board from './board';
import Squre from "../squre/squre";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Board />, div);
});


// it('move is being made by play X when a squre is clicked', () => {
  
//   const board = shallow(
//     <Board />
//   );
//   board.find('Squre').at(1).simulate('click');
//   expect(board.find('Squre').at(1).text()).toEqual('X');
// });

