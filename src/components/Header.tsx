import { useState } from "react";
import { useRouter } from "next/router";
import data from "../../public/PokemonData.json";
import Image from "next/image";
import Link from "next/link";
const Header = () => {
	const [query, setQuery] = useState<string>("");
	const [queryPokemon, setQueryPokemon] = useState<string>("");
	const [suggestions, setSuggestions] = useState<any>([]);
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const router = useRouter();

	const handleInputChange = (event: any) => {
		const inputValue = event.target.value;
		setQuery(inputValue);
		if (query !== "") {
			setIsOpen(true);
		}

		// Filter countries and capitals based on user input
		const filteredSuggestions = data.filter((pokemon) =>
			pokemon.name
				.trim()
				.toLowerCase()
				.includes(inputValue.trim().toLowerCase())
		);
		const limitedSuggestions = filteredSuggestions.slice(0, 5);
		setSuggestions(limitedSuggestions);
	};
	const handleClick = () => {
		if (queryPokemon !== "") {
			router.push(`/pokemon/${queryPokemon}`);
		}
		setQuery("");
		setQueryPokemon("");
	};

	return (
		<>
			<div className='bg-red-500 flex flex-row justify-evenly items-center '>
				<div>
					<Link href={"/"}>
						<Image
							className='hover:cursor-pointer'
							src={""}
							alt='Pokesearch Logo'
							width={175}
							height={175}
						></Image>
					</Link>
				</div>

				<div className='relative flex flex-col my-2 bg-red-500'>
					<div className=' flex flex-row w-1/3 mx-auto'>
						<input
							type='text'
							value={query}
							onChange={handleInputChange}
							className='text-base w-max h-10 relative ml-1 block flex-auto rounded-s border border-solid border-black bg-white bg-clip-padding px-3 py-[0.25rem]  font-normal leading-[1.6] text-surface outline-none transition duration-200 ease-in-out placeholder:text-neutral-500 focus:z-[3] focus:border-primary focus:shadow-inset focus:outline-none motion-reduce:transition-none '
							placeholder='Search your Pokemon'
						/>
						<button
							className='z-[2] bg-white inline-block rounded-e border-2 border-primary px-2 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-accent-300 hover:bg-gray-300 hover:text-primary-accent-300 focus:border-primary-600 focus:bg-primary-50/50 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 '
							type='button'
							onClick={handleClick}
						>
							Search
						</button>
					</div>

					{query !== "" && suggestions.length !== 0 && isOpen ? (
						<ul className='absolute z-[3] w-[212px] left-28 top-8 mx-auto border border-l border-r border-b border-solid border-neutral-200 text-gray-700 rounded-s bg-white max-h-60 overflow-y-auto'>
							{suggestions.map((suggestion: any, index: number) => (
								<li
									key={index}
									className=' py-2 block text-base hover:bg-gray-100'
									onClick={() => {
										setQuery(`${suggestion.name}`);
										setQueryPokemon(suggestion.id);
										setIsOpen(false);
									}}
								>
									{`${suggestion.name} #${suggestion.id}`}
								</li>
							))}
						</ul>
					) : null}
				</div>
			</div>
		</>
	);
};

export default Header;
