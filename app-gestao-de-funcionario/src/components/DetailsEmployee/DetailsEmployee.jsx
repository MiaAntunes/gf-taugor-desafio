import { TextField } from "@mui/material";
import { SectionDetailsEmployee, TitleDetailsEmployee } from "./DetailsEmployeeStyle";

export const DetailsEmployee = (props) => {
  const { onChange, admissionDate, sector, salary, experience } = props;

  return (
    <SectionDetailsEmployee>
      <TitleDetailsEmployee>Informações do Funcionário</TitleDetailsEmployee>
      <article>
        <div>
          <TextField
              id="filled-basic"
              label="Data de Admissão"
              variant="filled"
              type="date"
              name="admissionDate"
              value={admissionDate}
              onChange={onChange}
              InputLabelProps={{
                shrink: true,
              }}
              sx={{ m: 2, width: '35ch' }}
              helperText="Ex: 12/02/2011"
            />
        </div>
        <div>
          <TextField
              id="filled-basic"
              label="Setor"
              variant="filled"
              type="text"
              name="sector"
              value={sector}
              onChange={onChange}
              sx={{ m: 2, width: '35ch' }}
              helperText="Ex: T.I"
            />
        </div>
        <div>
          <TextField
              id="filled-basic"
              label="Salário"
              variant="filled"
              type="number"
              name="salary"
              value={salary}
              onChange={onChange}
              sx={{ m: 2, width: '35ch' }}
              helperText="Ex: 2000"
            />
        </div>
        <div>
          <TextField
          id="filled-basic"
          label="Experiência"
          multiline
          rows={10}
          variant="filled"
          name="experience"
          value={experience}
          onChange={onChange}
          sx={{ m: 2, width: '35ch' }}
        />
        </div>
      </article>
    </SectionDetailsEmployee>
  );
};
