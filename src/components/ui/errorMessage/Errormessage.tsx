import {FC} from 'react'


import { TypeErrorMessageProps } from './type'
import style from './errorMessage.module.scss'


const Errormessage:FC<TypeErrorMessageProps> = ({children}) => {

  return (
    <span className={style.error}>
      {children}
    </span>
  )
}

export default Errormessage
