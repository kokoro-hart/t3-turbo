import { ConfigType } from "dayjs";

import { DAY_OF_THE_WEEK_LABELS, DISPLAY_DATE_FORMAT } from "../configs";
import { dayjs } from "../libs";

export const dateUtils = {
  /**
   * 日付から曜日を表すテキストを取得
   */
  getDayOfWeekInOneLetter(date: ConfigType): string {
    const day = dayjs(date).day();
    return DAY_OF_THE_WEEK_LABELS[day];
  },

  /**
   * 当月初日の日付を返す
   */
  getFirstDayOfCurrentMonth(format = DISPLAY_DATE_FORMAT) {
    return dayjs().startOf("M").format(format).toString();
  },

  /**
   * 先月初日の日付を返す
   */
  getFirstDayOfPreviousMonth(format = DISPLAY_DATE_FORMAT) {
    return dayjs().subtract(1, "M").startOf("M").format(format).toString();
  },

  /**
   * 当月最終日の日付を返す
   */
  getLastDayOfCurrentMonth(format = DISPLAY_DATE_FORMAT) {
    return dayjs().endOf("M").format(format).toString();
  },

  /**
   * 翌月最終日の日付を返す
   */
  getLastDayOfNextMonth(format = DISPLAY_DATE_FORMAT) {
    return dayjs().add(1, "M").endOf("M").format(format).toString();
  },

  /**
   * 引数日付から、その月の初日の日付を返す
   */
  getFirstDayOfMonth(date: ConfigType, format = DISPLAY_DATE_FORMAT) {
    return dayjs(date).startOf("M").format(format).toString();
  },

  /**
   * 引数日付から、その月の最終日の日付を返す
   */
  getLastDayOfMonth(date: ConfigType, format = DISPLAY_DATE_FORMAT) {
    return dayjs(date).endOf("M").format(format).toString();
  },

  /**
   * 引数日付から、その月の{subtract}ヶ月前の初日の日付を返す
   */
  getFirstDayOfPreviousMonthFromDate(
    date: ConfigType,
    subtract = 1,
    format = DISPLAY_DATE_FORMAT,
  ) {
    return dayjs(date)
      .subtract(subtract, "M")
      .startOf("M")
      .format(format)
      .toString();
  },

  /**
   * 引数日付から、その月の{subtract}ヶ月後の最終日の日付を返す
   */
  getLastDayOfNextMonthFromDate(
    date: ConfigType,
    subtract = 1,
    format = DISPLAY_DATE_FORMAT,
  ) {
    return dayjs(date).add(subtract, "M").endOf("M").format(format).toString();
  },
};
