export function getAge(birthDate: Date): number {
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    
    return age;
}

export function formatAgeInRussian(age: number): string {
    const lastDigit = age % 10;
    const lastTwoDigits = age % 100;

    if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
        return `${age} лет`;
    }

    switch (lastDigit) {
        case 1:
            return `${age} год`;
        case 2:
        case 3:
        case 4:
            return `${age} года`;
        default:
            return `${age} лет`;
    }
}
