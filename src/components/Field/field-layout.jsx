import PropTypes from 'prop-types';
import styles from './field.module.css';

export const FieldLayout = ({ field, moveInTheGame }) => {
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
