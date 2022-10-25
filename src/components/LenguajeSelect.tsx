import { useRouter } from "next/router"
import { useCookies } from 'react-cookie';

export default function LanguageSwitcher() {
  const [ cookie, setCookie ] = useCookies(['NEXT_LOCALE']);
  const router = useRouter();
  const { locale } = router;

  const switchLanguage = (e) => {
    const locale = e.target.value;
    router.push('/','/', { locale });
    if(cookie.NEXT_LOCALE !== locale){
      setCookie("NEXT_LOCALE", locale, { path: "/" });
    }
  }

  return (
    <select
      onChange={switchLanguage}
      defaultValue={locale}
    >
      <option value="es">Español</option>
      <option value="en">Ingles</option>
    </select>
  );
}