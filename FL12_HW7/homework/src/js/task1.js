var login = prompt('Please, input your email', '');
if (login === '' || login === null) {
    alert('Canceled');
} else if (login.length < 5 ) {
    alert('I don\'t know any emails having name length less than 5 symbols');
} else {
    if (login === 'admin@gmail.com' || login === 'user@gmail.com') {
        var password = prompt('Please, input your password', '');
    } else {
        alert('I don’t know you');
    }
}
if (password === '' || password === null) {
    alert('Canceled');
} else {
        if (login === 'user@gmail.com' && password === 'UserPass' ||
            login === 'admin@gmail.com' && password === 'AdminPass') {
            var newpassword = confirm('Do you want to change your password?');
            if (newpassword === false) {
                alert('You have failed the change');
            }
            if (newpassword === true) {
                var oldpassword = prompt('Please, write your old password', '');
            }
            if (oldpassword === '' || oldpassword === null) {
                alert('Canceled');
            }
            if (login === 'user@gmail.com' && oldpassword === 'UserPass' ||
                login === 'admin@gmail.com' && oldpassword === 'AdminPass') {
                newpassword = prompt('Please, write your new password', '');
            if (newpassword === '' || newpassword === false) {
                alert('Canceled');
            }
            if (newpassword.length < 6) {
                alert('It’s too short password. Sorry.');
            } else {
                var newpassword2 = prompt('Please, enter your new password again', '');
                    if (newpassword !== newpassword2) {
                        alert('You wrote the wrong password.')
                     }
                    if (newpassword === newpassword2){
                        alert('You have successfully changed your password.');
                    }
                }
            }
        } else {
        alert('Wrong password');
        }
}
