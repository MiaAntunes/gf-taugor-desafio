import React, { useContext, useState } from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import { PDFViewer } from "@react-pdf/renderer";
import { GlobalContext } from "../context/GlobalContext";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    color: "#000000",
    height: "90vh",
    backgroundColor: "#ffffff",
  },
  section: {
    margin: 5,
    padding: 10,
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    gap: 15,
  },
  textTitle: {
    fontSize: 15,
    margin: 0,
    color: "#071b47",
  },
  textParagraph: {
    fontSize: 13,
    color: "#000",
  },
});

const MyDocument = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const { employee } = props;

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          {employee.name !== "" &&
          employee.lastName !== "" &&
          employee.photo !== "" &&
          employee.jobPosition !== "" &&
          employee.address !== "" &&
          employee.phone !== "" &&
          employee.nationality !== "" &&
          employee.dateOfBirthday !== "" ? (
            <>
              <Text style={styles.textTitle}>
                Name:
                <Text style={styles.textParagraph}> {employee.name}</Text>
              </Text>
              <Text style={styles.textTitle}>
                Sobrenome:
                <Text style={styles.textParagraph}> {employee.lastName}</Text>
              </Text>
              <Text style={styles.textTitle}>
                Emprego:
                <Text style={styles.textParagraph}>
                  {employee.jobPosition}
                </Text>
              </Text>
              <Text style={styles.textTitle}>
                Endereço:
                <Text style={styles.textParagraph}> {employee.address}</Text>
              </Text>
              <Text style={styles.textTitle}>
                Telefone:
                <Text style={styles.textParagraph}> {employee.phone}</Text>
              </Text>
              <Text style={styles.textTitle}>
                Nacionalidade:
                <Text style={styles.textParagraph}>
                  {employee.nationality}
                </Text>
              </Text>
              <Text style={styles.textTitle}>
                Data de Nascimento:
                <Text style={styles.textParagraph}>
                  {employee.dateOfBirthday}
                </Text>
              </Text>
            </>
          ) : (
            <>
              <Text style={styles.textTitle}>Name:</Text>
              <Text style={styles.textTitle}>Sobrenome:</Text>
              <Text style={styles.textTitle}>Foto:</Text>
              <Text style={styles.textTitle}>Emprego:</Text>
              <Text style={styles.textTitle}>Endereço:</Text>
              <Text style={styles.textTitle}>Telefone:</Text>
              <Text style={styles.textTitle}>Nacionalidade:</Text>
              <Text style={styles.textTitle}>Data de Nascimento:</Text>
            </>
          )}
          {employee.dateAdmission !== "" &&
          employee.sector !== "" &&
          employee.salary !== "" &&
          employee.experience !== "" ? (
            <>
              <Text style={styles.textTitle}>
                Data de Contratação:
                <Text style={styles.textParagraph}>
                  {employee.dateAdmission}
                </Text>
              </Text>
              <Text style={styles.textTitle}>
                Setor:
                <Text style={styles.textParagraph}>{employee.sector}</Text>
              </Text>
              <Text style={styles.textTitle}>
                Salário:
                <Text style={styles.textParagraph}> R${employee.salary}</Text>
              </Text>
              <Text style={styles.textTitle}>Experiência: </Text>
              <Text style={styles.textParagraph}>{employee.experience}</Text>
            </>
          ) : (
            <>
              <Text style={styles.textTitle}>Data de Contratação: </Text>
              <Text style={styles.textTitle}>Setor:</Text>
              <Text style={styles.textTitle}>Salário:</Text>
              <Text style={styles.textTitle}>Experiência:</Text>
            </>
          )}
          {employee.promoteTheEmployee !== 0 && (
            <>
              <Text style={styles.textTitle}>Salário Atual: 
              <Text style={styles.textParagraph}> {employee.promoteTheEmployee}</Text></Text>
              <Text style={styles.textTitle}>Data da Promoção:
              <Text style={styles.textParagraph}> {employee.datePromotion}</Text> </Text>

            </>
          )}
          {
            employee.dateDismiss !== "" &&
            <>
            <Text style={styles.textTitle}>Término de Contrato: 
            <Text style={styles.textParagraph}>{employee.dateDismiss}</Text></Text>

          </>
          }
        </View>
      </Page>
    </Document>
  );
};

export const AppPdf = (props) => (
  <PDFViewer style={{ width: "100%", height: "100%" }}>
    <MyDocument employee={props.employee} />
  </PDFViewer>
);

// ReactDOM.render(<AppPdf />, document.getElementById('root'));
