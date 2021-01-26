const sr = ScrollReveal();

// sr.reveal('.BTeffect', {
//     origin: 'top',
//     distance: '1000px',
//     delay: 2500,
//     duration: 1750,
//     scale: 1,
//     opacity: 0,
//     easing: 'ease',
// });
sr.reveal(".eightythree", {
  origin: "right",
  distance: "1000px",
  delay: 3500,
  duration: 1000,
  scale: 1,
  opacity: 0,
  easing: "ease",
});

sr.reveal(".p-brand", {
  origin: "top",
  distance: "0px",
  delay: 500,
  duration: 1000,
  scale: 1.3,
  opacity: 0,
  easing: "ease",
});
sr.reveal(".sub-text1", {
  origin: "left",
  distance: "100px",
  delay: 500,
  duration: 1000,
  scale: 1,
  opacity: 0,
  easing: "ease",
});
sr.reveal(".sub-text2", {
  origin: "right",
  distance: "100px",
  delay: 500,
  duration: 1000,
  scale: 1,
  opacity: 0,
  easing: "ease",
});
sr.reveal(".sub-text3", {
  origin: "left",
  distance: "100px",
  delay: 500,
  duration: 1000,
  scale: 1,
  opacity: 0,
  easing: "ease",
});

sr.reveal(".wrapper", {
  origin: "left",
  distance: "100px",
  delay: 0,
  duration: 1000,
  scale: 1,
  opacity: 0,
  easing: "ease",
});

sr.reveal("iframe", {
  origin: "right",
  distance: "100px",
  delay: 0,
  duration: 1000,
  scale: 1,
  opacity: 0,
  easing: "ease",
});

// sr.reveal('footer', {
//     origin: 'bottom',
//     distance: '15px',
//     delay: 300,
//     duration: 1000,
//     scale: 1,
//     opacity: 0,
//     easing: 'ease',
// });

sr.reveal(".displaycard1", {
  origin: "right",
  distance: "100px",
  delay: 0,
  duration: 1000,
  scale: 1,
  opacity: 0,
  easing: "ease",
});
sr.reveal(".displaycard2", {
  origin: "right",
  distance: "100px",
  delay: 0,
  duration: 1000,
  scale: 1,
  opacity: 0,
  easing: "ease",
});
sr.reveal(".displaycard3", {
  origin: "right",
  distance: "100px",
  delay: 0,
  duration: 1000,
  scale: 1,
  opacity: 0,
  easing: "ease",
});
sr.reveal(".displaycard4", {
  origin: "right",
  distance: "100px",
  delay: 0,
  duration: 1000,
  scale: 1,
  opacity: 0,
  easing: "ease",
});
sr.reveal(".displaycardinfo", {
  origin: "right",
  distance: "100px",
  delay: 0,
  duration: 1000,
  scale: 1,
  opacity: 0,
  easing: "ease",
});
sr.reveal(".displaycardinfoimg", {
  origin: "left",
  distance: "100px",
  delay: 0,
  duration: 1000,
  scale: 1,
  opacity: 0,
  easing: "ease",
});

// sr.reveal('.col', {
//     origin: 'left',
//     distance: '100px',
//     delay: 1500,
//     duration: 1000,
//     scale: 1,
//     opacity: 0,
//     easing: 'ease',
// });
const date = new Date();
let mySpan = document.querySelector(".time");
mySpan.textContent = date.getFullYear();
console.log(date);
