import React from "react";
import StatSlider from "./ui/stat-slider";

const PokemonStats = ({ stats }: any) => {
	return (
		<>
			<div className='grid grid-cols-3 gap-7 text-center mx-auto '>
				<div>
					<p>HP : </p>
					<StatSlider
						visualParts={[
							{
								percentage: `${stats[0].base_stat}%`,
								color: "#65a30d",
							},
						]}
					></StatSlider>
				</div>
				<div>
					<p>Attack : </p>
					<StatSlider
						visualParts={[
							{
								percentage: `${stats[1].base_stat}%`,
								color: "#FFC000",
							},
						]}
					></StatSlider>
				</div>
				<div>
					<p>Defense : </p>
					<StatSlider
						visualParts={[
							{
								percentage: `${stats[2].base_stat}%`,
								color: "#ea580c",
							},
						]}
					></StatSlider>
				</div>
				<div>
					<p>Sp.Attack : </p>
					<StatSlider
						visualParts={[
							{
								percentage: `${stats[3].base_stat}%`,
								color: "#2563eb",
							},
						]}
					></StatSlider>
				</div>
				<div>
					<p>Sp.Defense : </p>
					<StatSlider
						visualParts={[
							{
								percentage: `${stats[4].base_stat}%`,
								color: "#86198f",
							},
						]}
					></StatSlider>
				</div>
				<div>
					<p>Speed : </p>
					<StatSlider
						visualParts={[
							{
								percentage: `${stats[5].base_stat}%`,
								color: "#db2777",
							},
						]}
					></StatSlider>
				</div>
			</div>
		</>
	);
};

export default PokemonStats;
