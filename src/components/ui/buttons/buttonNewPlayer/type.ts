import { ReactNode,ChangeEvent } from "react"

export type TypeButtonsNewPlayer ={
   children: ReactNode,
   onClick?: (e:ChangeEvent<HTMLFormElement> | any)=> void
}