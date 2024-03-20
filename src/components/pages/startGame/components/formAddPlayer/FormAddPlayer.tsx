import {FC, useState, ChangeEvent} from 'react'
import InputNewPlayer from '../../../../ui/inputs/inputNewPlayer/InputNewPlayer'
import ButtonsNewPlayer from '../../../../ui/buttons/buttonNewPlayer/ButtonsNewPlayer'
import { useAppDispatch, useAppSelector } from '../../../../hooks/hookREdux'
import { addPlayers } from '../../slice/newPlayerSlice'

import Errormessage from '../../../../ui/errorMessage/Errormessage'



const FormAddPlayer:FC = () => {

   const dispatch = useAppDispatch()
   const {error} = useAppSelector( state => state.newPlayerSlice)
  

   const [formError, setFormError] = useState('')
 console.log(formError , error)
   const [inputValue, setInputValue] = useState('')

   const addPlayer = (e:ChangeEvent<HTMLFormElement>)=>{
    e.preventDefault()
    if(inputValue.length >= 2){
      dispatch(addPlayers(inputValue))
      setInputValue('')
      setFormError('')
    }
    else{
      setFormError('Ваш ник должен состоять минимум из 2 букв!')
    }    
     
   }
   const handleOnchangeInput = (e: ChangeEvent<HTMLInputElement>)=>{
   
      setInputValue(e.target.value)
   }
   

  return (
    <form onSubmit={addPlayer}>
      {formError  && <Errormessage>{formError}</Errormessage>}<br/>
      {error  && <Errormessage>{error}</Errormessage>}
      <InputNewPlayer placeholder="Новый игрок" value={inputValue} onChange={handleOnchangeInput} />
      <ButtonsNewPlayer onClick={addPlayer} >Добавить игрока!</ButtonsNewPlayer>
    </form>
  )
}

export default FormAddPlayer
