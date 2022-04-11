const COOKIES_ACCEPTED = 'cookies_accepted';

type CookiesAcceptedState = 'accepted' | 'denied' | 'notset';

const setCookiesAcceptedCookie = (value: CookiesAcceptedState) => {
  setCookie(COOKIES_ACCEPTED, value, 365);
};

const getCookiesAcceptedCookie = (): CookiesAcceptedState => {
  const cookie = getCookie(COOKIES_ACCEPTED);

  return cookie ? (cookie as CookiesAcceptedState) : 'notset';
};

const setCookie = (name: string, value: string, days?: number) => {
  let expires = '';

  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);

    expires = '; expires=' + date.toUTCString();
  }

  document.cookie = name + '=' + (value || '') + expires + '; path=/';
};

const getCookie = (name: string): string | null => {
  const nameLenPlus = name.length + 1;

  return (
    document.cookie
      .split(';')
      .map((c) => c.trim())
      .filter((cookie) => {
        return cookie.substring(0, nameLenPlus) === `${name}=`;
      })
      .map((cookie) => {
        return decodeURIComponent(cookie.substring(nameLenPlus));
      })[0] || null
  );
};

export type { CookiesAcceptedState };
export {
  setCookie,
  getCookie,
  setCookiesAcceptedCookie,
  getCookiesAcceptedCookie,
};
