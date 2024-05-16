import React from "react";
import Image from "next/image";

const PokemonType = () => {
	return (
		<div className='flex items-start mx-auto '>
			<Image
				src={
					"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/13.png"
				}
				alt='Pikachu Type'
				width={90}
				height={90}
			></Image>
		</div>
	);
};

export default PokemonType;
