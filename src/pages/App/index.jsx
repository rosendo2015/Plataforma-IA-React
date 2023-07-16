import "./styles.js"
import { Container } from "./styles"
import { Card } from "../../components/Card"
import { Code, ImageSquare, PlayCircle, MusicNoteSimple, MagicWand, PaperPlaneRight } from "@phosphor-icons/react"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input/index.jsx"
export function App() {
  return (
    <Container>
      <div>
        <div className="topo">
          <Button icon={MagicWand}/>
        </div>
        <h1>Experimente o poder da Inteligência Artificial </h1>
        <Card icon={Code} title="Gerador de códigos" />
        <Card icon={ImageSquare} title="Edição de foto" />
        <Card icon={PlayCircle} title="Geração de vídeos" />
        <Card icon={MusicNoteSimple} title="Criador de áudios e musicas " />
        
        <div className="wrapper-input">
          <Input />
          <Button icon={PaperPlaneRight}/>
        </div> 
      </div>
     
    
    </Container>
  )
}