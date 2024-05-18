import { Inter } from "next/font/google";
import PokemonCard from "@/components/PokemonCard";

const inter = Inter({ subsets: ["latin"] });
export const getServerSideProps = async (context: any) => {
	// const randomPokemonId = Math.floor(Math.random() * 493) + 1;
	try {
		const responseSpecies = await fetch(
			`https://pokeapi.co/api/v2/pokemon-species/25`
		);
		if (!responseSpecies.ok) {
			throw new Error("Network response was not ok");
		}
		const pokemonSpeciesData = await responseSpecies.json();
		const responsePokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/25`);
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
			.filter((move: any) =>
				move.version_group_details.some(
					(versionDetail: any) =>
						versionDetail.move_learn_method.name === "level-up"
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

export default function Home({ combinedData }: any) {
	const { pokemonSpeciesData, pokemonData } = combinedData;
	return (
		<>
			<section className='flex flex-col justify-center items-center'>
				<h1 className='font-extrabold leading-10 tracking-tight text-red-600 text-justify mt-8  sm:leading-none text-6xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>
					<span className='inline md:block '>Pokemon of the Day</span>
				</h1>
				<PokemonCard
					pokemonSpeciesData={pokemonSpeciesData}
					pokemonData={pokemonData}
				/>
			</section>
		</>
	);
}
