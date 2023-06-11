export function validationCod(codEncomenda) {
    const delay = (0.7 + Math.random() * 2) * 1000;
  
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (codEncomenda === '102030' || codEncomenda === '123098' || codEncomenda === '000000') {
          resolve({message: 'Código validado com sucesso.' });
        } else {
          reject({ message: 'Código inválido.' });
        }
      }, delay);
    });
  }
