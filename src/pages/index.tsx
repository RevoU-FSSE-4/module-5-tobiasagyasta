import PokemonCard from "@/components/PokemonCard";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<>
			<PokemonCard></PokemonCard>
		</>
	);
}
