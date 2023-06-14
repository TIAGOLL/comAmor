export function login({ email, password }) {
    const delay = 2000;
  
    return new Promise((resolve, reject) => {
      setTimeout(function () {
        if (password === '123' && email === 'Tiago' || password === '123' && email === 'Rafael') {
          resolve({message: 'Login efetuado com sucesso.' })
        } else {
          reject({ message: 'Login ou senha inválidos.' });
        }
      }, delay);
    });
  }
