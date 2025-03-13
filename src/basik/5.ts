enum DayOfWeek {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }
  
  const isWeekend = (day) => {
    return day === DayOfWeek.Saturday || day === DayOfWeek.Sunday;
  }