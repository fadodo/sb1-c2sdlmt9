import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export function useLanguageRedirect() {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const currentLang = i18n.language;
    const pathLang = location.pathname.split('/')[1];
    
    // If path doesn't start with language code, redirect
    if (!['fr', 'en'].includes(pathLang)) {
      navigate(`/${currentLang}${location.pathname}`);
    }
  }, [i18n.language, location.pathname]);
}