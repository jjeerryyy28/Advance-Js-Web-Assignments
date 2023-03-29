const form = document.querySelector('#myForm')
const displayData = document.querySelector('#displayData')

form.addEventListener('submit', function (event) {
  event.preventDefault()

  const nameInput = document.querySelector('#name')
  const genderInput = document.querySelector('#gender')

  const name = nameInput.value
  const gender = genderInput.value

  const dataDiv = document.createElement('div')
  const namePara = document.createElement('p')
  const genderPara = document.createElement('p')
  const deleteButton = document.createElement('button')

  namePara.textContent = 'Name: ' + name
  genderPara.textContent = 'Gender: ' + gender
  deleteButton.textContent = 'Delete'

  dataDiv.appendChild(namePara)
  dataDiv.appendChild(genderPara)
  dataDiv.appendChild(deleteButton)

  displayData.appendChild(dataDiv)

  deleteButton.addEventListener('click', function () {
    dataDiv.remove()
  })

  form.reset()
})
