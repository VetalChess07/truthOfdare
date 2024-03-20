import {FC} from 'react'
import { Button } from 'antd';

import { TypeButtonsNewPlayer } from './type';

const ButtonsNewPlayer:FC<TypeButtonsNewPlayer> = ({children, onClick}) => {
  return (
    <>
      <Button onClick={onClick} type="primary">{children}</Button>
    </>
  )
}

export default ButtonsNewPlayer
