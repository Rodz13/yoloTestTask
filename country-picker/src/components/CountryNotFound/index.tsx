import React from 'react';
import { Alert, Space } from 'antd';

import './index.css';

const NotFound:React.FC = () => {
	return (
		<Space direction="vertical" className="not-found">
			<Alert
				message="Country Code Not Found"
				description="Country code has 2 characters - for example: EE for Estonia"
				type="error"
				showIcon
			/>
	  </Space>
	);
}

export { NotFound };
