import { useTranslation } from "react-i18next";
function Career() {
  const { t } = useTranslation("common");
  return (
    <section>
      <h3>{t("web.career.title")}</h3>
      <ul>
        <li>
          <h4>Universidad Carlos III (9/2015 - 7/2019)</h4>
          <p>{t("common:web.career.university")}</p>
        </li>
        <li>
          <h4>Aplicaziones (9/2018 - 2/2019)</h4>
          <p>{t("common:web.career.aplicaziones")}</p>
        </li>
        <li>
          <h4>everis/NTT Data (9/2019 - 6/2022)</h4>
          <p>{t("common:web.career.everis")}</p>
        </li>
        <li>
          <h4>Vodafone (6/2022 - *)</h4>
          <p>{t("common:web.career.vodafone")}</p>
        </li>
      </ul>
    </section>
  );
}

export default Career;
