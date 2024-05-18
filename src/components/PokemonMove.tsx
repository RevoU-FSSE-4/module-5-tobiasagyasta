import React, { useState, useEffect } from "react";
import { Skeleton } from "./ui/skeleton";

interface PokemonMoveProps {
	moveName: string;
}

const PokemonMove: React.FC<PokemonMoveProps> = ({ moveName }) => {
	const [move, setMove] = useState<any>(null);
	const [loading, setLoading] = useState(true);

	const fetchMove = async () => {
		try {
			const res = await fetch(`https://pokeapi.co/api/v2/move/${moveName}/`);
			const data = await res.json();
			const effectEntry = data.effect_entries.find(
				(entry: any) => entry.language.name === "en"
			);
			const flavorTextEntry = data.flavor_text_entries.find(
				(entry: any) =>
					entry.version_group.name === "platinum" &&
					entry.language.name === "en"
			);
			return {
				power: data.power,
				accuracy: data.accuracy,
				damageClass: data.damage_class.name,
				type: data.type.name,
				effect: effectEntry
					? effectEntry.effect
					: "No effect description available.",
				flavorText: flavorTextEntry
					? flavorTextEntry.flavor_text
					: "No flavor text available",
			};
		} catch (error) {
			console.error("Error fetching ability data:", error);
			return {
				name: moveName,
				effect: "Failed to fetch ability description.",
			};
		}
	};

	useEffect(() => {
		const getMove = async () => {
			const fetchedMove = await fetchMove();
			setMove(fetchedMove);
			setLoading(false);
		};
		getMove();
	}, [moveName]);

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

	if (!move) {
		return <div>No move data available.</div>;
	}
	return (
		<div>
			<h1 className='text-xl font-bold mb-2'>
				{moveName.charAt(0).toUpperCase() + moveName.slice(1)}
			</h1>
			<p>Power : {move.power}</p>
			<p>Accuracy : {move.accuracy}</p>
			<p>Type : {move.type.charAt(0).toUpperCase() + move.type.slice(1)}</p>
			<p>
				Damage Class :{" "}
				{move.damageClass.charAt(0).toUpperCase() + move.damageClass.slice(1)}
			</p>
			<p>Effect : {move.effect}</p>
			<p>Flavor Text : {move.flavorText}</p>
		</div>
	);
};

export default PokemonMove;
