class FormValidator {
    constructor(formId) {
      this.form = document.getElementById(formId);
      this.submitButton = this.form.querySelector('button[type="submit"]');
      this.submissionMessage = document.getElementById('submission-message');
  
      this.form.addEventListener('submit', this.handleSubmit.bind(this));
    }
  
    handleSubmit(event) {
      event.preventDefault();
      if (this.validateForm()) {
        this.submissionMessage.style.display = 'block';
      }
    }
  
    validateForm() {
      const requiredFields = this.form.querySelectorAll('input[required]');
      for (const field of requiredFields) {
        if (field.value.trim() === '') {
          alert('Please fill in all required fields.');
          return false;
        }
      }
      return true;
    }
  }
  
  const formValidator = new FormValidator('myForm');
  