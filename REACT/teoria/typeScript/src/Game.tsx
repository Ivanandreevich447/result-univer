 //FC - это тип, предоставляемый React для функциональных компонентов.
 import { FC } from "react";
 import { GameFromServer } from "./data";


 //МОГУ ТАК ИЛИ НИЖЕ ЧЕРЕЗ GameFromServer ['откуда берем']
 //  или  pick


//  type GameProps = {
// 	name: string,
// 	description?: string,
// 	version?: string,
// }

 type GameProps = {
	name: GameFromServer['name'],
	description: GameFromServer['description'],
	version: GameFromServer['version'],
}

// type GameProps = Pick<GameFromServer, 'name' | 'description' | 'version'>

const Game: FC <GameProps> = ({ name, description, version })=>  {
 	return (
	  <div>
	   <p>Имя: {name}</p>
	   <p>Описание: {description}</p>
	   <p>Версия: {version}</p>
	  </div>
	)
  };

  export default Game;
