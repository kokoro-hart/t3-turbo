import { default as _dayjs } from "dayjs";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";

import { TZ } from "../configs";

_dayjs.extend(utc);
_dayjs.extend(timezone);
_dayjs.extend(isSameOrAfter);
_dayjs.extend(isSameOrBefore);
_dayjs.tz.setDefault(TZ);

export const dayjs = _dayjs;
