let value;
const programmer = {
  name: "Samet",
  age: 34,
  email: "samedi6774@gmail.com",
  langs: ["pyhton", "html", "css", "js"],

  address: {
    city: "Ankara",
    street: "Bahçelievler",
  },

  work: function () {
    console.log("programcı çalışıyor..");
  },
};

value = programmer;

value = programmer.email;
value = programmer.address.city;

programmer.work();

console.log(value);
