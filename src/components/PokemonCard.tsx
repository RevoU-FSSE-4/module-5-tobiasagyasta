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

const PokemonCard = () => {
	return (
		<>
			<Card className='w-1/3 flex-col items-center text-center mx-auto mt-12  px-12 py-6 bg-yellow-100 '>
				<CardHeader>
					<CardTitle className='mb-3'>Pikachu #025</CardTitle>
					<PokemonType></PokemonType>
					<CardDescription>{`It stores electricity in the electric sacs\non its cheeks. When it releases pent-up\nenergy in a burst, the electric power is\nequal to a lightning bolt.`}</CardDescription>
				</CardHeader>
				<CardContent>
					<PokemonCarousel></PokemonCarousel>
				</CardContent>
				<CardFooter className='flex items-center justify-center text-center'>
					<PokemonStats></PokemonStats>
				</CardFooter>
			</Card>
		</>
	);
};

export default PokemonCard;
