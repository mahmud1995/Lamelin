console.log("Signup frontend javascript file");

function validateSignupForm() {
    const memberNick = $(".member-nick").val();
    const memberPhone = $(".member-phone").val();
    const memberPassword = $(".member-password").val();
    const confirmPassword = $(".confirm-password").val();
    

    // shart quyamiz
    if(
        memberNick === "" || 
        memberPhone === "" || 
        memberPassword === "" || 
        confirmPassword === ""
    ) {
        alert("Please insert all required inputs");
        return false;
    }

    if(memberPassword !== confirmPassword) {
        alert("Passwords are different, Please check!");
        return false;
    }
};