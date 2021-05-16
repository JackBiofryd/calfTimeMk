import React from 'react';
import { Link } from 'react-router-dom';
import { cowIsDue, cowShouldBeChecked } from '../../utils/dates';
import placeholderImage from '../../shared/images/placeholderCow.png';

export default function CowItem(props) {
	return (
		<div
			className={`cow-item ${props.displayOnly ? 'my-3' : 'my-4'} mx-1 ${
				cowIsDue(props.dueOn) && 'cow-due'
			}`}>
			<div className="cow-item-spacing"></div>
			<div className="cow-item-image">
				<img
					src={
						props.image
							? `${process.env.REACT_APP_BACKEND_URL}/cows/image/${props.image}`
							: placeholderImage
					}
					alt="Your Cow"
				/>
			</div>
			<div className="cow-item-info p-1">
				<div className="cow-item-all">
					<p>
						<strong>Tag:</strong> {props.tag}
					</p>
					<p className="mb-1">
						<strong>Name:</strong> {props.name}
					</p>
					<p>
						<strong>Born On:</strong> {props.bornOn}
					</p>
					<p>
						<strong>Liters Of Milk:</strong> {props.milk}
					</p>
					<p>
						<strong>Antibiotic Date:</strong> {props.antibioticDate}
					</p>
					<p>
						<strong>Mother & Children:</strong>{' '}
						<Link
							to={`/cows/relatives/${props.id}`}
							className="text-primary">
							View Relatives
						</Link>
					</p>
				</div>
				<div className="cow-item-dates">
					{props.fertDate && (
						<React.Fragment>
							<p className="my-0-5">
								<strong>Fertalization Date:</strong>{' '}
								{props.fertDate}
							</p>
							<p>
								<strong>Due On:</strong>{' '}
								<span
									className={
										cowIsDue(props.dueOn)
											? 'text-danger'
											: undefined
									}>
									{cowIsDue(props.dueOn) && (
										<i className="fas fa-exclamation-triangle mx-0-5"></i>
									)}
									{props.dueOn}
								</span>
							</p>
							<p>
								<strong>Checking Dates: </strong>{' '}
								{props.checkingDates && (
									<span
										className={
											cowShouldBeChecked(
												props.checkingDates.startDate,
												props.checkingDates.endDate
											)
												? 'text-warning'
												: undefined
										}>
										{cowShouldBeChecked(
											props.checkingDates.startDate,
											props.checkingDates.endDate
										) && (
											<i className="fas fa-exclamation-triangle mx-0-5"></i>
										)}
										{`${props.checkingDates.startDate} - ${props.checkingDates.endDate}`}
									</span>
								)}
							</p>
						</React.Fragment>
					)}
				</div>

				{!props.displayOnly && (
					<div className="cow-item-buttons">
						<Link
							to={`/cows/edit/${props.id}`}
							className="fas fa-pen icon-primary"></Link>
						<i
							className="fas fa-trash icon-primary"
							onClick={() => props.onDelete(props.id)}></i>
					</div>
				)}
			</div>
		</div>
	);
}
