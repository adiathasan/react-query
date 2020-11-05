import React from 'react';
import '../planets/planetsScreen.css';
import './peopleScreen.css';
import { useQuery } from 'react-query';
import Loader from '../../components/loader/Loader';

const fetchPlanets = async () => {
	const data = fetch('https://swapi.dev/api/people').then((res) => res.json());
	return data;
};

const PeopleScreen = () => {
	const { data, status } = useQuery('planates', fetchPlanets);

	return status === 'loading' ? (
		<Loader />
	) : (
		<div className='wrapper'>
			<h1>People</h1>
			{status === 'error' && <div>Oops! Failed to grab people.</div>}
			<div>
				{data?.results.map((people: any) => {
					return (
						<div className='card' key={people.url}>
							<h3>{people.name}</h3>
							<p>Gender - {people.gender}</p>
							<p>Birth Year - {people.birth_year}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default PeopleScreen;
