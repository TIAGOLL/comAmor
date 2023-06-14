export function validationCod(codEncomenda) {
    const delay = 2000;
  
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (codEncomenda === '102030' || codEncomenda === '123098' || codEncomenda === '000000' || codEncomenda === '123456') {
          resolve({message: 'Código validado com sucesso.' });
        } else {
          reject({ message: 'Código inválido.' });
        }
      }, delay);
    });
  }
