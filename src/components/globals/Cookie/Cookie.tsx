import { useState, useEffect } from 'react';
import { Button } from '../Button/Button';

const STORAGE_KEY = `cookieAccept`;
const MOCK_COOKIE_TEXT = `Мы обрабатываем Cookies для аналитики и маркетинга, чтобы вам было удобно пользоваться нашим веб-сайтом.`;
const MOCK_COOKIE_BUTTON_TEXT = `Хорошо`;

export function Cookie({
  isComponentPage,
}: {
  isComponentPage?: boolean;
}) {
  const [isVisible, setIsVisible] = useState(!!isComponentPage);

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      setIsVisible(true);
    }
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className="cookie"
      data-testid="cookie"
      role="region"
      aria-labelledby="cookie-text"
    >
      <div className="cookie__inner">
        <div
          className="cookie__text"
          id="cookie-text"
        >
          {MOCK_COOKIE_TEXT}
        </div>
        <Button
          className="cookie__accept"
          theme="primary"
          onClick={acceptCookie}
          data-testid="cookie-button"
        >
          {MOCK_COOKIE_BUTTON_TEXT}
        </Button>
      </div>
    </div>
  );

  function acceptCookie() {
    localStorage.setItem(STORAGE_KEY, `true`);

    setIsVisible(false);
  }
}
