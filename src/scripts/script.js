
document.getElementsByClassName('hero__btn')[0].addEventListener('click', () => {
	const modalWrap = document.createElement('div')
	const modalCard = document.createElement('div')
	const modalInputName = document.createElement('input')
	const modalInputEmail = document.createElement('input')
	const modalBtnClose = document.createElement('button')
	const modalBtnSubmit = document.createElement('button')

	modalWrap.classList.add('wrapper')
	modalCard.classList.add('modal')
	modalInputName.classList.add('name')
	modalInputEmail.classList.add('email')
	modalBtnClose.classList.add('btn-close')
	modalBtnSubmit.classList.add('btn-submit')

	modalBtnClose.textContent = 'X'
	modalBtnSubmit.textContent = 'Submit'

	modalInputName.type = 'name'
	modalInputName.placeholder = 'Name'
	modalInputEmail.type = 'email'
	modalInputEmail.placeholder = 'Email'

	modalWrap.append(modalCard)
	modalCard.append(modalInputName)
	modalCard.append(modalInputEmail)
	modalCard.append(modalBtnClose)
	modalCard.append(modalBtnSubmit)
	document.body.append(modalWrap)

	modalBtnClose.addEventListener('click', () => {
		modalWrap.remove()
	})
})


 
