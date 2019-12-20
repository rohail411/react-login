import React from 'react';

export default ({ type, value, onChange, name }) => (
	<input
		type={type}
		required
		name={name}
		value={value}
		className="form-control"
		onChange={onChange}
		placeholder={name}
	/>
);
