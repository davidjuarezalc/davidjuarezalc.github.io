import { useState } from "react";
import { useTranslation } from "react-i18next";
import { BsArrowDownSquareFill, BsArrowUpSquareFill } from "react-icons/bs";
import "./Career.scss";
function Career() {
  const { t } = useTranslation("common");
  const everis = t("common:web.career.everis", { returnObjects: true });
  const techList = t("common:web.technologies.list", { returnObjects: true });
  let [showTech, setShowTech] = useState(false);
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
          {everis.map((elem, i) => {
            return (
              <div key={i}>
                <h5>{elem.title}</h5>
                <p>{elem.text}</p>
              </div>
            );
          })}
        </li>
        <li>
          <h4>Vodafone (6/2022 - *)</h4>
          <p>{t("common:web.career.vodafone")}</p>
          <h5 className="tech-title">
            {t("common:web.technologies.title")}
            {showTech ? (
              <BsArrowUpSquareFill
                onClick={() => setShowTech(!showTech)}
                className="arrow-icon"
              />
            ) : (
              <BsArrowDownSquareFill
                onClick={() => setShowTech(!showTech)}
                className="arrow-icon"
              />
            )}
          </h5>
          {showTech && (
            <div className="tech-table">
              {techList.map((elem, i) => (
                <p key={i}>{elem}</p>
              ))}
            </div>
          )}
        </li>
      </ul>
    </section>
  );
}

export default Career;
