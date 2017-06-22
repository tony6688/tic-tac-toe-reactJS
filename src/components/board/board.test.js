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


