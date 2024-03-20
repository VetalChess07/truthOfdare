import {FC} from 'react'
import { Button } from 'antd';

import { TypeButtonSubmitProps } from './type';

const ButtonSubmin:FC<TypeButtonSubmitProps> = ({children}) => {
  return (
  
      <Button  type="primary">{children}</Button>
   
  )
}

export default ButtonSubmin
