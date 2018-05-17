function TestSendEmailMissingAuthToken(req, resp){
    var sgEmail = SendgridEmail(null, "originEmail@gmail.com") // Missing auth token
    sgEmail.SendEmailToList("","","",function(err, data){
        if( ! err){
            resp.error("We should have failed becuase we did not include auth token")
        }
        resp.success("Successfully detected failure to provide auth token")
    })
}