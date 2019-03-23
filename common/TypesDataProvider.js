export const typesDataProvider = [
    //convert by kilometers
    {
        ruName: 'Метры',
        enName: 'Meters',
        code: 1,
        convert: (value) =>  value * 1000,
        reverseConvert: (value) => value / 1000
    },
    {
        ruName: 'Километры',
        enName: 'Kilometers',
        code: 2,
        convert: (value) => value,
        reverseConvert: (value) => value
    },
    {
        ruName: 'Сантиметры',
        enName: 'Centimeters',
        code: 3,
        convert: (value) => value * 1000 * 100,
        reverseConvert: (value) => value / 1000 / 100
    },
    {
        ruName: 'Футы',
        enName: 'Feet',
        code: 4,
        convert: (value) => value * 3280.84,
        reverseConvert: (value) => value / 3280.84
    },
    {
        ruName: 'Мили',
        enName: 'Miles',
        code: 5,
        convert: (value) => value * 0.621371,
        reverseConvert: (value) => value / 0.621371
    },
    {
        ruName: 'Дюймы',
        enName: 'Inches',
        code: 6,
        convert: (value) => value * 39370.1,
        reverseConvert: (value) => value / 39370.1
    },
];

export const getConverterByCode = (code) => typesDataProvider.find(value => value.code === code).convert;
export const getReverseConverterByCode = (code) => typesDataProvider.find(value => value.code === code).reverseConvert;
export const convertThis = (value, convert, reverse) => parseFloat(convert(reverse(value))).toFixed(5);
