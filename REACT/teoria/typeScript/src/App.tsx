import { useState, useEffect } from 'react';
import Game from './Game';
import AdultOrNot from './AdultQuestion';
import { getGamesFromServer, priceWithCurrency } from './utils';
import {GamesFromServer, GameFromServer} from './data' //импорт тип с даты


function App() {
	//<boolean | null>(null) - тип будет булиан или налл
  const [isAdult, setIsAdult] = useState<boolean | null>(null); // есть 18?

  //укажу тоже тип- не обязательно тут- тс и так понял,что булиан
  const [loading, setLoading] = useState<boolean>(true);// статус загрузки для игр

  //передаю тип,что будет массив
  const [games, setGames] = useState<GamesFromServer>([]); // сами игры

  useEffect(() => {
    getGamesFromServer().then((gamesFromServer) => { // отправка запроса на сервер
      setLoading(false); //при успехе запроса -выкл загурзку игры
      setGames(gamesFromServer);  //сохр игры на локал хранилище
    });
  }, []);

  //NonNullable <GameFromServer['tags']> убирает null\undefined из этого типа
  const renderTags = (tags: NonNullable <GameFromServer['tags']>) => {
    return tags.map((tag, index) => (
      <span key={tag + index}>{tag}</span>
    ));
  };

  if (loading) { //если загрузка - выдаст этот див
    return (
      <div>Загружаем игры...</div>
    );
  }

  if (isAdult === null) {
    return (
      <AdultOrNot setIsAdult={setIsAdult} />
    )
  }

  return (
    <div>
     {games.map((game) => (
      <div key={game.id} style={{ border: '1px solid blue' }}>
        Игра:
        {!game.forKids && !isAdult ? (
          <b style={{ color: 'red' }}>Вам не доступна эта игра</b>
        ) : (
          <>
            <Game
              name={game.name}
              description={game.description}
              version={game.version}
            />
			{typeof game.price === 'number' && (
				<>
				Цена: {priceWithCurrency(game.price, game.currensy)}
				</>
			
			)  }

			{game.tags && (
				<>
				Тэги: {renderTags(game.tags)}
				</>
			) }


          </>
        )}
      </div>
     ))}
    </div>
  )
}

export default App
