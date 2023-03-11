import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";

TimeAgo.addDefaultLocale(en);
const timeAgo = new TimeAgo("en-US");

export function parseDate(date: string | Date) {
  if (!(date instanceof Date)) {
    date = new Date(date);
  }

  return timeAgo.format(new Date(date), "twitter");
}
