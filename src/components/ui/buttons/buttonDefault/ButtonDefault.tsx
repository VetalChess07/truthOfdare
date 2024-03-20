import {FC} from 'react';
import { Button, Flex } from 'antd';
import { TypeButtonDefault } from './type';


const ButtonDefault:FC<TypeButtonDefault> = ({children, onClick }) => (
  <Flex wrap="wrap" gap="small" className="site-button-ghost-wrapper">
    <Button onClick={onClick}  type="primary" ghost>
       {children}
    </Button>
   
  </Flex>
);

export default ButtonDefault;