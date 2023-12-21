import {useTranslation} from "react-i18next";

const AboutPage = () => {
  const {t} = useTranslation('about')

  return (
    <div className={''}>
      {t('about')}
    </div>
  )
}

export default AboutPage;