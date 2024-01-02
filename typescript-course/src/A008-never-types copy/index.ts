function createError(): never {
  // Numba retorna nada
  throw new Error('My Error');
}

createError();
