

function responsive() {
    var nav = document.getElementById("navWrapper")
    if(nav.className === "navbar") {
        nav.className += " active"
    } 
    
    else {
        nav.className = "navbar"
    }
}

function checkSelect() {
    var ctrlSelect = document.getElementById("dropDownMenu");
    if(ctrlSelect.selectedIndex == 0) {
        alert("Select the menu!");
        ctrlSelect.focus();
    }
}

function radioCheck() {
    var radioBtn = document.getElementsByName("radioBtn");
    var radioBtnChk = 0

    for(vari = 0; i < radioBtn.length; i++) {
        if(radioBtn[i].checked == true) {
            alert(radioBtn[i].value);
            radioBtnChk++;
        }
    }

    if(radioBtnChk == 0) {
        alert("Check the radio button!");
        return;
    }
}

function nameValidation(value, name)
{
    var val = /^[A-Z][A-Za-z]*$/ // regular expression
    var ret = val.test(value) // check value passes regular expression
    if(!ret) // if failed validation
        addErrorToErrorList(name) // add Error
    else 
        removeErrorFromErrorList(name) // remove Error if only side panel conatines error
    return ret; 
}

function passwordValidation(value, name)
{
    var val = /^[a-zA-Z](?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(.{6})/
    var ret = val.test(value)
    if(!ret)
        addErrorToErrorList(name)
    else
        removeErrorFromErrorList(name)
    
    if(name === "confirmPassword")
    {
        var pass = document.getElementById("password").value
        var errStr = "confirmPasswordMisMatch"
        if(pass!==value)
            addErrorToErrorList(errStr)
        else
            removeErrorFromErrorList(errStr)
    }
    return ret;
}

function userNameValidation(value, name)
{
    var val=/^[a-zA-Z](?=.*[a-zA-Z])(.{5})/
    var ret = val.test(value)
    if(!ret)
        addErrorToErrorList(name)
    else
        removeErrorFromErrorList(name)
    return ret;
}

function addErrorToErrorList(name) {
    var errId = name + "Err" // create error id
    var errList = document.getElementById('errorList') // get Error List
    var l = document.createElement('li'); // create li
    l.setAttribute('id', errId); // set id for li
    l.innerHTML = "Validation failed for " + name // contents
    if (!document.getElementById(errId)) // if side panel doesnt contain error item
        errList.appendChild(l)
}

function removeErrorFromErrorList(name) {
    var errId = name + "Err"
    var errList = document.getElementById('errorList')
    var errItem = document.getElementById(errId)
    if (errItem !== null) // if exists, remove
        errList.removeChild(errItem);
}

function submitValidation() {
    var fname = document.getElementById('firstname').value
    
    var lname = document.getElementById('lastname').value
    
    var pass = document.getElementById('password').value
    
    var confirmPass = document.getElementById('confirmPassword').value
    
    var userName = document.getElementById('username').value

    if(!(nameValidation(fname, "firstname") && nameValidation(lname, "lirstname") && 
    passwordValidation(pass, "password") && pass === confirmPass && userNameValidation(userName,"username"))) {
        event.preventDefault();
        console.log("no")
        return false;
    }
    else {
        console.log("go")
        return true;
    }
    
}