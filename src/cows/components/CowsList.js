import React from 'react';
import CowItem from './CowItem';
import Button from '../../shared/components/Button';

export default function CowsList(props) {
	if (!props.cows || props.cows?.length === 0) {
		return (
			<div className="center my-4">
				<h1 className="mb-1">Не се пронајдени крави.</h1>
				<Button to="/cows/new" inverse>
					Додај крава
				</Button>
			</div>
		);
	}

	return (
		<React.Fragment>
			{props.cows.map(cow => (
				<CowItem
					key={cow.id}
					id={cow.id}
					name={cow.name}
					tag={cow.tag}
					fertDate={cow.fertDate}
					dueOn={cow.dueOn}
					bornOn={cow.bornOn}
					image={cow.image}
					mother={cow.mother}
					children={cow.children}
					onDelete={props.onDelete}
					checkingDates={cow.checkingDates}
					milk={cow.milk}
					antibioticDate={cow.antibioticDate}
					gender={cow.gender}
				/>
			))}
		</React.Fragment>
	);
}
