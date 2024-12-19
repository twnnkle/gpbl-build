import { A as AirDatepicker } from '../air-datepicker.CboJ_BXW.js';
import './hoisted18.js';

document.addEventListener("DOMContentLoaded", () => {
  new AirDatepicker("#datepicker", {
    range: true,
    multipleDates: true,
    multipleDatesSeparator: " - "
  });
});
