## Getting Started

First, copy environment variables file.

```
cp .env.example .env
cp template.example.yaml template.yaml
```

Fill in the parameters according to your environment.
And build and deploy to AWS.

```
sam build
sam deploy
```

## dev

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## build and deployment

```
yarn build
yarn deploy
```
