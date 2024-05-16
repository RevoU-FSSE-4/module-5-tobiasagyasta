import React from "react";
import StatSlider from "./ui/stat-slider";

const PokemonStats = () => {
	return (
		//Need all stats
		<>
			<div className='grid grid-cols-3 gap-7 text-center mx-auto '>
				<div>
					<p>HP : </p>
					<StatSlider
						visualParts={[
							{
								percentage: "35%",
								color: "#84cc16",
							},
						]}
					></StatSlider>
				</div>
				<div>
					<p>Attack : </p>
					<StatSlider
						visualParts={[
							{
								percentage: "55%",
								color: "#eab308",
							},
						]}
					></StatSlider>
				</div>
				<div>
					<p>Defense : </p>
					<StatSlider
						visualParts={[
							{
								percentage: "40%",
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
								percentage: "50%",
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
								percentage: "50%",
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
								percentage: "90%",
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
