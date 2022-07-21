export const formatNumberByLanguage = (value: number, language: string) => {
    const formatter = Intl.NumberFormat(language);
    return Math.abs(value) !== 0 ? formatter.format(value) : 0;
};