import styled from "styled-components"
import Pesquisa from "./Pesquisa"
import Banner from "./Banner"
import Atividades from "./Atividades"
import Depoimentos from "./Depoimentos"

const Container = styled.section`
display: flex;
flex-direction: column;
align-items: center;
`

export default function PaginaInicial (){
    return (
        <>
        <Banner />
            <Container>
                <Pesquisa />
                <Atividades />
                <Depoimentos />
            </Container >
        </>
    )
}