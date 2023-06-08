export function login({ email, password }) {
    const delay = (0.7 + Math.random() * 2) * 1000;
  
    return new Promise((resolve, reject) => {
      setTimeout(function () {
        if (password === '123' && !!email) {
          resolve({message: 'Login efetuado com sucesso.' });
        } else {
          reject({ message: 'Login ou senha inválidos.' });
        }
      }, delay);
    });
  }
