import { useState, useEffect } from "react";
const StatSlider = ({
	visualParts = [{ percentage: "0%", color: "white" }],
}) => {
	const [widths, setWidths] = useState(
		visualParts.map(() => {
			return "0";
		})
	);

	useEffect(() => {
		requestAnimationFrame(() =>
			setWidths(
				visualParts.map((item) => {
					return item.percentage;
				})
			)
		);
	}, [visualParts]);
	return (
		<div className='flex  h-[8px] w-28 mt-2 border border-black bg-white'>
			{visualParts.map((item, index) => {
				return (
					<>
						<div
							key={index}
							style={{ width: widths[index], backgroundColor: item.color }}
							className='transition-[width]'
						></div>
						<p
							className='mt-2 text-center font-extrabold text-xl outline-black'
							style={{
								color: item.color,
							}}
						>
							{item.percentage.replaceAll("%", "")}
						</p>
					</>
				);
			})}
		</div>
	);
};

export default StatSlider;
