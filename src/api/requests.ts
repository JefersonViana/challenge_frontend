const LOGIN_URL = 'https://challenge-backend-hazel.vercel.app/login/';
const REGISTER_URL = 'https://challenge-backend-hazel.vercel.app/register/';
const PHONES_URL = 'https://challenge-backend-hazel.vercel.app/phones/';

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

const requestAddPhones = async (list: any, token: string | null) => {
  try {
    console.log(list)
    const res = await fetch(PHONES_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${token}`,
      },
      body: JSON.stringify(list),
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

const requestUpdatePhones = async (id: number, phone: any, token: string | null) => {
  try {
    const res = await fetch(`${PHONES_URL}${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${token}`,
      },
      body: JSON.stringify(phone),
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

export {
  requestRegister,
  requestLogin,
  requestAllPhones,
  requestAddPhones,
  requestUpdatePhones,
  requestDeletePhones,
}
