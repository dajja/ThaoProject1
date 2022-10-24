function sendEmail(){Email.send({
    Host : "smtp.elasticemail.com",
    Username : "buiminh8690@gmail.com",
    Password : "A6F76D2EBAB6AE25FDE2349587C0BE21C450",
    To : 'thoapham2kk@gmail.com',
    From : "buiminh8690@gmail.com",
    Subject : "Forgot-Password",
    Body : "Password reset"
}).then(
  message => alert(message)
)}
