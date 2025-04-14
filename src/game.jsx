import { useState } from 'react';
import { GameLayout } from './game-layout';

export const Game = () => {
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [field, setField] = useState(Array(9).fill(''));

	const WIN_PATTERNS = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];

	const emptyСells = field.includes('');

	if (!emptyСells && !isGameEnded) {
		setIsDraw(true);
		setIsGameEnded(true);
	}

	const rebootGame = () => {
		setCurrentPlayer('X');
		setIsGameEnded(false);
		setIsDraw(false);
		setField(['', '', '', '', '', '', '', '', '']);
	};

	const checkForWinner = () => {
		WIN_PATTERNS.forEach((elementWin) => {
			const crossesWin = [];
			const zerosWin = [];

			field.forEach((element, index) => {
				if (
					element === 'X' &&
					elementWin.some((indexSome) => indexSome === index)
				) {
					crossesWin.push(index);
				} else if (
					element === 'O' &&
					elementWin.some((indexSome) => indexSome === index)
				) {
					zerosWin.push(index);
				}
			});

			if (crossesWin.length === 3) {
				setIsGameEnded(true);
				setCurrentPlayer('X');
				return;
			}
			if (zerosWin.length === 3) {
				setIsGameEnded(true);
				setCurrentPlayer('O');
				return;
			}
		});
	};

	const moveInTheGame = (index) => {
		if (field[index] === '' && !isGameEnded) {
			field.splice(index, 1, currentPlayer);
			setField(field);
		}
		if (!isGameEnded) {
			if (!isGameEnded && emptyСells) {
				currentPlayer === 'X' ? setCurrentPlayer('O') : setCurrentPlayer('X');
			}
			checkForWinner();
		}
	};

	const gameEnded = () => {
		if (isDraw && isGameEnded) {
			return 'Ничья';
		} else if (!isDraw && isGameEnded) {
			return `Победа: ${currentPlayer}`;
		} else if (!isDraw && !isGameEnded) {
			return `Ходит: ${currentPlayer}`;
		}
	};

	return (
		<GameLayout
			field={field}
			isGameEnded={isGameEnded}
			moveInTheGame={moveInTheGame}
			gameEnded={gameEnded}
			rebootGame={rebootGame}
		/>
	);
};
