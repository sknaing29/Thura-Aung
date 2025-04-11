const personName = "Thura Aung";
const birthdayString = "1995-10-13";

function formatDate(date) {
  const dd = String(date.getDate()).padStart(2, '0');
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const yyyy = date.getFullYear();
  return `${dd}-${mm}-${yyyy}`;
}

function getDayName(date) {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return days[date.getDay()];
}

function getZodiac(month, day) {
  const zodiacSigns = [
    { sign: "Capricorn", emoji: "♑", lastDay: 19 },
    { sign: "Aquarius", emoji: "♒", lastDay: 18 },
    { sign: "Pisces", emoji: "♓", lastDay: 20 },
    { sign: "Aries", emoji: "♈", lastDay: 19 },
    { sign: "Taurus", emoji: "♉", lastDay: 20 },
    { sign: "Gemini", emoji: "♊", lastDay: 20 },
    { sign: "Cancer", emoji: "♋", lastDay: 22 },
    { sign: "Leo", emoji: "♌", lastDay: 22 },
    { sign: "Virgo", emoji: "♍", lastDay: 22 },
    { sign: "Libra", emoji: "♎", lastDay: 22 },
    { sign: "Scorpio", emoji: "♏", lastDay: 21 },
    { sign: "Sagittarius", emoji: "♐", lastDay: 21 }
  ];
  // Ensure month is treated as 0-indexed for array access
  const correctMonthIndex = month; // month from new Date() is already 0-indexed
  const zodiac = day <= zodiacSigns[correctMonthIndex].lastDay ? zodiacSigns[correctMonthIndex] : zodiacSigns[(correctMonthIndex + 1) % 12];
  return `${zodiac.sign} ${zodiac.emoji}`;
}


function calculateAll() {
  const birthDate = new Date(birthdayString);
  const now = new Date();

  const birthDayName = getDayName(birthDate);
  const zodiac = getZodiac(birthDate.getMonth(), birthDate.getDate());
  const currentDayName = getDayName(now);

  // Check if elements exist before trying to modify them
  const personNameDisplay = document.getElementById("personNameDisplay");
  const personNameAgeDisplay = document.getElementById("personNameAgeDisplay");
  const dateOfBirthDisplay = document.getElementById("dateOfBirthDisplay");
  const startDateDisplay = document.getElementById("startDateDisplay");
  const endDateDisplay = document.getElementById("endDateDisplay");
  const yearsDisplay = document.getElementById("yearsDisplay");
  const monthsDisplay = document.getElementById("monthsDisplay");
  const daysDisplay = document.getElementById("daysDisplay");
  const totalYearsDisplay = document.getElementById("totalYearsDisplay");
  const totalMonthsDisplay = document.getElementById("totalMonthsDisplay");
  const totalWeeksDisplay = document.getElementById("totalWeeksDisplay");
  const totalDaysDisplay = document.getElementById("totalDaysDisplay");
  const totalHoursDisplay = document.getElementById("totalHoursDisplay");
  const totalMinutesDisplay = document.getElementById("totalMinutesDisplay");
  const totalSecondsDisplay = document.getElementById("totalSecondsDisplay");

  if (personNameDisplay) personNameDisplay.textContent = personName;
  if (personNameAgeDisplay) personNameAgeDisplay.textContent = personName;
  if (dateOfBirthDisplay) dateOfBirthDisplay.textContent = `${formatDate(birthDate)} (${birthDayName}, ${zodiac})`;
  if (startDateDisplay) startDateDisplay.textContent = `${formatDate(birthDate)} (${birthDayName})`;
  if (endDateDisplay) endDateDisplay.textContent = `${formatDate(now)} (${currentDayName})`;


  const diffInMilliseconds = now - birthDate;
  const totalDays = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));
  const totalWeeks = Math.floor(totalDays / 7);

  let totalMonths = ((now.getFullYear() - birthDate.getFullYear()) * 12) + (now.getMonth() - birthDate.getMonth());

  if (now.getDate() < birthDate.getDate()) {
    totalMonths--;
  }

  const totalYears = now.getFullYear() - birthDate.getFullYear() - (now.getMonth() < birthDate.getMonth() || (now.getMonth() === birthDate.getMonth() && now.getDate() < birthDate.getDate()) ? 1 : 0);

  let years = now.getFullYear() - birthDate.getFullYear();
  let months = now.getMonth() - birthDate.getMonth();
  let days = now.getDate() - birthDate.getDate();

  if (days < 0) {
    months--;
    // Get the number of days in the previous month correctly
    const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += lastMonth.getDate();
  }
  if (months < 0) {
    years--;
    months += 12;
  }

  if (yearsDisplay) yearsDisplay.textContent = years;
  if (monthsDisplay) monthsDisplay.textContent = months;
  if (daysDisplay) daysDisplay.textContent = days;
  if (totalYearsDisplay) totalYearsDisplay.textContent = totalYears;
  if (totalMonthsDisplay) totalMonthsDisplay.textContent = totalMonths;
  if (totalWeeksDisplay) totalWeeksDisplay.textContent = totalWeeks;
  if (totalDaysDisplay) totalDaysDisplay.textContent = totalDays;
  if (totalHoursDisplay) totalHoursDisplay.textContent = Math.floor(diffInMilliseconds / (1000 * 60 * 60));
  if (totalMinutesDisplay) totalMinutesDisplay.textContent = Math.floor(diffInMilliseconds / (1000 * 60));
  if (totalSecondsDisplay) totalSecondsDisplay.textContent = Math.floor(diffInMilliseconds / 1000);
}

// Note: The initial call and setInterval are now handled in the HTML file
// after this script is loaded.
