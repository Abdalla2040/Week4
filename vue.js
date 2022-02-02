var app = new Vue({
  el: "#app",
  data: {
    pageTitle: "New Student Information",
    sectionTitle: "Student Personal Record",
    profilePhoto: "<img src='pic3.jpg' alt='profile-photo'>",
    firstName: null,
    lastName: null,
    techID: null,
    major: null,
    graduationYear: null,
    gpa: null,
    gpaColor: null,
    student: [
      {
        firstName: "Abdullahi",
        lastName: "Mohamed",
        major: {
          id: 1,
          name: "Computer Programming",
          totalCredits: 50,
        },
        graduationYear: "2022",
        gpa: 2.5,
      },
      {
        firstName: "John",
        lastName: "Smith",
        major: {
          id: 2,
          name: "Cyber Security",
          totalCredits: 38,
        },
        graduationYear: "2023",
        gpa: 3.7,
      },
      {
        firstName: "Alex",
        lastName: "Luther",
        major: {
          id: 3,
          name: "Computer Science",
          totalCredits: 55,
        },
        graduationYear: "2022",
        gpa: 4.0,
      },
    ],
  },
  methods: {
    fullName: function (lastName, firstName) {
      return lastName + ", " + firstName;
    },
  },
  computed: {
    setGPAColor: function () {
      if (this.gpa >= 0 && this.gpa <= 1.0) this.gpaColor = "red";
      else if (this.gpa >= 1.1 && this.gpa <= 2.0) this.gpaColor = "orange";
      else if (this.gpa >= 2.1 && this.gpa <= 3.0) this.gpaColor = "yellow";
      else this.gpaColor = "green";

      return this.gpaColor;
    },
  },
  template: "#Divtemplate",
});

const techID = document.getElementById("setTechID");
techID.onclick = () => {
  if (!app.$data.techID) app.$data.techID = "1254560";
  else app.$data.techID = null;
};
