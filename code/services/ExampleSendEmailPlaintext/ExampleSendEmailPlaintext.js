
function ExampleSendEmailPlaintext(req, resp){
    
    // Hint: `req` object contains useful information, check the logs to see its contents
    log(req)
    
    var sgEmail = SendGridEmail(SEND_GRID_TOKEN, ORIGIN_EMAIL)    
    sgEmail.SendEmailToList("This is an example of a plaintext email sent with ClearBlade Platform's Send Grid Email Integration. It gets even better! Check out the other examples here: github.com/rreinold/IoT-Package-SendGrid-Email-Integration", "Howdy from Cooper at ClearBlade!", EMAIL_RECIPIENTS, function(err, data){
        if(err){
            log(JSON.stringify(err))
            resp.error(err)
        }
        var message = "Successful email sent!"
        log(message); 
        resp.success(message);
    })
}