const form = document.getElementById('form')
const errorElement = document.getElementById('error')

// untuk cek apakah panjang string alamat tidak lebih dari 50
function countLengthOfString(s)
{
    var len = s.length;
    return len;
}

// untuk cek apakah huruf a-z, A-Z dan space saja yang ada dalam string
function isContainCharAndSpace(s)
{
    let contain = false;
    s.split('').forEach((c) =>{
        if(c >= 'A' && c <= 'Z')
        {
            contain = true;
        }
        else if(c >= 'a' && c <= 'z')
        {
            contain = true;
        }
        else if(c == ' ')
        {
            contain = true;
        }
        else 
        {
            contain = false;
            return contain;
        }
    })

    return contain;
}
// untuk cek apakah huruf a-z dan A-Z saja yang ada dalam string
function isContainChar(s)
{
    let contain = false;
    s.split('').forEach((c) =>{
        if(c >= 'A' && c <= 'Z')
        {
            contain = true;
        }
        else if(c >= 'a' && c <= 'z')
        {
            contain = true;
        }
        else 
        {
            contain = false;
            return contain;
        }
    })

    return contain;
}

// untuk cek apakah ada huruf capital di dalam string
function isContainCapital(s)
{
    let contain = false
    s.split('').forEach((c) => {
       if(c >= 'A' && c <= 'Z')
       {
            contain = true
       }
    })

    return contain
}

// untuk cek apakah ada angka di dalam string
function isContainNumeric(s)
{
    let contain = false
    s.split('').forEach((c) => {
       if(c >= '0' && c <= '9')
       {
            contain = true
       }
    })

    return contain
}

// untuk cek apakah ada huruf kecil di dalam string
function isContainLowercase(s)
{
    let contain = false
    s.split('').forEach((c) => {
       if(c >= 'a' && c <= 'z')
       {
            contain = true
       }
    })

    return contain
}

const handleFormEvent = (event) => {
    event.preventDefault();
    
    const firstNameElement = document.getElementById('first-name');
    const lastNameElement = document.getElementById('last-name');
    const emailElement = document.getElementById('email');
    const addressElement = document.getElementById('address');
    const passwordElement = document.getElementById('password');
    const confirmPasswordElement = document.getElementById('confirm-password');
    var maleChecked = document.getElementById('dot-1').checked;
    var femaleChecked = document.getElementById('dot-2').checked;

    // Cek apakah ada yang kosong atau tidak (1)
    if(firstNameElement.value == '' || lastNameElement.value == '' || emailElement.value == '' || passwordElement.value == '' || confirmPasswordElement.value == '' || addressElement.value == '' || (maleChecked == false && femaleChecked == false))
    {
        errorElement.innerHTML = 'Every field is required';
        return
    }

    // cek apakah untuk first name hanya menggunakan 1 kata atau tidak (2)
    const spaceIndex = firstNameElement.value.trim();
    if(spaceIndex.includes(' '))
    {
        errorElement.innerHTML = 'There must be only 1 word in First Name!';
        return;
    }

    // untuk cek dalam email apakah ada titik dan koma (3)
    const atSignIndex = emailElement.value.indexOf('@');
    const dotSignIndex = emailElement.value.indexOf('.');
    console.log(atSignIndex)
    if(atSignIndex == -1)
    {
        errorElement.innerHTML = 'Email must be included \'@\'';
        return;
    }

    if(dotSignIndex == - 1)
    {
        errorElement.innerHTML = 'Email must be included \'.\'';
        return;
    }

    // untuk cek apakah isi yang ada di password sama dengan yang ada di confirm-password
    if (passwordElement.value != confirmPasswordElement.value)
    {
        errorElement.innerHTML = 'Password and Confirm password not same';
        return;
    }

    if(!isContainCapital(passwordElement.value) || !isContainLowercase(passwordElement.value) || !isContainNumeric(passwordElement.value))
    {
        errorElement.innerHTML = 'Password must contain at least one lowercase, uppercase, and number'
        return
    }

    // untuk cek apakah first name hanya mengandung alphabet atau tidak(4)
    if(!isContainChar(firstNameElement.value))
    {
        errorElement.innerHTML = 'First name must only contain alphabet';
        return
    }

    // untuk cek apakah last name hanya mengandung alphabet atau tidak
    if(!isContainCharAndSpace(lastNameElement.value))
    {
        errorElement.innerHTML = 'Last name must only contain alphabet';
        return
    }

    // untuk cek panjang string address (5)
    if(countLengthOfString(addressElement.value) > 50)
    {
        errorElement.innerHTML = '"Invalid length. Please input text with a maximum of 50 characters."'
        return
    }

    window.location.href = 'homepagee.html';

}

form.addEventListener('submit', handleFormEvent);