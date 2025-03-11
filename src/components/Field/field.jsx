import PropTypes from 'prop-types';
import styles from './field.module.css';

const FieldLayout = ({ field, moveInTheGame }) => {
	return (
		<div className={styles.field}>
			{field.map((value, index) => {
				return (
					<div
						className={styles.fieldСell}
						key={index}
						onClick={() => moveInTheGame(index)}
					>
						{value}
					</div>
				);
			})}
		</div>
	);
};

FieldLayout.propTypes = {
	field: PropTypes.array,
	moveInTheGame: PropTypes.func,
};

export const Field = ({
	currentPlayer,
	setCurrentPlayer,
	field,
	setField,
	isGameEnded,
	checkForWinner,
	emptyСells,
}) => {
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

	return <FieldLayout field={field} moveInTheGame={moveInTheGame} />;
};

Field.propTypes = {
	currentPlayer: PropTypes.string,
	setCurrentPlayer: PropTypes.func,
	field: PropTypes.array,
	setField: PropTypes.func,
	isGameEnded: PropTypes.bool,
	isDraw: PropTypes.bool,
	checkForWinner: PropTypes.func,
	emptyСells: PropTypes.bool,
};
