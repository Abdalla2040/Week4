var app = new Vue({
  el: "#app",
  data: {
    pageTitle: "New Student Information",
    sectionTitle: "Student Personal Record",
    profilePhoto: "<img src='pic3.jpg' alt='profile-photo'>",
    firstName: "",
    lastName: "",
    techID: null,
    major: "",
    graduationYear: "2022",
    gpa: null,
    gpaColor: null,
    student: [
      {
        id: 1,
        firstName: "Abdullahi",
        lastName: "Mohamed",
        major: "Computer Programming",
        graduationYear: "2022",
        gpa: 2.5,
      },
      {
        id: 2,
        firstName: "John",
        lastName: "Smith",
        major: "Cyber Security",
        graduationYear: "2023",
        gpa: 3.7,
      },
      {
        id: 3,
        firstName: "Alex",
        lastName: "Luther",
        major: "Computer Science",
        graduationYear: "2022",
        gpa: 4.0,
      },
    ],
  },
  methods: {
    fullName: function () {
      return this.lastName + ", " + this.firstName;
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
  if (!app.$data.techID) {
    if(app.$data.student['firstName'] == "Abdullahi")
      app.$data.techID = "1254560";
    else if(app.$data.student.firstName == "John")
      app.$data.techID = "2541567";
    else
      app.$data.techID = "5879564";
  }
    
  
};
