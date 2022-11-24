import React from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

function OptionsBanner() {
	return (
		<div className="OptionsBanner">
			<Form>
				{['checkbox'].map((type) => (
					<div key={`inline-${type}`}>
						<Form.Check
							inline
							label=""
							name="group1"
							type={type}
							id={`inline-${type}-1`}
						/>
						<Form.Check
							inline
							label="Repeat"
							name="group1"
							type={type}
							id={`inline-${type}-2`}
						/>
						<Form.Check
							inline
							label="Save Results To Logs"
							type={type}
							id={`inline-${type}-3`}
						/>
					</div>
				))}
			</Form>
		</div>
	);
}

export default OptionsBanner;
