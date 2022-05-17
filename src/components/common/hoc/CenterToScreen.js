import React ,{memo} from 'react';

const CenterToScreen = (Component) => (props) => {
	return (
		<div className="center-to-screen">
			<Component {...props} />
		</div>
	);
};

export default memo(CenterToScreen);
