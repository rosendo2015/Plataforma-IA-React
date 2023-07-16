import { Container } from "./style";

export function Button({icon: Icon}){
  return(
    <Container>
      {<Icon />}
    </Container>
  )
}