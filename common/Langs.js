export const RU = 'RU-ru';
export const EN = 'EN-en';

export const inputText = {
    ruName: 'Введите значение',
    enName: 'Enter value'
};

export const convert = (object, lang) =>  {
    if(!object.hasOwnProperty('enName') || !object.hasOwnProperty('ruName')) {
        throw new Error('Wrong object structure');
    }
    return lang === EN ? object.enName : object.ruName;
};