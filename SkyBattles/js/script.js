const TITLE_ID = "A7260";

function loginWithPlayFab() {
    let username = "Admin";
    let password = "123456";

    let loginRequest = {
        TitleId: 81879D3B5DEB1CCA,
        Username: username,
        Password: password
    };

    PlayFabClientSDK.LoginWithPlayFab(loginRequest, function(result) {
        localStorage.setItem("PlayFabID", result.data.PlayFabId);
    }, function(error) {
        console.error("Login failed", error);
    });
}

function updateAccount() {
    let newUsername = document.getElementById("username").value;
    let newEmail = document.getElementById("email").value;
    let newPassword = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm-password").value;
    let message = document.getElementById("message");

    if (!newUsername || !newEmail || !newPassword || !confirmPassword) {
        message.style.color = "red";
        message.innerText = "All fields are required!";
        return;
    }

    if (newPassword !== confirmPassword) {
        message.style.color = "red";
        message.innerText = "Passwords do not match!";
        return;
    }

    let updateRequest = {
        PlayFabId: localStorage.getItem("PlayFabID"),
        Username: newUsername,
        Email: newEmail
    };

    PlayFabClientSDK.UpdateUserTitleDisplayName(updateRequest, function(result) {
        message.style.color = "green";
        message.innerText = "Account updated successfully!";
    }, function(error) {
        message.style.color = "red";
        message.innerText = "Update failed! " + error.errorMessage;
    });

    let passwordRequest = {
        Email: newEmail,
        Password: newPassword
    };

    PlayFabClientSDK.SendAccountRecoveryEmail(passwordRequest, function() {
        console.log("Password update request sent.");
    }, function(error) {
        console.error("Error updating password:", error);
    });
}

loginWithPlayFab();
