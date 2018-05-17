
# ipm package: sendgrid-email-library

## Overview
SendGrid is a email service trusted by developers and marketers for time-savings, scalability and delivery expertise.  

To get an overview of SendGrid features and functionality click [here](). If any suggestions or addition of new methods create a pull request. For further support, comment or create issues on this repo.

This is an ipm package, which contains one or more reusable assets within the ipm Community. The 'package.json' in this repo is a ipm spec's package.json, [here](https://docs.clearblade.com/v/3/6-ipm/spec), which is a superset of npm's package.json spec, [here](https://docs.npmjs.com/files/package.json).

[Browse ipm Packages](https://ipm.clearblade.com)

## Setup
If you already have a SendGrid account,  API key can be generated/accessed in your account. Click [here](https://sendgrid.api-docs.io/v3.0/how-to-use-the-sendgrid-v3-api/api-authentication#api-keys) for further details. 

## Usage
This library helps lets user use an email service provided by SendGrid through ClearBlade platform.

##Assets
### Code Services
Following are sample services:- 

1. ExampleSendEmailAdvanced
2. ExampleSendEmailHTML
3. ExampleSendEmailParameterized
4. ExampleSendEmailPlaintext
5. TestSendEmailMissingAuthToken
6. TestSendEmailMissingOriginEmail

### Code Libraries
1. SendGridConstants - This lib has constants which needs to be set by the user to test the example services. It is recommended to store keys in the constants library for centralized management of keys.
2. SendGridEmail - Described in the API section.

## API<a name="sendgrid-email-library"></a>
### Typedefs

<dl>
<dt><a href="#callback">callback</a> : <code>function</code></dt>
<dd><p>This callback is displayed as part of sgEmail.</p>
</dd>
<dt><a href="#SendGridEmail">SendGridEmail</a> : <code>Object</code></dt>
<dd><p>Email service trusted by developers and marketers for time-savings, scalability, and delivery expertise.</p>
</dd>
</dl>

<a name="callback"></a>

### callback : <code>function</code>
This callback is displayed as part of sgEmail.

**Kind**: global typedef  

| Param | Type |
| --- | --- |
| err | <code>Object</code> | 
| resp | <code>Object</code> | 

<a name="SendGridEmail"></a>

## SendGridEmail : <code>Object</code>
Email service trusted by developers and marketers for time-savings, scalability, and delivery expertise.

**Kind**: global typedef  

| Param | Type |
| --- | --- |
| authToken | <code>string</code> | 
| originEmail | <code>string</code> | 

**Example**  
```js
var sgEmail = SendGridEmail(SEND_GRID_TOKEN, ORIGIN_EMAIL)
```
<a name="SendGridEmail.SendEmailToList"></a>

### SendGridEmail.SendEmailToList(emailBody, subject, recipientList, callback) ⇒ <code>Object</code>
SendEmailToList = Sends email with given subject and body to a list of recipients.

**Kind**: static method of [<code>SendGridEmail</code>](#SendGridEmail)  
**Returns**: <code>Object</code> - response, as specified in sendgrid api  

| Param | Type | Description |
| --- | --- | --- |
| emailBody | <code>string</code> | body of your email |
| subject | <code>string</code> | subject of your email |
| recipientList | <code>Array.&lt;string&gt;</code> | list of recipients |
| callback | [<code>callback</code>](#callback) |  |

**Example**
 
```js
//Assign relevant values to the variables and constants
var sgEmail = SendGridEmail(SEND_GRID_TOKEN, ORIGIN_EMAIL)
sgEmail.SendEmailToList(message, subject, emailRecipientList, function(err, data){
     if(err){
         resp.error(err)
     }
     var message = "Successful email sent!"
     resp.success(message);
});
```
