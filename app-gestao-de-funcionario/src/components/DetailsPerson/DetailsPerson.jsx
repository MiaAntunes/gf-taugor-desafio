import { AiFillCalendar } from "react-icons/ai";
import { useFormInput } from "../../hooks/useFormInput";
import { Avatar, Button, TextField } from "@mui/material";
import * as React from "react";
import { styled } from "@mui/material/styles";
import {
  ArticleOneDetailsPerson,
  ArticleThreeDetailsPerson,
  ContainerFormsDetailsPerson,
  ContainerPhotoDetailsPerson,
  SectionDetailsPerson,
  SubtitlePhoto,
  TitleDetailsPerson,
  ContainerUploadInput,
} from "./DetailsPersonStyle";
import Box from "@mui/material/Box";

export const DetailsPerson = (props) => {
  const {
    onChange,
    name,
    lastName,
    photo,
    jobPosition,
    address,
    phone,
    email,
    nationality,
    dateOfBirthday,
  } = props;

  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 4,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  return (
    <SectionDetailsPerson>
      <TitleDetailsPerson>Informações de Contato </TitleDetailsPerson>
      <ContainerFormsDetailsPerson>
        <ArticleOneDetailsPerson>
          {/* ! container 1 */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              "& .MuiTextField-root": { width: "30ch" },
              gap: ".1em",
            }}
          >
            <TextField
              type="text"
              name="name"
              value={name}
              onChange={onChange}
              id="filled-basic"
              label="Nome"
              variant="filled"
              sx={{ m: 2, width: "35ch" }}
              helperText="Ex: Fulano"
              required
            />
            <TextField
              id="filled-basic"
              label="Sobrenome"
              variant="filled"
              type="text"
              name="lastName"
              value={lastName}
              onChange={onChange}
              sx={{ m: 2, width: "35ch" }}
              helperText="Ex: Silva"
              required
            />
          </Box>
          <ContainerPhotoDetailsPerson>
            <div>
              {photo ===
              "" ? (
                <Avatar
                  sx={{ width: "5em", height: "7em" }}
                  style={{ backgroundColor: "rgba(32, 114, 173, 0.605)", border:"1px solid #c3b6b624" }}
                  variant="rounded"
                  src="/broken-image.jpg"
                />
              ) : (
                <Avatar
                  sx={{ width: "5em", height: "7em" }}
                  style={{ backgroundColor: "rgba(32, 114, 173, 0.605)" , border:"1px solid #c3b6b624"}}
                  variant="rounded"
                  src={photo}
                />
              )}
              {console.log(photo)}
            </div>
            <ContainerUploadInput>
              {/* TODO: COMO FAZER PARA QUE APARECE QUE A IMAGEM ESTÁ CARREGADA */}
              <SubtitlePhoto>Foto de Perfil</SubtitlePhoto>
              <Button component="label" variant="outlined" sx={{ width: "auto", height: "3em", fontSize:".7em", overflow:"hidden",textAlign:"center" }}>
                Upload image
                <VisuallyHiddenInput
                  type="file"
                  name="photo"
                  accept="*"
                  onChange={onChange}
                  required
                />
              </Button>
            </ContainerUploadInput>
          </ContainerPhotoDetailsPerson>
        </ArticleOneDetailsPerson>
        <article>
          {/* container 2 */}
          <div>
            <TextField
              id="filled-basic"
              type="text"
              name="jobPosition"
              value={jobPosition}
              onChange={onChange}
              label="Emprego"
              variant="filled"
              fullWidth
              sx={{ m: 2 }}
              helperText="Ex: Desenvolvedor Back end"
              required
            />
          </div>
          <div>
            <TextField
              id="filled-basic"
              type="text"
              name="address"
              value={address}
              onChange={onChange}
              label="Endereço"
              variant="filled"
              fullWidth
              sx={{ m: 2 }}
              helperText="Ex: Joao Costa, 1234 - São Paulo,SP"
              required
            />
          </div>
        </article>
        <ArticleThreeDetailsPerson>
          {/* container 3 */}
          <div>
            {/* container 3 - 1  Display flex */}
            <TextField
              id="filled-basic"
              label="Telefone"
              variant="filled"
              type="number"
              name="phone"
              value={phone}
              onChange={onChange}
              sx={{ m: 2, width: "35ch" }}
              helperText="Ex: 1891001900"
              required
            />
            <TextField
              id="filled-basic"
              label="Email"
              variant="filled"
              type="email"
              name="email"
              value={email}
              onChange={onChange}
              sx={{ m: 2, width: "35ch" }}
              helperText="Ex: fulano@gmail.com"
              required
            />
          </div>
          <div>
            {/* container 3 - 2 display flex */}
            <TextField
              id="filled-basic"
              label="Nacionalidade"
              variant="filled"
              type="text"
              name="nationality"
              value={nationality}
              onChange={onChange}
              sx={{ m: 2, width: "35ch" }}
              helperText="Ex: Brasileiro"
              required
            />
            <TextField
              id="filled-basic"
              label="Data de Nascimento"
              variant="filled"
              type="date"
              name="dateOfBirthday"
              value={dateOfBirthday}
              onChange={onChange}
              InputLabelProps={{
                shrink: true,
              }}
              sx={{ m: 2, width: "35ch" }}
              helperText="Ex: 03/02/2000"
              required
            />
          </div>
        </ArticleThreeDetailsPerson>
      </ContainerFormsDetailsPerson>
    </SectionDetailsPerson>
  );
};
