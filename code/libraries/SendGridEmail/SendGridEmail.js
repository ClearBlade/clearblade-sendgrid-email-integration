

/**
 * Email service trusted by developers and marketers for time-savings, scalability, and delivery expertise.
 * @typedef {Object} SendGridEmail
 * @param {string} authToken
 * @param {string} originEmail
 * 
 * @example  
 * var sgEmail = SendGridEmail(SEND_GRID_TOKEN, ORIGIN_EMAIL)
 * 
 */

function SendGridEmail(authToken, originEmail) {
    var SEND_GRID_API_URI = "https://api.sendgrid.com/v3/mail/send";
    if (!_isValidString(authToken)) {
        throw new Error('AuthToken must be set before calling SendGrid API');
    }
    if (!_isValidString(originEmail)) {
        throw new Error('OriginEmail must be set before calling SendGrid API');
    }

    function _isValidString(str) {
        return str && (typeof str === 'string');
    }

    /**
     * SendEmailToList = Sends email with given subject and body to a list of recipients.
     * @memberof SendGridEmail
     * @param {string} emailBody - body of your email
     * @param {string} subject - subject of your email
     * @param {string[]} recipientList - list of recipients 
     * @param {callback} callback
     * @returns {Object} response, as specified in sendgrid api
     * 
     * @example
     * //Assign relevant values to the variables and constants
     * var sgEmail = SendGridEmail(SEND_GRID_TOKEN, ORIGIN_EMAIL)
     * sgEmail.SendEmailToList(message, subject, emailRecipientList, function(err, data){
     *      if(err){
     *          resp.error(err)
     *      }
     *      var message = "Successful email sent!"
     *      resp.success(message);
     * });
     */
    function SendEmailToList(emailBody, subject, recipientList, callback) {
        var toField = recipientList.map(function (addr) { return { email: addr } })
        var requestObject = Requests();
        var payload = {
            personalizations: [
                {
                    to: toField,
                    subject: subject,
                },
            ],
            from: {
                email: originEmail,
            },
            content: [
                {
                    type: 'text/html',
                    value: emailBody,
                },
            ],
        }
        var httpBody = JSON.stringify(payload)


        var options = {
            uri: SEND_GRID_API_URI,
            headers: {
                "Authorization": ["Bearer", authToken].join(' '),
                "Content-Type": "application/json"
            },
            body: httpBody
        };

        log(options)

        requestObject.post(options, function (err, resp) {
            if (callback) {
                callback(err, resp);
            }
        });

    };
}

/**
 * This callback is displayed as part of sgEmail.
 * @callback callback
 * @param {Object} err
 * @param {Object} resp
 */