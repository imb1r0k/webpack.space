import CryptoJS from 'crypto-js';

const SECRET_KEY = 'my-super-secret-key'; // Замените на ваш секретный ключ

// Шифрование данных
export const encryptData = (data) => {
    return CryptoJS.AES.encrypt(JSON.stringify(data), SECRET_KEY).toString();
};

// Дешифрование данных
export const decryptData = (ciphertext) => {
    const bytes = CryptoJS.AES.decrypt(ciphertext, SECRET_KEY);
    const decryptedData = bytes.toString(CryptoJS.enc.Utf8);
    if (!decryptedData) {
        throw new Error('Ошибка дешифрования: неверные данные или ключ');
    }
    return JSON.parse(decryptedData);
};