import PropTypes from 'prop-types';
import { FieldLayout } from './field-layout';

export const Field = ({ field, moveInTheGame }) => {
	return <FieldLayout field={field} moveInTheGame={moveInTheGame} />;
};

Field.propTypes = {
	field: PropTypes.array,
	moveInTheGame: PropTypes.func,
};
