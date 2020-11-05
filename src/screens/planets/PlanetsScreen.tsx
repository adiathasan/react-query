import React from 'react';
import './planetsScreen.css';
import { useQuery } from 'react-query';
import Loader from '../../components/loader/Loader';

const fetchPlanets = async () => {
	const data = fetch('https://swapi.dev/api/planets').then((res) => res.json());
	return data;
};

const PlanetsScreen = () => {
	const { data, status } = useQuery('planates', fetchPlanets);

	return status === 'loading' ? (
		<Loader />
	) : (
		<div className='wrapper'>
			<h1>Planates</h1>
			{status === 'error' && <div>Oops! Failed to grab planets.</div>}
			<div>
				{data?.results.map((planet: any) => {
					return (
						<div className='card' key={planet.url}>
							<h3>{planet.name}</h3>
							<p>Population - {planet.population}</p>
							<p>Terrain - {planet.terrain}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default PlanetsScreen;
