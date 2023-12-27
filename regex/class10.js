// Pega todas as letras, até as com acento
const allWords = /([\wÀ-ú]+)/gm

// Elimina tudo que não é número
const noNumbers = /\D/

//Valida IP
const ipRegex = /((25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)(\.)){3}(25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)/gm;

//Telefone
const phoneRegex = /^(\(\d{2}\)\s*)?(9\s*)?(\d{4})-(\d{4})$/gm

//Senhas fortes
const strongPasswordRegex = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}/gm
