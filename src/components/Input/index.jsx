import { PlusCircle } from '@phosphor-icons/react'
import {Container} from './style'
export function Input(){
  return(
    <Container>
      <PlusCircle />
      <input type="text" placeholder='Envie uma mensagem ou digite “/” para exibir os comandos '/>    
    </Container>
  )
}