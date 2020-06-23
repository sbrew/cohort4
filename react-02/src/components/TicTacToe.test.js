import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Game from './TicTacToe';


test('does the game render', () => {
  const { getByText, getAllByRole } = render(<Game />);

//   const nextPlayer = getByText(/next player:/i);
  expect(getByText(/next player:/i)).toBeInTheDocument();

  const board = getAllByRole('button').splice(0, 9);
  const currentBoard = board.map((square) => square.textContent);
  expect(currentBoard).toEqual([
    '', '', '',
    '', '', '',
    '', '', '',
  ]);
});

test('checking for open square', () => {
  const { getAllByRole, getByRole } = render(<Game />);
  const board = getAllByRole('button').splice(0, 9);
  const status = getByRole('status');

  fireEvent.click(board[0]);
  fireEvent.click(board[4]);
  fireEvent.click(board[2]);
  fireEvent.click(board[1]);
  fireEvent.click(board[7]);
  fireEvent.click(board[3]);
  fireEvent.click(board[5]);
    fireEvent.click(board[8]);

  const currentBoard = board.map((square) => square.textContent);
  expect(currentBoard).toEqual([
    'X', 'O', 'X',
    'O', 'O', 'X',
    '', 'X', 'O',
  ]);
  expect(status).toHaveTextContent('Next player: X');
});

test('test the winner', () => {
  const { getAllByRole, getByRole } = render(<Game />);
  const board = getAllByRole('button').splice(0, 9);
  const status = getByRole('status');

  fireEvent.click(board[0]);
  fireEvent.click(board[4]);
  fireEvent.click(board[3]);
  fireEvent.click(board[7]);
  fireEvent.click(board[6]);

  const currentBoard = board.map((square) => square.textContent);
  expect(currentBoard).toEqual([
    'X', '', '',
    'X', 'O', '',
    'X', 'O', '',
  ]);
  expect(status).toHaveTextContent('Winner: X');


  click('Go to move #2')

  const oldBoard = board.map((square) => square.textContent);
  expect(oldBoard).toEqual([
    'X', '', '',
    '', 'O', '',
    '', '', '',
  ]);
});

function click(txt) {
    fireEvent.click(
        screen.getByText(txt)
    );
}