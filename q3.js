export function calculateAge(dateOfBirth) {
    const birthDate = new Date(dateOfBirth);
    const currentDate = new Date();
    const ageInMilliseconds = currentDate - birthDate;
    const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
    return Math.floor(ageInYears);
  }
  
