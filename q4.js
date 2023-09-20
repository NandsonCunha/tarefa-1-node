function media (notas) {
    if (notas.length === 0) return 0;
    const soma = notas.reduce((acc, nota) => acc + nota, 0);
    return soma / notas.length;
  }
  function menor (notas) {
    if (notas.length === 0) return null;
    return Math.min(...notas);
  }
  function maior (notas) {
    if (notas.length === 0) return null;
    return Math.max(...notas);
  };

export {media, menor, maior}