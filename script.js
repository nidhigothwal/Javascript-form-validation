

console.log('js file is working')

document.querySelector('#fromsubmit').addEventListener('click', function () {
    if (document.querySelector('#firstname').value === '') {
        document.querySelector('.error').innerText = 'First Name is Wrong.'
        return;
    }
    else {
        document.querySelector('.error').innerText = ''
    }


    if (document.querySelector('#lastname').value === '') {
        document.querySelector('.error').innerText = 'Last Name is Wrong.'
        return;
    }
    else {
        document.querySelector('.error').innerText = ''
    }

    if (document.querySelector('#phonenumber').value === '') {
        document.querySelector('.error').innerText = 'Phone Number is Wrong.'
        return;
    } else {
        document.querySelector('.error').innerText = ''
    }

    if (document.querySelector('#address').value === '') {
        document.querySelector('.error').innerText = 'Address is Wrong.'
        return;
    } else {
        document.querySelector('.error').innerText = ''
    }

    if (document.querySelector('#color').value === '') {
        document.querySelector('.error').innerText = ''
        return;
    } else {
        document.querySelector('#color').innerText = 'Successfully Submitted'
    }

})