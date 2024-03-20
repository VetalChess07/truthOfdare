import {FC} from 'react'
import TablePlayers from './components/tablePlayers/TablePlayers'
import ButtonsNewPlayer from '../../ui/buttons/buttonNewPlayer/ButtonsNewPlayer'
import FormAddPlayer from './components/formAddPlayer/FormAddPlayer'

const StartGame:FC = () => {
   const onClickNewPlayear = () =>{
      console.log('ff')
   } 

  return (
    <>
      <TablePlayers/>
      <FormAddPlayer/>
    
    </>
  )
}

export default StartGame
