import { I as IMask } from './index.DHjp26mP.js';

const dateInput = document.getElementById("date").querySelector("input");
if (dateInput) {
  IMask(dateInput, {
    mask: Date,
    pattern: "d.`m.`Y",
    blocks: {
      d: {
        mask: IMask.MaskedRange,
        from: 1,
        to: 31,
        maxLength: 2
      },
      m: {
        mask: IMask.MaskedRange,
        from: 1,
        to: 12,
        maxLength: 2
      },
      Y: {
        mask: IMask.MaskedRange,
        from: 1900,
        to: 2999
      }
    },
    format: function(date) {
      let day = date.getDate();
      let month = date.getMonth() + 1;
      const year = date.getFullYear();
      day = day < 10 ? "0" + day : day;
      month = month < 10 ? "0" + month : month;
      return `${day}.${month}.${year}`;
    },
    parse: function(str) {
      const [day, month, year] = str.split(".");
      return new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    }
  });
}
const timeInput = document.getElementById("time").querySelector("input");
if (timeInput) {
  IMask(timeInput, {
    mask: "HH:MM",
    blocks: {
      HH: {
        mask: IMask.MaskedRange,
        from: 0,
        to: 23,
        maxLength: 2
      },
      MM: {
        mask: IMask.MaskedRange,
        from: 0,
        to: 59,
        maxLength: 2
      }
    }
  });
}
