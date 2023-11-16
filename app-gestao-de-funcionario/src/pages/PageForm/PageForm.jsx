import { DetailsEmployee } from "../../components/DetailsEmployee/DetailsEmployee";
import { DetailsPerson } from "../../components/DetailsPerson/DetailsPerson";
import { useForm } from "../../hooks/useForm";
import { useFormInput } from "../../hooks/useFormInput";
import { UpdateEmployee } from "../../components/UpdateEmployee/UpdateEmployee";
import { getDatabase, ref, set, update } from "firebase/database";
import { initializeApp } from "firebase/app";
import { Alert, Button } from "@mui/material";
import {
  ComponentDinamic,
  ContainerButton,
  ContainerForms,
  ContainerTextForm,
  ContainerViewPdf,
  Form,
  HeaderPageForm,
  ImgHeader,
  MainPageForm,
  ParagraphOneHeader,
  ParagraphTwoHeader,
  SpanHeader,
  SubtitleForm,
  TextForm,
} from "./PageFormStyle";
import { useContext } from "react";
import { GlobalContext } from "../../components/context/GlobalContext";
import { AppPdf } from "../../components/AppPdf/AppPdf";


export const PageForm = () => {
  const { form, onChange } = useFormInput({
    name: "",
    lastName: "",
    photo: "",
    jobPosition: "",
    address: "",
    phone: "",
    email: "",
    nationality: "",
    dateOfBirthday: "",

    admissionDate: "",
    sector: "",
    salary: "",
    experience: "",

    promoteTheEmployee: 0,
    datePromotion: "",
    dateDismiss: "",
  });

  const formComponents = [
    <DetailsPerson
      onChange={onChange}
      name={form.name}
      lastName={form.lastName}
      photo={form.photo}
      jobPosition={form.jobPosition}
      address={form.address}
      phone={form.phone}
      email={form.email}
      nationality={form.nationality}
      dateOfBirthday={form.dateOfBirthday}
    />,

    <DetailsEmployee
      onChange={onChange}
      admissionDate={form.admissionDate}
      sector={form.sector}
      salary={form.salary}
      experience={form.experience}
    />,

    <UpdateEmployee
      onChange={onChange}
      datePromotion={form.datePromotion}
      promoteTheEmployee={form.promoteTheEmployee}
      dateDismiss={form.dateDismiss}
    />,
  ];

  const {
    currentStep,
    currentComponents,
    onChangeStep,
    isLastStep,
    isFirstStep,
    isLoadingForm,
  } = useForm(formComponents);

  const employee_data = {
    name: form.name,
    lastName: form.lastName,
    photo: form.photo,
    jobPosition: form.jobPosition,
    address: form.address,
    phone: form.phone,
    email: form.email,
    nationality: form.nationality,
    dateOfBirthday: form.dateOfBirthday,
    dateAdmission: form.admissionDate,
    sector: form.sector,
    salary: form.salary,
    experience: form.experience,
    promoteTheEmployee: form.promoteTheEmployee,
    datePromotion: form.datePromotion,
    dateDismiss: form.dateDismiss,
  };

  let error = "";

  const onSubmitForms = (event) => {
    event.preventDefault();

  };

  return (
    <div>
      <HeaderPageForm>
        <ImgHeader
          src="https://www.taugor.com.br/wp-content/uploads/2018/11/marca-taugor.png"
          alt=""
        />
        <div>
          <SpanHeader>
            <ParagraphOneHeader>Etapas</ParagraphOneHeader>
            {currentStep === 0 && <ParagraphOneHeader>1</ParagraphOneHeader>}
            {currentStep === 1 && <ParagraphOneHeader>2</ParagraphOneHeader>}
            {currentStep === 2 && <ParagraphOneHeader>3</ParagraphOneHeader>}
            <ParagraphOneHeader>de 3</ParagraphOneHeader>
          </SpanHeader>
          {currentStep === 0 && (
            <div>
              <ParagraphTwoHeader>Informações de Contato</ParagraphTwoHeader>
            </div>
          )}
          {currentStep === 1 && (
            <div>
              <ParagraphTwoHeader>
                Informações do Funcionário
              </ParagraphTwoHeader>
            </div>
          )}
          {currentStep === 2 && (
            <div>
              <ParagraphTwoHeader>Atualizações do Cargo</ParagraphTwoHeader>
            </div>
          )}
        </div>
      </HeaderPageForm>
      <MainPageForm>
        <ContainerForms>
          <Form onSubmit={(event) => onSubmitForms(event)}>
            <ContainerTextForm>
              <SubtitleForm>Fale-nos um pouco sobre você</SubtitleForm>
              <TextForm>
                Diga quem você é, como os empregadores podem entrar em contato
                com você e qual sua profissão.
              </TextForm>
            </ContainerTextForm>
            <ComponentDinamic>{currentComponents}</ComponentDinamic>
            {
            error !== "" &&
            (
              <Alert severity="error">{error}</Alert>
            )
            }
            <ContainerButton>
              <Button
                onClick={() => {
                  if (!isFirstStep) {
                    onChangeStep(currentStep - 1);
                    console.log("anterior", currentStep);
                  }
                }}
                variant="outlined"
              >
                Voltar
              </Button>
              {isLastStep ? (
                <Button type="submit" variant="contained">
                  Enviar e Visualizar pdf
                </Button>
              ) : (
                <Button
                  type="submit"
                  onClick={() => onChangeStep(currentStep + 1)}
                  variant="contained"
                >
                  Próximo
                </Button>
              )}
            </ContainerButton>
          </Form>
        </ContainerForms>
        <ContainerViewPdf>
          <AppPdf employee={employee_data} />
        </ContainerViewPdf>
      </MainPageForm>
    </div>
  );
};
