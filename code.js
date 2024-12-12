document.getElementById('form').addEventListener('submit', function(event) {

    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const surname = document.getElementById('surname').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!name || !surname || !email || !password) {
        alert('Будь ласка, заповніть всі поля!');
        return;
    }

    if (password.length < 8) {
        alert('Пароль має містити мінімум 8 символів!');
        return;
    }
    const hasLetter = /[a-zA-Zа-яА-Я]/.test(password);
    const hasNumber = /\d/.test(password);

    if (!hasLetter || !hasNumber) {
        alert('Пароль має містити хоча б одну букву і одну цифру!');
        return;
    }
    
    const hasLetterName = /[a-zA-Zа-яА-Я]/.test(name);
    if (!hasLetterName) {
        alert('Імя має містити тільки букви!');
        return;
    }
    const hasLetterSurname = /[a-zA-Zа-яА-Я]/.test(name);
    if (!hasLetterSurname) {
        alert('Прізвище має містити тільки букви!');
        return;
    }

    alert('Форма успішно заповнена!');
    this.submit(); 
});

