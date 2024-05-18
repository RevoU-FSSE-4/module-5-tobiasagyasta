import PokemonCard from "@/components/PokemonCard";
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { useRouter } from "next/router";

export const getServerSideProps = async (context: any) => {
	const { pokemonId } = context.params;

	try {
		const responseSpecies = await fetch(
			`https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`
		);
		if (!responseSpecies.ok) {
			throw new Error("Network response was not ok");
		}
		const pokemonSpeciesData = await responseSpecies.json();
		const responsePokemon = await fetch(
			`https://pokeapi.co/api/v2/pokemon/${pokemonId}`
		);
		if (!responsePokemon.ok) {
			throw new Error("Network response for pokemon was not ok");
		}
		const pokemonData = await responsePokemon.json();
		const stats = pokemonData.stats.map((stat: any) => ({
			name: stat.stat.name,
			base_stat: stat.base_stat,
		}));
		const typeNumbers = pokemonData.types.map((type: any) => {
			const urlParts = type.type.url.split("/");
			return urlParts[urlParts.length - 2]; // Extract the second-to-last part of the URL
		});
		const abilities = pokemonData.abilities.map(
			(ability: any) => ability.ability.name
		);
		const moves = pokemonData.moves
			.filter((move: any) =>
				move.version_group_details.some(
					(versionDetail: any) =>
						versionDetail.version_group.name === "platinum"
				)
			)
			.map((move: any) => ({
				name: move.move.name,
			}))
			.slice(0, 10);

		const { name, id, color, flavor_text_entries } = pokemonSpeciesData;
		const flavorText = flavor_text_entries.find(
			(entry: any) => entry.language.name === "en"
		);

		return {
			props: {
				combinedData: {
					pokemonSpeciesData: {
						name,
						id,
						color,
						flavor_text: flavorText ? flavorText.flavor_text : "",
					},
					pokemonData: {
						stats,
						typeNumbers,
						abilities,
						moves,
					},
				},
			},
		};
	} catch (error) {
		console.error("Failed to fetch Pokémon data:", error);
		return {
			notFound: true,
		};
	}
};

const PokemonPage = ({ combinedData }: any) => {
	const { pokemonSpeciesData, pokemonData } = combinedData;

	const router = useRouter();
	const handlePrevious = () => {
		let previousId = pokemonSpeciesData.id - 1;
		router.push(`${previousId}`);
	};
	const handleNext = () => {
		let nextId = pokemonSpeciesData.id + 1;
		router.push(`${nextId}`);
	};
	return (
		<>
			<div className='w-1/3 flex justify-around mx-auto mt-8'>
				<Button
					variant='outline'
					size='icon'
					className=' bg-slate-200 h-8 w-8'
					onClick={handlePrevious}
				>
					<ChevronLeft className='h-5 w-5' />
				</Button>

				<Button
					variant='outline'
					size='icon'
					className=' bg-slate-200 h-8 w-8 '
					onClick={handleNext}
				>
					<ChevronRight className='h-5 w-5' />
				</Button>
			</div>
			<PokemonCard
				pokemonSpeciesData={pokemonSpeciesData}
				pokemonData={pokemonData}
			/>
			;
		</>
	);
};

export default PokemonPage;
