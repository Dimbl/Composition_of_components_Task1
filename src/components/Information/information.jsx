import PropTypes from 'prop-types';

const InformationLayout = ({ gameEnded }) => {
	return <div>{gameEnded()}</div>;
};

InformationLayout.propTypes = {
	gameEnded: PropTypes.func,
};

export const Information = ({ currentPlayer, isGameEnded, isDraw }) => {
	const gameEnded = () => {
		if (isDraw && isGameEnded) {
			return 'Ничья';
		} else if (!isDraw && isGameEnded) {
			return `Победа: ${currentPlayer}`;
		} else if (!isDraw && !isGameEnded) {
			return `Ходит: ${currentPlayer}`;
		}
	};

	return <InformationLayout gameEnded={gameEnded} />;
};

Information.propTypes = {
	currentPlayer: PropTypes.string,
	setCurrentPlayer: PropTypes.func,
	isGameEnded: PropTypes.bool,
	isDraw: PropTypes.bool,
};
