let btn = document.getElementById('add-task');


btn.addEventListener('click', function() {
    let firstName = document.getElementById('firstName');
    let lastName = document.getElementById('lastName');
    let age = document.getElementById('age');
    let gender = document.getElementById('gender');
    let email = document.getElementById('email');

    let data ={
        firstName: firstName.value,
        lastName: lastName.value,
        age: age.value,
        gender: gender.value,
        email: email.value
    }
    
    fetch('localhost:3000/client/add' ,{
        method: 'post',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify( data )
    })
    
})