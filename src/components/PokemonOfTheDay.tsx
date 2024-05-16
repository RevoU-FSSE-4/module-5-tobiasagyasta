import React from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import PokemonCarousel from "./PokemonCarousel";
import Image from "next/image";

const PokemonOfTheDay = () => {
	return (
		<>
			<Card className='w-1/3 flex-col items-center text-center mx-auto mt-12  px-12 py-6 bg-yellow-100 '>
				<CardHeader>
					<CardTitle className='mb-3'>Pikachu #025</CardTitle>
					<div className='flex items-start mx-auto '>
						<Image
							className='mx-auto'
							src={
								"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/13.png"
							}
							alt='Pikachu Type'
							width={90}
							height={90}
						></Image>
						<Image
							className='mx-auto'
							src={
								"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/14.png"
							}
							alt='Pikachu Type'
							width={90}
							height={90}
						></Image>
					</div>
					<CardDescription>{`It stores electricity in the electric sacs\non its cheeks. When it releases pent-up\nenergy in a burst, the electric power is\nequal to a lightning bolt.`}</CardDescription>
				</CardHeader>
				<CardContent>
					<PokemonCarousel></PokemonCarousel>
				</CardContent>
				<CardFooter className='flex items-center justify-center text-center'>
					<p>Hello footer!</p>
				</CardFooter>
			</Card>
		</>
	);
};

export default PokemonOfTheDay;
