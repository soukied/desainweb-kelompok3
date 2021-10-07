var adminAccounts = {
    "admin":"5c470fa30cdba0e836abedfe2f44d9c9"
}

function loginData(username, password) {
    let success = false;
    for(let _username in adminAccounts) {
        if (username == _username && adminAccounts[username] == md5(password)) {
            success = true;
            break;
        }
    }
    if (success)
        alert("Berhasil Login!!");
    else
        alert("Password anda salah!");
}