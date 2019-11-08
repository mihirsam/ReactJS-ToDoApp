import React from 'react';

function ToDoItem(props) {
	const completedStyle = {
		fontstyle: 'italic',
		color: '#cdcdcd',
		textDecoration: 'line-through'
	};
	return (
		<div className="todo-item">
			<input
				type="checkbox"
				checked={props.item.completed}
				onChange={(event) => props.handleChange(props.item.id)}
			/>
			<p style={props.item.completed ? completedStyle : null}>{props.item.text}</p>
		</div>
	);
}

export default ToDoItem;
