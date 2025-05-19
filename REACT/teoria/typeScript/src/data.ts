export const enum Currency {
	RUB = 'RUB',
	EUR = 'EUR',
	USD = 'USD'
}


export type GameFromServer = {
	id: number;
	name: string;
	description?: string;
	version?: string;
	price?: number;
	tags?: string[];
	forKids: boolean;
	currensy: Currency
};

// export type GameTags = Pick<GameFromServer, 'tags'>

export type GamesFromServer = GameFromServer[];

export const GAMES: GamesFromServer = [
	{
		id: 1,
		name: "Мортал Комбат",
		description: "Голые мужчины дерутся с другими голыми мужчинами",
		version: "X",
		price: 1000,
		tags: ["Бои", "Кровь"],
		forKids: false,
		currensy: Currency.EUR
	},
	{
		id: 2,
		name: "Гонки какие-то",
		price: 700,
		forKids: true,
		currensy: Currency.RUB,
		
		tags: ["Машины", "Драйв", "СтритРейсинг"],

	},
	{
		id: 3,
		name: "FIFA",
		description: "Много человек бегает за мячиком по огромному полю",
		forKids: true,
		currensy: Currency.USD

	},
];
