import { useTranslation } from "react-i18next";
import "./About.scss";
function About() {
  const { t, i18n } = useTranslation("common");
  return (
    <section className="About">
      <div>
        <h1>{t("web.title")}</h1>
        <p>{t("web.desc")}</p>
      </div>
      <div>
        <img
          alt="Español"
          onClick={() => i18n.changeLanguage("es")}
          src="https://upload.wikimedia.org/wikipedia/commons/3/32/Flag_of_Spain_%28Civil%29.svg"
        ></img>
        <img
          onClick={() => i18n.changeLanguage("en")}
          alt="English"
          src="https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/2560px-Flag_of_the_United_Kingdom.svg.png"
        ></img>
      </div>
    </section>
  );
}

export default About;
