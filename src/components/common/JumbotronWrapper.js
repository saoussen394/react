import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Col, Jumbotron } from 'react-bootstrap';
import { CenterToScreen } from './hoc';

const JumbotronWrapper = (props) => {
	return (
		<Col {...props.col}>
			<Jumbotron>
				<h1> </h1>
				<p> </p>
				<div style={{color: '#0056b3'}}></div>
			</Jumbotron>
		</Col>
	);
};

JumbotronWrapper.propTypes = {
 
	col: PropTypes.object,
};

JumbotronWrapper.defaultProps = {
	description: `fcap content`,
	col: { md: '6' }
};

export default memo(CenterToScreen(JumbotronWrapper));
