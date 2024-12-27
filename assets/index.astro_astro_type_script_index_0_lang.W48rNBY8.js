import { I as IMask } from './index.DHjp26mP.js';

const phoneInput = document.getElementById("phone").querySelector("input");
if (phoneInput) {
  IMask(phoneInput, {
    mask: "+{7}(000)000-00-00",
    lazy: true
  });
}
