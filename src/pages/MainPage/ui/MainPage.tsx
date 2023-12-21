import {useTranslation} from "react-i18next";

const MainPage = () => {
  const {t} = useTranslation('main')

  return (
    <div className={''}>
      {t('main')}
    </div>
  )
}

export default MainPage;