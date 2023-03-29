const events = [
  { title: "All Day Event", start: getDate("YEAR-MONTH-01") },
  {
    title: "Rendezvous",
    start: getDate("YEAR-MONTH-07"),
    end: getDate("YEAR-MONTH-10"),
    type: "task",
  },
  {
    groupId: "999",
    title: "Repeating Event",
    start: getDate("YEAR-MONTH-09T16:00:00+00:00"), //Repeating Event
    type: "event",
  },
  {
    groupId: "999",
    title: "Repeating Event",
    start: getDate("YEAR-MONTH-16T16:00:00+00:00"),
    type: "event",
  },
  {
    title: "Dontiste",
    start: "YEAR-MONTH-17",
    end: getDate("YEAR-MONTH-19"),
    type: "event",
  },
  {
    title: "Consultation",
    start: getDate("YEAR-MONTH-18T10:30:00+00:00"),
    end: getDate("YEAR-MONTH-18T12:30:00+00:00"), //Event || Holiday
    type: "event",
  },
  {
    title: "Visit",
    start: getDate("YEAR-MONTH-18T12:00:00+00:00"),
    type: "to-do",
  }, //Todo
  {
    title: "maladie",
    start: getDate("YEAR-MONTH-19T07:00:00+00:00"),
    type: "to-do",
  },
  {
    title: "Meeting",
    start: getDate("YEAR-MONTH-18T14:30:00+00:00"),
    type: "to-do",
  },
  {
    title: "controlle",
    start: getDate("YEAR-MONTH-18T17:30:00+00:00"),
    type: "to-do",
  },
  {
    title: "finish",
    start: getDate("YEAR-MONTH-18T20:00:00+00:00"),
    type: "to-do",
  },
];

function getDate(dayString) {
  const today = new Date();
  const year = today.getFullYear().toString();
  let month = (today.getMonth() + 1).toString();

  if (month.length === 1) {
    month = "0" + month;
  }
  return dayString.replace("YEAR", year).replace("MONTH", month);
}

export default events;
