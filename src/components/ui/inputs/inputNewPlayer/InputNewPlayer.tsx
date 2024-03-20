import {FC,ChangeEvent} from 'react'
import { TypeInputNewPlayerProps } from './type'

import { Input } from 'antd'

const InputNewPlayer:FC<TypeInputNewPlayerProps> = ({placeholder, onChange, value}) => {

 
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e); 
  };

  return (
    <>
    
    <Input placeholder={placeholder} value={value} onChange={handleChange} />
   
    </>
  )
}

export default InputNewPlayer
