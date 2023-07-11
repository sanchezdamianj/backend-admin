export default function setAuthCookie(token:any) {
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 30);

    const cookieValue = `jwt=${token}; expires=${expirationDate.toUTCString()}; path=/`;
    document.cookie = cookieValue;
  }


  