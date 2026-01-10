<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Student Management System</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

<header>
  <h1>Student Management System</h1>
</header>

<div class="container">
  <h2>Add / Update Student</h2>

  <form id="studentForm">
    <input type="hidden" id="studentIndex">

    <input type="text" id="name" placeholder="Student Name" required>
    <input type="number" id="roll" placeholder="Roll Number" required>
    <input type="text" id="course" placeholder="Course" required>
    <input type="email" id="email" placeholder="Email" required>

    <button type="submit">Save Student</button>
  </form>
</div>

<div class="container">
  <h2>Student List</h2>
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Roll</th>
        <th>Course</th>
        <th>Email</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody id="studentTable"></tbody>
  </table>
</div>

<script src="script.js"></script>

</body>
</html>
