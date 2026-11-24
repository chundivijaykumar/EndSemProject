function login()
{
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if(email == "" || password == "")
    {
        alert("Please Enter Valid Details");
    }
    else
    {
        alert("Login Successful");
    }
}