function calculateAll() {
  // Constants and helper functions (like personName, birthdayString, formatDate, etc.)
  // are expected to be loaded already from 1111.js

  const birthDate = new Date(birthdayString);
  const now = new Date();

  const birthDayName = getDayName(birthDate);
  const zodiac = getZodiac(birthDate.getMonth(), birthDate.getDate());
  const currentDayName = getDayName(now);

  // Update static display elements
  document.getElementById("personNameDisplay").textContent = personName;
  document.getElementById("personNameAgeDisplay").textContent = personName;
  document.getElementById("dateOfBirthDisplay").textContent = `${formatDate(birthDate)} (${birthDayName}, ${zodiac})`;
  document.getElementById("startDateDisplay").textContent = `${formatDate(birthDate)} (${birthDayName})`;
  document.getElementById("endDateDisplay").textContent = `${formatDate(now)} (${currentDayName})`;

  // Calculate time differences
  const diffInMilliseconds = now - birthDate;

  // Calculate total units
  const totalSeconds = Math.floor(diffInMilliseconds / 1000);
  const totalMinutes = Math.floor(totalSeconds / 60);
  const totalHours = Math.floor(totalMinutes / 60);
  const totalDays = Math.floor(totalHours / 24);
  const totalWeeks = Math.floor(totalDays / 7);

  // Calculate total months approximately
  let totalMonths = ((now.getFullYear() - birthDate.getFullYear()) * 12) + (now.getMonth() - birthDate.getMonth());
  if (now.getDate() < birthDate.getDate()) {
    totalMonths--;
  }

  // Calculate total full years
  const totalYears = now.getFullYear() - birthDate.getFullYear() - (now.getMonth() < birthDate.getMonth() || (now.getMonth() === birthDate.getMonth() && now.getDate() < birthDate.getDate()) ? 1 : 0);

  // Calculate precise years, months, days difference
  let years = now.getFullYear() - birthDate.getFullYear();
  let months = now.getMonth() - birthDate.getMonth();
  let days = now.getDate() - birthDate.getDate();

  // Adjust days and months if negative (borrowing)
  if (days < 0) {
    months--;
    const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += lastMonth.getDate();
  }
  if (months < 0) {
    years--;
    months += 12;
  }

  // Update dynamic display elements with calculated values
  document.getElementById("yearsDisplay").textContent = years;
  document.getElementById("monthsDisplay").textContent = months;
  document.getElementById("daysDisplay").textContent = days;
  document.getElementById("totalYearsDisplay").textContent = totalYears;
  document.getElementById("totalMonthsDisplay").textContent = totalMonths;
  document.getElementById("totalWeeksDisplay").textContent = totalWeeks;
  document.getElementById("totalDaysDisplay").textContent = totalDays;
  document.getElementById("totalHoursDisplay").textContent = totalHours; // Use calculated totalHours
  document.getElementById("totalMinutesDisplay").textContent = totalMinutes; // Use calculated totalMinutes
  document.getElementById("totalSecondsDisplay").textContent = totalSeconds; // Use calculated totalSeconds
}
