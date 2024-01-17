import students from "./students.json";
import templateFunction from './template.hbs';
import { nanoid } from 'nanoid'
const wrap = document.querySelector(".wrap")
const closeBtn = document.querySelector(".close-btn")
closeBtn.addEventListener("click", closeModal)
function markup(students) {
    wrap.innerHTML = templateFunction({ students });
    const tbody = document.querySelector(".tbody")
    tbody.addEventListener("click", onDel)
    tbody.addEventListener("click", onEdit)
    tbody.addEventListener("click", onEditAll)
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
        id: nanoid(),
        firstName: firstName,
        secondName: secondName,
        age: age,
        course: course,
        faculty: faculty,
        afterSchoolCourse: afterSchoolCourse
    }
    students.push(newStudent)
    markup(students)
    form.reset()
}
function onDel(e) {
    if (e.target.nodeName === "BUTTON" && e.target.hasAttribute("data-delId")) {
        const delId = e.target.dataset.delid
        const index = students.map(st => st.id.toString()).indexOf(delId)
        students.splice(index, 1)
        markup(students)
    }
}
const editBtn = document.querySelector(".edit")
function onEdit(e) {
    if (e.target.nodeName === "BUTTON" && e.target.hasAttribute("data-editId")) {
        const editId = e.target.dataset.editid
        const editIndex = students.map(st => st.id.toString()).indexOf(editId)
        const newName = prompt("Enter new name")
        students[editIndex].firstName = newName;
        markup(students)
    }
}
const modal = document.querySelector(".backdrop")
const modalForm = document.querySelector(".modal-form")
const editAllBtn = document.querySelector(".edit-student")
function onEditAll(e) {
    if (e.target.nodeName === "BUTTON" && e.target.hasAttribute("data-editAllId")) {
        const editId = e.target.dataset.editallid
        const editIndex = students.map(st => st.id.toString()).indexOf(editId)
        modal.classList.remove("hide")
        modalForm.addEventListener("submit", onEditStudent)
function onEditStudent(e) {
    e.preventDefault()
    const data = e.currentTarget.elements
    const firstName = data.firstName.value
    const secondName = data.secondName.value
    const age = data.age.value
    const course = data.course.value
    const faculty = data.faculty.value
    const afterSchoolCourse = data.afterSchoolCourse.value
    const newStudent = {}
    firstName ? newStudent.firstName = firstName : ""
    secondName ? newStudent.secondName = secondName : ""
    age ? newStudent.age = age : ""
    course ? newStudent.course = course : ""
    faculty ? newStudent.faculty = faculty : ""
    afterSchoolCourse ? newStudent.afterSchoolCourse = afterSchoolCourse : ""
    students[editIndex] = { ...students[editIndex], ...newStudent }
    markup(students)
    modalForm.reset()
    modal.classList.add("hide")
}
    }
}
function closeModal() {
    modal.classList.add("hide")
}