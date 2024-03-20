import { ReactNode, ChangeEvent  } from "react"

export type TypeInputNewPlayerProps ={
   placeholder?: string
   onChange:(value: ChangeEvent<HTMLInputElement>) => void;
   value: string
} 