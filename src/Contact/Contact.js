import "./Contact.scss";
import { useTranslation } from "react-i18next";
function Contact() {
  const { t } = useTranslation("common");
  var socialMedia = [
    {
      image: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
      title: "LinkedIn",
      url: "https://www.linkedin.com/in/david-juarez-alcarria/",
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/281/281786.png",
      title: "Mail",
      url: "mailto:davidjuarezalc@gmail.com",
    },
  ];
  return (
    <section>
      <h2>{t("web.contact")}</h2>
      <div className="contact-list">
        {socialMedia.map((media) => {
          return (
            <div key={media.title} className="contact-list-element">
              <img src={media.image} alt={media.title}></img>
              <a href={media.url} target="_blank" rel="noreferrer">
                {media.title}
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Contact;
