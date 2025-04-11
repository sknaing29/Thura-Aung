const personName = "Thura Aung";
const birthdayString = "1995-10-13";

function formatDate(date) {
  const dd = String(date.getDate()).padStart(2, '0');
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const yyyy = date.getFullYear(); // Corrected from original potential typo
  return `${dd}-${mm}-${yyyy}`;
}

function getDayName(date) {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return days[date.getDay()];
}

function getZodiac(month, day) {
  const zodiacSigns = [
    { sign: "Capricorn", emoji: "♑", lastDay: 19 }, { sign: "Aquarius", emoji: "♒", lastDay: 18 },
    { sign: "Pisces", emoji: "♓", lastDay: 20 }, { sign: "Aries", emoji: "♈", lastDay: 19 },
    { sign: "Taurus", emoji: "♉", lastDay: 20 }, { sign: "Gemini", emoji: "♊", lastDay: 20 },
    { sign: "Cancer", emoji: "♋", lastDay: 22 }, { sign: "Leo", emoji: "♌", lastDay: 22 },
    { sign: "Virgo", emoji: "♍", lastDay: 22 }, { sign: "Libra", emoji: "♎", lastDay: 22 },
    { sign: "Scorpio", emoji: "♏", lastDay: 21 }, { sign: "Sagittarius", emoji: "♐", lastDay: 21 }
  ];
  const zodiac = day <= zodiacSigns[month].lastDay ? zodiacSigns[month] : zodiacSigns[(month + 1) % 12];
  return `${zodiac.sign} ${zodiac.emoji}`;
}
