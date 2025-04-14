import PropTypes from 'prop-types';

export const InformationLayout = ({ information }) => {
	return <div>{information}</div>;
};

InformationLayout.propTypes = {
	information: PropTypes.string,
};
