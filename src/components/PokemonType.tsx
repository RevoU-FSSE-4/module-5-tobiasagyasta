import React from "react";
import Image from "next/image";

const PokemonType = ({ typeNumbers }: any) => {
	return (
		<div className='flex items-start mx-auto '>
			{typeNumbers.map((typeNumber: any) => (
				<Image
					key={typeNumber}
					src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/${typeNumber}.png`}
					alt={`Type ${typeNumber}`}
					width={90}
					height={90}
				/>
			))}
		</div>
	);
};

export default PokemonType;
