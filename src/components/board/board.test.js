import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Board from './board';
import Squre from "../squre/squre";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Board />, div);
});

it('check for all squre exist', () => {
  const board = shallow(
    <Board />
  );
  const mockFn = jest.fn(() => {
      return board.find('Squre').length;
  });
  expect(mockFn()).toBe(9);
});

it('check for starting statement', () => {
  const board = shallow(<Board />);
  expect(board.find('#statement').text()).toEqual('Next: X');
});


// it('move is being made by play X when a squre is clicked', () => {
//   const board = shallow(
//     <Board />
//   );

//   console.log(Board.checkForWinner;
//   // const squre0 = board.find('Squre').at(0);
//   // const squre1 = board.find('Squre').at(1);
//   // const squre2 = board.find('Squre').at(2);
//   // const squre3 = board.find('Squre').at(3);
//   // const squre4 = board.find('Squre').at(4);
//   // const squre5 = board.find('Squre').at(5);
//   // const squre6 = board.find('Squre').at(6);
//   // const squre7 = board.find('Squre').at(7);
//   // const squre8 = board.find('Squre').at(8);
// });

