import React from 'react';
import { Alert, Space } from 'antd';

const NotFound:React.FC = () => {
	return (
		<Space direction="vertical" style={{ width: '100%' }}>
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
