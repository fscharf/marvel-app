# Marvel App
Marvel App is a React application made with TypeScript, you can browse characters, navigate through pages or search by hero name. 

![Wallpaper](https://i.imgur.com/xuwxa26.png)

## Technologies
- React
- Next.js
- TypeScript
- Axios
- styled-components
- Prettier + Eslint

## Requirements 
Yarn v1.22+

## Installation
- Run `yarn install` to install dependencies
- Create `.env.local` file in root directory with following variables:

```
NEXT_PUBLIC_API_URL=https://gateway.marvel.com:443/v1/public
NEXT_PUBLIC_PUBLIC_KEY=
NEXT_PUBLIC_PRIVATE_KEY=
```

Where `NEXT_PUBLIC_PUBLIC_KEY` is your **public key** and `NEXT_PUBLIC_PRIVATE_KEY` is your **private key**.

In order to get these keys, you need to create an account at [Marvel API](https://developer.marvel.com/)

## Start
Run `yarn dev` to start development server. Browse to `https://localhost:3000` and see the magic flowing. ✨

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
