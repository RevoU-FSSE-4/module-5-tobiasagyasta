import PokemonOfTheDay from "@/components/PokemonOfTheDay";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<>
			<PokemonOfTheDay></PokemonOfTheDay>
		</>
	);
}
