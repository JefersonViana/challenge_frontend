const LOGIN_URL = 'http://localhost:3001/login/';
const REGISTER_URL = 'http://localhost:3001/register/';
const PHONES_URL = 'http://localhost:3001/phones/';

const requestLogin = async (email: string, password: string) => {
  try {
    const res = await fetch(LOGIN_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    if (res.ok) {
      const data = await res.json();
      return data;
    }
    return null;
  } catch (error) {
    return null;
  }
}

const requestRegister = async (email: string, password: string, username: string) => {
  try {
    const res = await fetch(REGISTER_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password, username }),
    });
    if (res.ok) {
      const data = await res.json();
      return data;
    }
    return null;
  } catch (error) {
    return null;
  }
}

const requestDeletePhones = async (id: number, token: string | null) => {
  try {
    const res = await fetch(`${PHONES_URL}${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${token}`,
      },
    });
    if (res.ok) {
      const data = await res.json();
      return data;
    }
    return null;
  } catch (error) {
    return null;
  }
}

const requestAllPhones = async (token: string | null) => {
  try {
    const res = await fetch(PHONES_URL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${token}`,
      },
    });
    if (res.ok) {
      const data = await res.json();
      return data;
    }
    return null;
  } catch (error) {
    return null;
  }
}

export { requestLogin, requestRegister, requestDeletePhones, requestAllPhones }
