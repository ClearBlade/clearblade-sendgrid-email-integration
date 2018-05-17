function TestSendEmailMissingOriginEmail(req, resp){
    var sgEmail = SendGridEmail("dummyAPIKey") // Missing origin email as second parameter
    sgEmail.SendEmailToList("","","",function(err, data){
        if( ! err){
            resp.error("We should have failed becuase we did not include origin email")
        }
        resp.success("Successfully detected failure to provide origin email")
    })
}