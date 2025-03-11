import PropTypes from 'prop-types';
import { useState } from 'react';
import styles from './game.module.css';
import { Information } from './components/information/information';
import { Field } from './components/field/field';

const GameLayout = ({
	currentPlayer,
	setCurrentPlayer,
	field,
	setField,
	isGameEnded,
	setIsGameEnded,
	isDraw,
	checkForWinner,
	emptyСells,
	rebootGame,
}) => {
	return (
		<div className={styles.app}>
			<Information
				currentPlayer={currentPlayer}
				isGameEnded={isGameEnded}
				setIsGameEnded={setIsGameEnded}
				isDraw={isDraw}
			/>
			<Field
				currentPlayer={currentPlayer}
				setCurrentPlayer={setCurrentPlayer}
				field={field}
				setField={setField}
				isGameEnded={isGameEnded}
				isDraw={isDraw}
				checkForWinner={checkForWinner}
				emptyСells={emptyСells}
			/>
			{!isGameEnded ? '' : <button onClick={rebootGame}>Начать заново</button>}
		</div>
	);
};

GameLayout.propTypes = {
	currentPlayer: PropTypes.string,
	setCurrentPlayer: PropTypes.func,
	field: PropTypes.array,
	setField: PropTypes.func,
	isGameEnded: PropTypes.bool,
	setIsGameEnded: PropTypes.func,
	isDraw: PropTypes.bool,
	checkForWinner: PropTypes.func,
	emptyСells: PropTypes.bool,
	rebootGame: PropTypes.func,
};

export const Game = () => {
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [field, setField] = useState(['', '', '', '', '', '', '', '', '']);

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

	return (
		<GameLayout
			currentPlayer={currentPlayer}
			setCurrentPlayer={setCurrentPlayer}
			field={field}
			setField={setField}
			isGameEnded={isGameEnded}
			isDraw={isDraw}
			checkForWinner={checkForWinner}
			emptyСells={emptyСells}
			rebootGame={rebootGame}
		/>
	);
};
