import {FC, useState} from 'react'
import { useAppDispatch, useAppSelector } from '../../../../hooks/hookREdux'
import { selectNewPlayers } from '../../slice/newPlayerSlice'



const TablePlayers:FC = () => {
  const { players } = useAppSelector(state => state.newPlayerSlice);
   console.log(players)
 
  const minPlayers = players.length < 2 ? true : false
  const messageMinPlayers = `Щас вас ${players.length} из 2`

 
  return (
    <div>
      {
        minPlayers
        ?<h2>Добавь игрока! Вас должно быть хотябы 2 штука <br /> {minPlayers && messageMinPlayers }   </h2>
        : ''
        
      }
    {
      players.map(player =>
            <li key={player.id}>{player.name}</li>
          )
    }

    </div>
  )
}

export default TablePlayers
