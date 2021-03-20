let today = moment().format("MMMM Do YYYY dddd, h:mm:ss a");
document.getElementById("currentDay").innerHTML = today;

console.log(moment("2021-03-17T10:00:27-04").isBefore("2021-03-17T12:00"));

const storageInput = document.querySelector("#storage");
const text = document.querySelector(".text");
const button = document.querySelector(".button");
const storedInput = localStorage.getItem("savedata");

if (storageInput) {
  text.textContent = storedInput;
}

storageInput.addEventListener("input", (letter) => {
  console.log(letter.target.value);
  text.textContent = letter.target.value;
});

const saveToLocalStorage = () => {
  localStorage.setItem("savedata", text.textContent);

  button.addEventListener("click", saveToLocalStorage);
};

$(document).ready(function () {
  $("#appt-time-9").css({
    backgroundColor: function () {
      if (
        moment().format("MMMM Do YYYY, HH:mm:ss") <
        moment().format("MMMM Do YYYY") + ", " + "09:00:00"
      ) {
        return "green";
      } else {
        return "red";
      }
    },
  });

  $("#appt-time-10").css({
    backgroundColor: function () {
      if (
        moment().format("MMMM Do YYYY, HH:mm:ss") <
        moment().format("MMMM Do YYYY") + ", " + "10:00:00"
      ) {
        return "green";
      } else {
        return "red";
      }
    },
  });

  $("#appt-time-11").css({
    backgroundColor: function () {
      if (
        moment().format("MMMM Do YYYY, HH:mm:ss") <
        moment().format("MMMM Do YYYY") + ", " + "11:00:00"
      ) {
        return "green";
      } else {
        return "red";
      }
    },
  });

  $("#appt-time-12").css({
    backgroundColor: function () {
      if (
        moment().format("MMMM Do YYYY, HH:mm:ss") <
        moment().format("MMMM Do YYYY") + ", " + "12:00:00"
      ) {
        return "green";
      } else {
        return "red";
      }
    },
  });

  $("#appt-time-13").css({
    backgroundColor: function () {
      if (
        moment().format("MMMM Do YYYY, HH:mm:ss") <
        moment().format("MMMM Do YYYY") + ", " + "13:00:00"
      ) {
        return "green";
      } else {
        return "red";
      }
    },
  });

  $("#appt-time-14").css({
    backgroundColor: function () {
      if (
        moment().format("MMMM Do YYYY, HH:mm:ss") <
        moment().format("MMMM Do YYYY") + ", " + "14:00:00"
      ) {
        return "green";
      } else {
        return "red";
      }
    },
  });

  $("#appt-time-15").css({
    backgroundColor: function () {
      if (
        moment().format("MMMM Do YYYY, HH:mm:ss") <
        moment().format("MMMM Do YYYY") + ", " + "15:00:00"
      ) {
        return "green";
      } else {
        return "red";
      }
    },
  });

  $("#appt-time-16").css({
    backgroundColor: function () {
      if (
        moment().format("MMMM Do YYYY, HH:mm:ss") <
        moment().format("MMMM Do YYYY") + ", " + "16:00:00"
      ) {
        return "green";
      } else {
        return "red";
      }
    },
  });

  $("#appt-time-17").css({
    backgroundColor: function () {
      if (
        moment().format("MMMM Do YYYY, HH:mm:ss") <
        moment().format("MMMM Do YYYY") + ", " + "17:00:00"
      ) {
        return "green";
      } else {
        return "red";
      }
    },
  });
});
