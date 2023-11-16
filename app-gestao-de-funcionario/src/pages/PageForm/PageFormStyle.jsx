import styled from "styled-components";

export const HeaderPageForm = styled.header`
  display: flex;
  align-items: center;
  border-bottom: 5px solid rgba(37, 129, 196, 0.80);

  @media screen and (max-width: 800px) {
    width: 100%;
  }

  @media screen and (min-width: 801px) and (max-width: 1200px) {
    height: 7vh;
  }

  @media screen and (min-width: 1201px) and (max-width: 2000px) {
    height: 10vh;
    width: 100%;
    padding: 1em;
    overflow: hidden;
  }

  @media screen and (min-width: 2001px) {
    height: 10vh;
    width: 100%;
    padding: 1em;
    overflow: hidden;
  }
`;

export const ImgHeader = styled.img`
  @media screen and (max-width: 800px) {
    width: 100%;
  }

  @media screen and (min-width: 801px) and (max-width: 1200px) {
    height: 7vh;
  }

  @media screen and (min-width: 1201px) and (max-width: 2000px) {
    width: 12em;
  }

  @media screen and (min-width: 2001px) {
    width: 12em;
  }
`;

export const SpanHeader = styled.span`
  display: flex;
  gap: .4em;
`

export const ParagraphOneHeader = styled.p`
  font-family: "Montserrat", sans-serif;
`;

export const ParagraphTwoHeader = styled.p`
  font-family: "Montserrat", sans-serif;
  font-weight: bolder;
`;

export const MainPageForm = styled.main`
  display: flex;
  justify-content: space-between;
  min-height: 90vh;
`;

export const ContainerForms = styled.div`
  justify-content: center;
  display: flex;
  border-right: 10px solid #b6b6b62d;
  width: 50%;
`

export const Form = styled.form `
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  align-items: center;
`
export const ContainerTextForm = styled.div`
  width: 60%;
  padding: 1em;
`

export const SubtitleForm = styled.h2`
    font-family: "Arial", sans-serif;
    margin-bottom: .5em ;
`

export const TextForm = styled.p`
    font-family: "Montserrat", sans-serif;

`

export const ComponentDinamic = styled.div`
  display: flex;
  justify-content: center;
  min-height: 80vh;
`

export const ContainerButton = styled.div`
 display: flex;
 justify-content: space-between;
 width: 50%;
 margin-bottom: 3em;
`

export const ContainerViewPdf = styled.div`
  width: 50%;
  min-height: 90vh;

`