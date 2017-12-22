export default class Form {

	constructor() {
		this.btnSignIn = document.querySelector('.btn--sign-in');
		this.navLinkSignIn = document.querySelector('.nav__link--sign-in');
		this.formSignIn = document.querySelector('.form--sign-in');
		this.btnSignUp = document.querySelector('.btn--sign-up');
		this.navLinkSignUp = document.querySelector('.nav__link--sign-up');
		this.formSignUp = document.querySelector('.form--sign-up');
		this.input = document.querySelectorAll('.input');
		this.inputText = document.querySelectorAll('.input-text');
		this.overlay = document.querySelector('.overlay');


		this._events();
	}

	
	_events() {
			this.btnSignIn.addEventListener('click', () => {
				this.formSignIn.classList.add('form--sign-in-show');
				this.overlay.classList.add('overlay--show');
			});	

			this.navLinkSignIn.addEventListener('click', () => {
				this.formSignIn.classList.add('form--sign-in-show');
				this.overlay.classList.add('overlay--show');
			});		

			this.btnSignUp.addEventListener('click', () => {
				this.formSignUp.classList.add('form--sign-up-show');
				this.overlay.classList.add('overlay--show');
			});

			this.navLinkSignUp.addEventListener('click', () => {
				this.formSignUp.classList.add('form--sign-up-show');
				this.overlay.classList.add('overlay--show');
			});


		this.overlay.addEventListener('click', () => {
			if(this.formSignIn.classList.contains('form--sign-in-show')) {
				this.formSignIn.classList.remove('form--sign-in-show');
			};
			if(this.formSignUp.classList.contains('form--sign-up-show')) {
				this.formSignUp.classList.remove('form--sign-up-show');
			};
		});

		for(let i = 0; i < this.input.length; i++) {
			//	Если поле в фокусе, плейсхолдер уходит вверх
			this.input[i].addEventListener('focus', () => {
				this.inputText[i].classList.add('login-text--full');
			});

			//	Если поле пустое, плейсхолдер возвращается обратно
			this.input[i].addEventListener('blur', () => {
				if(this.input[i].value === "") {
					this.inputText[i].classList.remove('login-text--full');
				}
			});	

		}
		
	}
}