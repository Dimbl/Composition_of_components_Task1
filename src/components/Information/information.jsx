import PropTypes from 'prop-types';
import { InformationLayout } from './information-layout';

export const Information = ({ gameEnded }) => {
	const information = gameEnded();
	return <InformationLayout information={information} />;
};

Information.propTypes = {
	gameEnded: PropTypes.func,
};
