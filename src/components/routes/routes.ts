import StartGame from "../pages/startGame/StartGame"
import Game from "../pages/Game/Game"
import NotFound from "../pages/notFound/NotFound"

export const arrRoutes = [
   {
      path: "/StartGame",
      component : StartGame
   },
   {
      path: "/Game",
      component : Game
   },
   {
      path: "/*",
      component : NotFound
   }
] 