import React from "react";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const PokemonCarousel = ({ name, id }: any) => {
	//Need only name and ID
	return (
		<>
			<Carousel className='w-[42%] h-[50%] m-auto'>
				<CarouselContent>
					<CarouselItem>
						<Image
							priority={true}
							src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
							alt='Picture of Pikachu (Front)'
							width={300}
							height={300}
						></Image>
					</CarouselItem>
					<CarouselItem>
						<Image
							unoptimized={true}
							src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${id}.gif`}
							alt='Gif of Pikachu (3D)'
							width={300}
							height={300}
						></Image>
					</CarouselItem>
					<CarouselItem>
						<Image
							unoptimized={true}
							src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`}
							alt='Gif of Pikachu (2D)'
							width={300}
							height={300}
						></Image>
					</CarouselItem>
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</>
	);
};

export default PokemonCarousel;
