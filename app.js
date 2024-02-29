  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
  import { getDatabase, push ,ref, set, onValue } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCcTh9FIkLltWAlISo9ecotQemmzb7Id8E",
    authDomain: "student-registration-for-c1e7b.firebaseapp.com",
    databaseURL: "https://student-registration-for-c1e7b-default-rtdb.firebaseio.com",
    projectId: "student-registration-for-c1e7b",
    storageBucket: "student-registration-for-c1e7b.appspot.com",
    messagingSenderId: "673579260182",
    appId: "1:673579260182:web:22ebb562da96adb0609837"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const database = getDatabase();

  var city = document.getElementById("city");
  var course = document.getElementById("course");
  var name = document.getElementById("name");
  var fname = document.getElementById("fname");
  var email = document.getElementById("email");
  var phone = document.getElementById("phone");
  var cnic = document.getElementById("cnic");
  var fcnic = document.getElementById("fcnic");
  var dob = document.getElementById("dob");
  var gender = document.getElementById("gender");
  var address = document.getElementById("address");
  var qualification = document.getElementById("qualification");
  var laptop = document.getElementById("laptop");

  window.add = function() {
    var obj = {
        city:city.value,
        course:course.value,
        name:name.value,
        father_name:fname.value,
        email:email.value,
        Number:phone.value,
        cnic:cnic.value,
        father_cnic:fcnic.value,
        date_of_birth:dob.value,
        gender:gender.value,
        address:address.value,
        qualification:qualification.value,
        laptop:laptop.value,
    };
    
    obj.id = push(ref(database, "Student Registration Office/")).key;
    
    var reference = ref(database, `Student Registration Office/${obj.id}`);
    
    set(reference, obj);
    
};

// function getData() {

//     var reference = ref(database, "Student Registration Office/");

//     onValue(reference, function(data) {
//         console.log(data.val());
//     });
// }
    

// getData();


window.showData = function() {
    var displayDataContainer = document.getElementById("displayDataContainer");
    var reference = ref(database, "Student Registration Office/");

    onValue(reference, function (data) {
        var newData = data.val();

        var htmlContent = "<h2>Data from Student Registration Office</h2>";
        htmlContent += "<pre>" + JSON.stringify(newData, null, 2) + "</pre>";

        displayDataContainer.innerHTML = htmlContent;
    });
}
