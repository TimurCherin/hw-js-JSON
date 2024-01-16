import students from "./students.json";
import templateFunction from './template.hbs';
const wrap = document.querySelector(".wrap")
function markup(students) {
    wrap.innerHTML = templateFunction({ students }); 
}
markup(students)
const form = document.querySelector(".form")
const input = document.querySelectorAll(".input")
const btn = document.querySelector(".btn")
form.addEventListener("submit", onSubmit)
function onSubmit(e) {
    e.preventDefault()
    const data = e.currentTarget.elements
    const firstName = data.firstName.value
    const secondName = data.secondName.value
    const age = data.age.value
    const course = data.course.value
    const faculty = data.faculty.value
    const afterSchoolCourse = data.afterSchoolCourse.value
    const newStudent = {
        id: 3,
        firstName: firstName,
        secondName: secondName,
        age: age,
        course: course,
        faculty: faculty,
        afterSchoolCourse: [afterSchoolCourse]
    }
    students.push(newStudent)
    markup(students)
}
const deleteBtn = document.querySelector(".del")
const tbody = document.querySelector(".tbody")
tbody.addEventListener("click", onDel)
function onDel(e) {
    if (e.target.nodeName === "BUTTON" && e.target.hasAttribute("data-delId")) {
        const delId = e.target.dataset.delid
        const filteredStudents = students.filter(student => student.id != delId)
        markup(filteredStudents)
    }
}