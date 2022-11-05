import { useTranslation } from "react-i18next";
function Career() {
  const { t } = useTranslation("common");
  return (
    <section>
      <h3>{t("web.career.title")}</h3>
      <ul>
        <li>Universidad Carlos III</li>
        <li>Aplicaziones</li>
        <li>everis/NTT Data</li>
        <li>Vodafone</li>
      </ul>
    </section>
  );
}

export default Career;
