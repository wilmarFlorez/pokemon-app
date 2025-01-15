# Pokemon app

- [Nextjs 15 with App Router](https://nextjs.org/docs/app/building-your-application/routing)
- [TailwindCSS](https://tailwindcss.com/)
- [React Query](https://react-query.tanstack.com/)


## Getting Started

First, install dependencies with yarn:

```bash
yarn install
```

Second, create .env.local file:

```bash
touch .env.local
```

And add the following content to it:

```bash
NEXT_PUBLIC_API_BASE_URL="https://pokeapi.co/api/v2"
```

Third one, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## PokéApi

- API Docs: (https://pokeapi.co/)


### Features
- **List pokemons**:
- **Pokemon detail view**: Core library for building the UI.
- **Filter pokemons by type**: A lightweight state management library.

## Running Tests

### Unit Tests
To run unit tests:
```bash
yarn test
```

## Important Libraries

### Core Libraries
- **Next.js**: The React framework used for building the application.
- **React**: Core library for building the UI.
- **Zustand**: A lightweight state management library.

### Testing Libraries
- **Jest**: JavaScript testing framework for unit tests.
- **Testing Library (React/DOM)**: Testing utilities for React components.

### Code Quality
- **ESLint**: Linter for maintaining code quality.
- **Prettier**: Code formatter for consistent styling.

### Styling
- **TailwindCSS**: Utility-first CSS framework.

### Linting Code
Run ESLint to check for issues:
```bash
yarn lint
```