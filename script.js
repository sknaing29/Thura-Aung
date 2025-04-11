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
  // Adjusted zodiac logic to handle month index (0-11) correctly
  const zodiacSigns = [
    { sign: "Capricorn", emoji: "♑", lastDay: 19 }, // January (month 0)
    { sign: "Aquarius", emoji: "♒", lastDay: 18 }, // February (month 1)
    { sign: "Pisces", emoji: "♓", lastDay: 20 },   // March (month 2)
    { sign: "Aries", emoji: "♈", lastDay: 19 },   // April (month 3)
    { sign: "Taurus", emoji: "♉", lastDay: 20 },   // May (month 4)
    { sign: "Gemini", emoji: "♊", lastDay: 20 },   // June (month 5)
    { sign: "Cancer", emoji: "♋", lastDay: 22 },   // July (month 6)
    { sign: "Leo", emoji: "♌", lastDay: 22 },     // August (month 7)
    { sign: "Virgo", emoji: "♍", lastDay: 22 },   // September (month 8)
    { sign: "Libra", emoji: "♎", lastDay: 22 },   // October (month 9)
    { sign: "Scorpio", emoji: "♏", lastDay: 21 }, // November (month 10)
    { sign: "Sagittarius", emoji: "♐", lastDay: 21 } // December (month 11)
  ];

  // Find the correct sign based on month and day
  let signIndex = month;
  if (day > zodiacSigns[month].lastDay) {
    signIndex = (month + 1) % 12; // Move to the next sign if day is past the cutoff
  }
  // Handle Capricorn crossing year boundary (December into January)
  if (month === 11 && day > 21) {
     signIndex = 0; // Capricorn
  }

  const zodiac = zodiacSigns[signIndex];
  return `${zodiac.sign} ${zodiac.emoji}`;
}


function calculateAll() {
  const birthDate = new Date(birthdayString);
  const now = new Date();

  const birthDayName = getDayName(birthDate);
  const zodiac = getZodiac(birthDate.getMonth(), birthDate.getDate());
  const currentDayName = getDayName(now);

  // Update HTML elements
  document.getElementById("personNameDisplay").textContent = personName;
  document.getElementById("personNameAgeDisplay").textContent = personName;
  document.getElementById("dateOfBirthDisplay").textContent = `${formatDate(birthDate)} (${birthDayName}, ${zodiac})`;
  document.getElementById("startDateDisplay").textContent = `${formatDate(birthDate)} (${birthDayName})`;
  document.getElementById("endDateDisplay").textContent = `${formatDate(now)} (${currentDayName})`;

  const diffInMilliseconds = now - birthDate;

  // Precise age calculation (Years, Months, Days)
  let years = now.getFullYear() - birthDate.getFullYear();
  let months = now.getMonth() - birthDate.getMonth();
  let days = now.getDate() - birthDate.getDate();

  if (days < 0) {
    months--;
    // Get days in the previous month relative to 'now'
    const lastMonthOfCurrentYear = new Date(now.getFullYear(), now.getMonth(), 0);
    days += lastMonthOfCurrentYear.getDate();
  }
  if (months < 0) {
    years--;
    months += 12;
  }

  // Total calculations
  const totalDays = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));
  const totalWeeks = Math.floor(totalDays / 7);
  let totalMonths = ((now.getFullYear() - birthDate.getFullYear()) * 12) + (now.getMonth() - birthDate.getMonth());
  if (now.getDate() < birthDate.getDate()) {
    totalMonths--; // Decrement if the current day is before the birth day in the month
  }
  const totalYears = years; // The 'years' calculated above is the total full years lived


  // Update the rest of the HTML elements
  document.getElementById("yearsDisplay").textContent = years;
  document.getElementById("monthsDisplay").textContent = months;
  document.getElementById("daysDisplay").textContent = days;
  document.getElementById("totalYearsDisplay").textContent = totalYears;
  document.getElementById("totalMonthsDisplay").textContent = totalMonths;
  document.getElementById("totalWeeksDisplay").textContent = totalWeeks;
  document.getElementById("totalDaysDisplay").textContent = totalDays;
  document.getElementById("totalHoursDisplay").textContent = Math.floor(diffInMilliseconds / (1000 * 60 * 60)).toLocaleString();
  document.getElementById("totalMinutesDisplay").textContent = Math.floor(diffInMilliseconds / (1000 * 60)).toLocaleString();
  document.getElementById("totalSecondsDisplay").textContent = Math.floor(diffInMilliseconds / 1000).toLocaleString();
}

// Initial calculation on load
calculateAll();
// Update every second
setInterval(calculateAll, 1000);
