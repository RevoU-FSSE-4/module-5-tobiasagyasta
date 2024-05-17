# PokeSearch

### Module 5 Assignment for RevoU FSSE Amsterdam

#### By Tobias Agyasta (Team 2)

[Link to Netlify deployment](https://tobys-pokesearch.netlify.app/)

***Warning : Not yet optimized for mobile!***

## Dependencies

- This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
- This project was made with [React](https://react.dev/) and [Typescript](https://www.typescriptlang.org/).
- This project uses [npm](https://www.npmjs.com/) to manage libraries, packages, and modules.
- This project uses [Tailwind CSS](https://github.com/tailwindlabs/tailwindcss) for its css styling.
- This project uses [shadcn](https://ui.shadcn.com/) for UI components.
- This project uses [Lucide](https://lucide.dev/) for its icons.
- This project uses [PokeAPI](https://pokeapi.co/) for fetching the pokemon information and their images.

## How to Open

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the dev build result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

In order to run the production build, you can start by running :

```bash
npm run build
```

then after the building process is finished, you can run

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the production build result.

## About

![App Screenshot](public//PokesearchLogo.svg)

This is a Pokemon search app that gives you detailed information about every Pokemon. This information is fetched using PokeAPI.

The application has the following features:

1. Displaying a pokemon's name, description, type and ID.
2. Displaying a pokemon's stats.
3. Displaying a pokemon's abilities with hover cards that show you the ability description.
4. Dynamic backgrounds based on a pokemon's type.
5. Search functionality and search bar that gives suggestions to the user with Pokemons up to Generation 4 (#493)
6. Left and right browsing buttons to switch through multiple pokemons quickly!

## Findings

This project used some React components I reused from my previous [project](https://github.com/RevoU-FSSE-4/milestone-2-tobiasagyasta). I made this project to also compare the difference between using Vanilla React and Next JS.

By using Next JS rather than React, I noticed some positive differences :

- Automatic caching makes routing simple, quick, and efficient. When I did the React app, I did not implement a caching mechanism so I had to refetch data every time a user traverses to a previous page.
- Simpler route mechanism. I had to use React router before, and with that I had to do more manually complicated things to route pages together.
- In React, I had to use state to check for whether the data has been loaded or not. In Next JS, I didn't need to use state, since getServerSideProps and the SSR mechanism does all of the fetching and loading of the data for you, making development simpler.
