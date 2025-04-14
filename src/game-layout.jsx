import PropTypes from 'prop-types';
import styles from './game.module.css';
import { Information } from './components/Information/information';
import { Field } from './components/Field/field';

export const GameLayout = ({
	field,
	isGameEnded,
	moveInTheGame,
	gameEnded,
	rebootGame,
}) => {
	return (
		<div className={styles.app}>
			<Information gameEnded={gameEnded} />
			<Field field={field} moveInTheGame={moveInTheGame} />
			{!isGameEnded ? '' : <button onClick={rebootGame}>Начать заново</button>}
		</div>
	);
};

GameLayout.propTypes = {
	field: PropTypes.array,
	isGameEnded: PropTypes.bool,
	moveInTheGame: PropTypes.func,
	gameEnded: PropTypes.func,
	rebootGame: PropTypes.func,
};
