import styled from "styled-components";

export const SectionDetailsPerson = styled.section`
  padding: 1em 0;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const TitleDetailsPerson = styled.h2`
  font-family: "Montserrat", sans-serif;
  margin-top:.5em;
`;

export const ContainerFormsDetailsPerson = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 800px) {
    width: 100%;
  }

  @media screen and (min-width: 801px) and (max-width: 1200px) {
    height: 7vh;
  }

  @media screen and (min-width: 1201px) and (max-width: 2000px) {
    width: 80%;
  }

  @media screen and (min-width: 2001px) {
    width: 60%;
  }
`;

export const ArticleOneDetailsPerson = styled.article`
  display: flex;
  justify-content: space-between;
  gap: 1em;
`;
export const ContainerPhotoDetailsPerson = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-between;
  align-items: center;
`;

export const SubtitlePhoto = styled.h3`
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 1em;
`

export const ContainerUploadInput = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  justify-content: center;
  height: 100%;
  gap: 1em
`

export const ArticleThreeDetailsPerson = styled.article`
  display: flex;
  justify-content: space-between;
`;


// no span do 1 container fazer u switch
/*
   if(props === ""){
    // colocar a foto cinza do bonequinho
   }else{
    //photo vai ser do que foi colocado como upload
   }
 
*/
