import React from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "@/components/ui/hover-card";
import PokemonStats from "./PokemonStats";
import PokemonCarousel from "./PokemonCarousel";
import PokemonType from "./PokemonType";
import PokemonAbility from "./PokemonAbility";
import PokemonMove from "./PokemonMove";
import colordata from "../../public/PokemonColors.json";
import { Separator } from "@radix-ui/react-separator";

const PokemonCard = ({ pokemonSpeciesData, pokemonData }: any) => {
	if (!pokemonSpeciesData && !pokemonData) {
		return <div>Loading...</div>;
	}
	const getColorHexByName = (colorName: string) => {
		const color = colordata.find((color) => color.name === colorName);
		return color ? color.color : null;
	};

	const backgroundColor = getColorHexByName(pokemonSpeciesData.color.name);
	const textColor = backgroundColor === "#111827" ? "text-white" : "text-black";
	const pokemonName =
		pokemonSpeciesData.name.charAt(0).toUpperCase() +
		pokemonSpeciesData.name.slice(1);

	return (
		<>
			<Card
				className={`w-1/3 flex-col items-center text-center mx-auto mt-12 border border-slate-900 px-12 py-6`}
				style={{ backgroundColor: backgroundColor ?? "white" }}
			>
				<CardHeader>
					<CardTitle className={`mb-3 ${textColor} text-4xl`}>
						{pokemonName} #{pokemonSpeciesData.id}
					</CardTitle>
					<PokemonType typeNumbers={pokemonData.typeNumbers}></PokemonType>
					<CardDescription className={`${textColor}`}>
						{pokemonSpeciesData.flavor_text.replaceAll(`\f`, " ") ?? null}
					</CardDescription>
				</CardHeader>
				<CardContent>
					<PokemonCarousel
						id={pokemonSpeciesData.id}
						name={pokemonName}
					></PokemonCarousel>
				</CardContent>
				<PokemonStats stats={pokemonData.stats}></PokemonStats>
				<Separator></Separator>
				<h1 className='mt-12 mb-2 font-bold text-xl'>Abilities </h1>
				<Separator></Separator>
				<CardFooter
					className={`flex flex-col items-start justify-start ${textColor}`}
				>
					<div className='flex flex-col'>
						{pokemonData.abilities.map((ability: any, index: number) => (
							<div key={index} className='my-2 flex  justify-start'>
								<HoverCard>
									<HoverCardTrigger>
										<span className='font-semibold hover:underline'>
											{index + 1}
											{". "}
											{(
												ability.charAt(0).toUpperCase() + ability.slice(1)
											).replaceAll("-", " ")}
										</span>
									</HoverCardTrigger>
									<HoverCardContent>
										<PokemonAbility abilityName={ability}></PokemonAbility>
									</HoverCardContent>
								</HoverCard>
							</div>
						))}
					</div>
					<Separator></Separator>
					<h1 className='text-center mx-auto mt-12 mb-2 font-bold text-xl'>
						Moves{" "}
					</h1>
					<Separator></Separator>
					<div className='grid grid-rows-5 grid-flow-col justify-center items-center gap-3 mx-auto'>
						{pokemonData.moves.map((move: any, index: number) => (
							<div key={index} className='my-2   justify-start'>
								<HoverCard>
									<HoverCardTrigger>
										<span className='font-semibold hover:underline'>
											{index + 1}
											{". "}
											{(
												move.name.charAt(0).toUpperCase() + move.name.slice(1)
											).replaceAll("-", " ")}
										</span>
									</HoverCardTrigger>
									<HoverCardContent>
										<PokemonMove moveName={move.name}></PokemonMove>
									</HoverCardContent>
								</HoverCard>
							</div>
						))}
					</div>
				</CardFooter>
			</Card>
		</>
	);
};

export default PokemonCard;
