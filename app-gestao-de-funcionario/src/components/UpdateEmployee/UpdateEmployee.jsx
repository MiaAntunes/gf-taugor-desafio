import { useState } from "react";
import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { FormHelperText, TextField } from "@mui/material";
import { useFormControl } from "@mui/material/FormControl";
import { useFormInput } from "../../hooks/useFormInput";
import { ArticleUpdateEmployee, FieldsetUpdateEmployee, LegendFieldset, SectionUpdateEmployee,TitleUpdateEmployee } from "./UpdateEmployeeStyle";

export const UpdateEmployee = (props) => {
  const [promote, setPromote] = useState(false);
  const [dismiss, setDismiss] = useState(false);

  const { onChange, promoteTheEmployee, dateDismiss, datePromotion } = props;

  const radioPromote = (element) => {
    console.log(element);
    setPromote(element);
  };

  const radioDismiss = (element) => {
    setDismiss(element);
  };


  return (
    <SectionUpdateEmployee>
      <TitleUpdateEmployee>Atualizações do Funcionário</TitleUpdateEmployee>
      <ArticleUpdateEmployee>
          <FieldsetUpdateEmployee>
            <LegendFieldset>Promover o funcionário?</LegendFieldset>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value={true}
                onChange={() => radioPromote(true)}
                control={<Radio />}
                label="Sim"
              />
              <FormControlLabel
                value={false}
                onChange={() => radioPromote(false)}
                control={<Radio />}
                label="Não"
              />
            </RadioGroup>

            {promote === true ? (
              <div>
                <TextField
                  type="text"
                  name="promoteTheEmployee"
                  id="outlined-basic"
                  label="Salário"
                  variant="filled"
                  value={promoteTheEmployee}
                  onChange={onChange}
                  helperText=" Ex: 2000"
                  sx={{ m: 2, width: "35ch" }}
                />
                                <TextField
                  type="date"
                  name="datePromotion"
                  id="outlined-basic"
                  label="Data de Promoção"
                  variant="filled"
                  value={datePromotion}
                  onChange={onChange}
                  helperText=" Ex: 2000"
                  sx={{ m: 2, width: "35ch" }}
                />
              </div>
            ) : (
              <></>
            )}
          </FieldsetUpdateEmployee>
          <FieldsetUpdateEmployee>
            <LegendFieldset>Terminar o contrato com o funcionário?</LegendFieldset>
            <RadioGroup>
              <FormControlLabel
                value={true}
                onChange={() => radioDismiss(true)}
                control={<Radio />}
                label="Sim"
              />
              <FormControlLabel
                value={false}
                onChange={() => radioDismiss(false)}
                control={<Radio />}
                label="Não"
                style={{fontFamily:"Roboto"}}
              />
            </RadioGroup>
            {dismiss === true ? (
              <div>
                <TextField
                  type="date"
                  name="dateDismiss"
                  value={dateDismiss}
                  onChange={onChange}
                  id="outlined-number"
                  variant="filled"
                  label="Data de Término"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  helperText="00/00/0000"
                  sx={{ m: 2, width: "35ch" }}
                />
              </div>
            ) : (
              <></>
            )}
          </FieldsetUpdateEmployee>
      </ArticleUpdateEmployee>
    </SectionUpdateEmployee>
  );
};
