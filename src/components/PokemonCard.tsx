import React from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import PokemonStats from "./PokemonStats";
import PokemonCarousel from "./PokemonCarousel";
import PokemonType from "./PokemonType";
import colordata from "../../public/PokemonColors.json";

const PokemonCard = ({ pokemonSpeciesData, pokemonData }: any) => {
	if (!pokemonSpeciesData && !pokemonData) {
		return <div>Loading...</div>;
	}
	console.log(pokemonSpeciesData);
	console.log(pokemonData);
	const getColorHexByName = (colorName: string) => {
		const color = colordata.find((color) => color.name === colorName);
		return color ? color.color : null;
	};

	const backgroundColor = getColorHexByName(pokemonSpeciesData.color.name);
	const textColor = backgroundColor === "#111827" ? "text-white" : "text-black";

	return (
		<>
			<Card
				className={`w-1/3 flex-col items-center text-center mx-auto mt-12  px-12 py-6`}
				style={{ backgroundColor: backgroundColor ?? "white" }}
			>
				<CardHeader>
					<CardTitle className={`mb-3 ${textColor}`}>
						{pokemonSpeciesData.name.charAt(0).toUpperCase() +
							pokemonSpeciesData.name.slice(1)}{" "}
						#{pokemonSpeciesData.id}
					</CardTitle>
					<PokemonType typeNumbers={pokemonData.typeNumbers}></PokemonType>
					<CardDescription className={`${textColor}`}>
						{pokemonSpeciesData.flavor_text.replaceAll(`\f`, " ") ?? null}
					</CardDescription>
				</CardHeader>
				<CardContent>
					<PokemonCarousel id={pokemonSpeciesData.id}></PokemonCarousel>
				</CardContent>
				<CardFooter
					className={`flex items-center justify-center text-center ${textColor}`}
				>
					<PokemonStats stats={pokemonData.stats}></PokemonStats>
				</CardFooter>
			</Card>
		</>
	);
};

export default PokemonCard;
