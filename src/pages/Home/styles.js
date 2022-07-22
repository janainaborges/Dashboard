import styled from "styled-components";


export const Container = styled.div`
padding: 1.8rem;


h1{
    font-weight: 700;
    font-size: 2.5rem;
}
`
export const Content = styled.div`
display: flex;
flex-direction: column ;

`

export const CardConteiner = styled.section`
display: flex;
width: 40%;
justify-content: space-between;
margin: 4rem 0;
gap: 2rem;
`
export const CardItem = styled.article`
justify-content: center;
align-items: center;
height: 10rem;
width: 25rem;
border: 1px solid #bdbdbd;
border-radius: 8px;
display: flex;
flex-direction: column;
font-size: 1.75rem;
font-weight: 300;

span{
    padding: 1rem;
    font-size: 1.75rem;
    font-weight: 700;
}
`

export const GraphicContainer = styled.div`
border: 1px solid #bdbdbd;
border-radius: 5px ;
padding: 2rem 1rem;
h2{
    margin-bottom: 2rem;
}
`