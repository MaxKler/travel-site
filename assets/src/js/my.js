// const { data } = require("jquery");

// $(document).ready(function(){
// 	$('input[name="phone"]').mask('+38(099) 999-9999')
// 	// $('.input[name="phoneHead"]').mask('+38(099) 999-9999')
// });
const towns = document.getElementById('towns')
const towns1 = document.getElementById('towns1')
const towns2 = document.getElementById('towns2')
const towns3 = document.getElementById('towns3')
const data = [
	{ id: 0, name: 'Мариуполь'},
	{ id: 1, name: 'Донецк'},
	{ id: 2, name: 'Днепр'},
	{ id: 3, name: 'Краматорск'},
	{ id: 4, name: 'Киев'},
	{ id: 5, name: 'Одесса'},
	{ id: 6, name: 'Харьков'},
	{ id: 7, name: 'Волноваха'},
	{ id: 8, name: 'Славянск'},
	{ id: 9, name: 'Бердянск'},
]
const dataOne = [
	{ id: 0, name: 'Мариуполь'},
	{ id: 1, name: 'Донецк'},
	{ id: 2, name: 'Днепр'},
	{ id: 3, name: 'Краматорск'},
	{ id: 4, name: 'Киев'},
	{ id: 5, name: 'Одесса'},
	{ id: 6, name: 'Харьков'},
	{ id: 7, name: 'Волноваха'},
	{ id: 8, name: 'Славянск'},
	{ id: 9, name: 'Бердянск'},
]
const dataTwo = [
	{ id: 0, name: 'Мариуполь'},
	{ id: 1, name: 'Донецк'},
	{ id: 2, name: 'Днепр'},
	{ id: 3, name: 'Краматорск'},
	{ id: 4, name: 'Киев'},
	{ id: 5, name: 'Одесса'},
	{ id: 6, name: 'Харьков'},
	{ id: 7, name: 'Волноваха'},
	{ id: 8, name: 'Славянск'},
	{ id: 9, name: 'Бердянск'},
]
const dataThree = [
	{ id: 0, name: 'Мариуполь'},
	{ id: 1, name: 'Донецк'},
	{ id: 2, name: 'Днепр'},
	{ id: 3, name: 'Краматорск'},
	{ id: 4, name: 'Киев'},
	{ id: 5, name: 'Одесса'},
	{ id: 6, name: 'Харьков'},
	{ id: 7, name: 'Волноваха'},
	{ id: 8, name: 'Славянск'},
	{ id: 9, name: 'Бердянск'},
]
data.map((elem) => (
	towns.insertAdjacentHTML('beforeend', `
   <div class="towns">${elem.name}</div>
`)
))
dataOne.map((elem) => (
	towns1.insertAdjacentHTML('beforeend', `
   <div class="towns">${elem.name}</div>
`)
))

dataTwo.map((elem) => (
	towns2.insertAdjacentHTML('beforeend', `
   <div class="towns">${elem.name}</div>
`)
))

dataThree.map((elem) => (
	towns3.insertAdjacentHTML('beforeend', `
   <div class="towns">${elem.name}</div>
`)
))

const openModal = document.getElementById('openModal')
const modalWind = document.getElementById('modalWind')

const openModal1 = document.getElementById('openModal1')
const modalWind1 = document.getElementById('modalWind1')

const openModal2 = document.getElementById('openModal2')
const modalWind2 = document.getElementById('modalWind2')


const openModal3 = document.getElementById('openModal3')
const modalWind3 = document.getElementById('modalWind3')


let flag = false

openModal.onclick = () => {
	flag = !flag
	if (flag) {
		modalWind.classList.add('modalWindow')
		modalWind.classList.remove('modalWindowNone')
	} else if (!flag) {
		modalWind.classList.add('modalWindowNone')
		modalWind.classList.remove('modalWindow')
	}
}
openModal1.onclick = () => {
	flag = !flag
	if (flag) {
		modalWind1.classList.add('modalWindow1')
		modalWind1.classList.remove('modalWindowNone')
	} else if (!flag) {
		modalWind1.classList.add('modalWindowNone')
		modalWind1.classList.remove('modalWindow1')
	}
}

openModal2.onclick = () => {
	flag = !flag
	if (flag) {
		modalWind2.classList.add('modalWindow1')
		modalWind2.classList.remove('modalWindowNone')
	} else if (!flag) {
		modalWind2.classList.add('modalWindowNone')
		modalWind2.classList.remove('modalWindow1')
	}
}

openModal3.onclick = () => {
	flag = !flag
	if (flag) {
		modalWind3.classList.add('modalWindow1')
		modalWind3.classList.remove('modalWindowNone')
	} else if (!flag) {
		modalWind3.classList.add('modalWindowNone')
		modalWind3.classList.remove('modalWindow1')
	}
}

const checkBox2 = document.getElementById('checkBox2')
const svgCheckBox2 = document.getElementById('svgCheckBox2')

checkBox2.onclick = () => {
	flag = !flag
	if (flag) {
		svgCheckBox2.classList.add('checkBoxActive')
		svgCheckBox2.classList.remove('checkBoxNone')
	} else if (!flag) {
		svgCheckBox2.classList.add('checkBoxNone')
		svgCheckBox2.classList.remove('checkBoxActive')
	}
}

svgCheckBox2.onclick = () => {
	svgCheckBox2.classList.add('checkBoxNone')
	svgCheckBox2.classList.remove('checkBoxActive')
}

const inputName = document.getElementById('inputName')
const confirmBtn = document.getElementById('confirmBtn')
const nameValid = document.getElementById('nameValid')

confirmBtn.onclick = () => {
	if (inputName.value.length <= 2) {
        inputName.style.color = 'red'   
		inputName.style.borderColor = 'red'  
		nameValid.classList.add('valid')
		nameValid.classList.remove('validNone')
	} else {
		inputName.style.color = 'black'   
		inputName.style.borderColor = '#454545'  
		nameValid.classList.remove('valid')
		nameValid.classList.add('validNone')
	}
}