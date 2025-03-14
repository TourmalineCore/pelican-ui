import { useState, useEffect } from 'react';
import { getCookie, setCookie } from 'cookies-next';
import Link from 'next/link';
import {
  MOCK_COOKIE_BUTTON_TEXT,
  MOCK_COOKIE_LINK,
  MOCK_COOKIE_LINK_TEXT,
  MOCK_COOKIE_TEXT,
} from '@/src/common/mocks/globals-mock/cookies-mock';
import { Button } from '../Button/Button';

const cookieAccept = `cookieAccept`;

function Cookie() {
  const [isCookie, setIsCookie] = useState(true);

  useEffect(() => {
    if (getCookie(cookieAccept) === `true`) {
      setIsCookie(true);
    } else {
      setIsCookie(false);
    }
  }, []);

  if (isCookie) {
    return null;
  }

  return (
    <div
      className="cookie"
      data-testid="cookie"
    >
      <div className="cookie__inner">
        <div className="cookie__text">
          {MOCK_COOKIE_TEXT}
          <Link
            href={MOCK_COOKIE_LINK}
            className="cookie__link text-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            {MOCK_COOKIE_LINK_TEXT}
          </Link>
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
    setCookie(cookieAccept, true);
    setIsCookie(true);
  }
}

export default Cookie;
