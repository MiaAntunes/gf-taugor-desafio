import { useNavigate } from "react-router-dom";
import { goToPageForm } from "../../router/coordinator";
import { BodyHome, MainHome, TitleHome } from "./HomeStyle";
import { Button } from "@mui/material";

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <BodyHome>
        <header>
          <img
            src="https://www.taugor.com.br/wp-content/uploads/2018/11/marca-taugor.png"
            alt="Logo da empresa"
          />
        </header>
      <MainHome>
          <TitleHome>Bem vindo ao site de cadastro de funcionários .</TitleHome>
          <Button onClick={() => goToPageForm(navigate)} variant="contained">
            Cadastre agora
          </Button>
      </MainHome>
    </BodyHome>
  );
};
