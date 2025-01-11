export const LOCALE = "ja";

export const TZ = "Asia/Tokyo";

export const TZ_OFFSET_HOURS = 9;

export const DISPLAY_DATE_FORMAT = "YYYY/MM/DD";

export const ISO_DATE_FORMAT = "YYYY-MM-DD";

export const DAY_OF_THE_WEEK_INDEXES = {
  SUNDAY: 0,
  MONDAY: 1,
  TUESDAY: 2,
  WEDNESDAY: 3,
  THURSDAY: 4,
  FRIDAY: 5,
  SATURDAY: 6,
} as const;

/**
 * 曜日のマッピング 1 文字
 */
export const DAY_OF_THE_WEEK_LABELS = {
  [DAY_OF_THE_WEEK_INDEXES.SUNDAY]: "日",
  [DAY_OF_THE_WEEK_INDEXES.MONDAY]: "月",
  [DAY_OF_THE_WEEK_INDEXES.TUESDAY]: "火",
  [DAY_OF_THE_WEEK_INDEXES.WEDNESDAY]: "水",
  [DAY_OF_THE_WEEK_INDEXES.THURSDAY]: "木",
  [DAY_OF_THE_WEEK_INDEXES.FRIDAY]: "金",
  [DAY_OF_THE_WEEK_INDEXES.SATURDAY]: "土",
} as const;
