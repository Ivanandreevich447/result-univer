import { GAMES, GamesFromServer, GameFromServer, Currency } from "./data";

export function getGamesFromServer(): Promise<GamesFromServer> {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(GAMES);
		}, 1000);
	});
}

export function priceWithCurrency(
	price: NonNullable<GameFromServer["price"]>,
	currency: GameFromServer["currensy"]
) {

	if(currency === Currency.RUB){
		return `${price} руб`
	}
	else if(currency === Currency.EUR) {
		return `${price} евро`
	}
	else{
		 return `${price} $`
	}
}
