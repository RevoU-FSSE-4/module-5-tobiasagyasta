// components/PokemonAbility.tsx

import React, { useState, useEffect } from "react";
import { Skeleton } from "./ui/skeleton";

// Define the type for the ability data
interface Ability {
	name: string;
	effect: string;
}

// Define props type
interface PokemonAbilityProps {
	abilityName: string;
}

const PokemonAbility: React.FC<PokemonAbilityProps> = ({ abilityName }) => {
	const [ability, setAbility] = useState<Ability | null>(null);
	const [loading, setLoading] = useState(true);

	const fetchAbility = async () => {
		try {
			const res = await fetch(
				`https://pokeapi.co/api/v2/ability/${abilityName}/`
			);
			const data = await res.json();
			const effectEntry = data.effect_entries.find(
				(entry: any) => entry.language.name === "en"
			);
			return {
				name: data.name,
				effect: effectEntry
					? effectEntry.short_effect
					: "No effect description available.",
			};
		} catch (error) {
			console.error("Error fetching ability data:", error);
			return {
				name: abilityName,
				effect: "Failed to fetch ability description.",
			};
		}
	};

	useEffect(() => {
		const getAbility = async () => {
			const fetchedAbility = await fetchAbility();
			setAbility(fetchedAbility);
			setLoading(false);
		};
		getAbility();
	}, [abilityName]);

	if (loading) {
		return (
			<div className='flex flex-col space-y-3 mx-auto'>
				<Skeleton className='rounded-xl' />
				<div className='space-y-2'>
					<Skeleton className='h-4 w-[150px]' />
					<Skeleton className='h-4 w-[100px]' />
				</div>
			</div>
		);
	}

	if (!ability) {
		return <div>No ability data available.</div>;
	}

	return (
		<div>
			<h1 className='text-xl font-bold mb-2'>
				{ability.name.charAt(0).toUpperCase() + ability.name.slice(1)}
			</h1>
			<p>{ability.effect}</p>
		</div>
	);
};

export default PokemonAbility;
