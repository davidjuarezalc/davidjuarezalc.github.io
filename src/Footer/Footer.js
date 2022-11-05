import "./Footer.scss";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation("common");
  return (
    <footer>
      <p>{t("web.footer")}</p>
    </footer>
  );
}

export default Footer;
