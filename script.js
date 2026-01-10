document.addEventListener("DOMContentLoaded", function () {

  let students = JSON.parse(localStorage.getItem("students")) || [];

  const form = document.getElementById("studentForm");
  const table = document.getElementById("studentTable");
  const studentIdInput = document.getElementById("studentId");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const roll = document.getElementById("roll").value.trim();
    const course = document.getElementById("course").value.trim();
    const email = document.getElementById("email").value.trim();
    const studentId = studentIdInput.value;

    if (!name || !roll || !course || !email) {
      alert("Please fill all fields");
      return;
    }

    const studentData = { name, roll, course, email };

    if (studentId === "") {
      students.push(studentData);
    } else {
      students[studentId] = studentData;
    }

    localStorage.setItem("students", JSON.stringify(students));
    form.reset();
    studentIdInput.value = "";

    displayStudents();
  });

  function displayStudents() {
    table.innerHTML = "";

    students.forEach((student, index) => {
      const row = document.createElement("tr");

      row.innerHTML = `
        <td>${student.name}</td>
        <td>${student.roll}</td>
        <td>${student.course}</td>
        <td>${student.email}</td>
        <td>
          <button class="action-btn edit">Edit</button>
          <button class="action-btn delete">Delete</button>
        </td>
      `;

      row.querySelector(".edit").addEventListener("click", () => editStudent(index));
      row.querySelector(".delete").addEventListener("click", () => deleteStudent(index));

      table.appendChild(row);
    });
  }

  function editStudent(index) {
    const student = students[index];
    document.getElementById("name").value = student.name;
    document.getElementById("roll").value = student.roll;
    document.getElementById("course").value = student.course;
    document.getElementById("email").value = student.email;
    studentIdInput.value = index;
  }

  function deleteStudent(index) {
    if (confirm("Are you sure?")) {
      students.splice(index, 1);
      localStorage.setItem("students", JSON.stringify(students));
      displayStudents();
    }
  }

  displayStudents();
});

