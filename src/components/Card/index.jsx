import { ArrowRight } from "@phosphor-icons/react";
import { Container } from "./style";

export function Card({icon: Icon, title}) {
  
  return (
    <Container>
      <div className="wrapper-icon">
        <div className="icon">
          {<Icon />}
        </div>
        <p>{title}</p>
      </div>
      <div className="icon-arrow">
        <ArrowRight />
      </div>
    </Container>
  )
} 