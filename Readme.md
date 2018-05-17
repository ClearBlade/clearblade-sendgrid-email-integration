
# ipm package: sendgrid-email-library

## Overview
SendGrid is an email service trusted by developers and marketers for time-savings, scalability and delivery expertise.  

To get an overview of SendGrid features and functionality click [here](https://sendgrid.com). 

If any suggestions or addition of new methods create a pull request. For further support, comment or create issues on this repo.

This is an ipm package, which contains one or more reusable assets within the ipm Community. The 'package.json' in this repo is a ipm spec's package.json, [here](https://docs.clearblade.com/v/3/6-ipm/spec), which is a superset of npm's package.json spec, [here](https://docs.npmjs.com/files/package.json).

[Browse ipm Packages](https://ipm.clearblade.com)

## Setup

- Create a free SendGrid Account. 
- Log into your SendGrid account, and view the Settings > API Keys tab. Create an API Key with full access to "Mail Send" rights.
- Update `SendGridConstants` Library

```js
// TODO Use your own credentials, these are examples
var SEND_GRID_TOKEN = "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"
var ORIGIN_EMAIL = "example@sendgrid.com";
var EMAIL_RECIPIENTS = ["email1@email.com"]
```

- Add 'SendGridEmail' as a dependency to any of your code services (Settings > Requires > Add)

## Usage

Run `ExampleSendEmailPlaintext` Code Service, also here for reference:

```js
var sgEmail = SendGridEmail(SEND_GRID_TOKEN, ORIGIN_EMAIL)
sgEmail.SendEmailToList("Alert!", "ClearBlade Email Alert", EMAIL_RECIPIENTS, function(err, data){
     if(err){
         resp.error(err)
     }
     var message = "Successful email sent!"
     resp.success(message);
});
```

## Assets

### Code Services

Examples:

4. `ExampleSendEmailPlaintext` - Sends an email with static plaintext content
3. `ExampleSendEmailParameterized` - Sends an email with a dynamic plaintext content with parameter passed into Code Service
2. `ExampleSendEmailHTML` - Sends an email with static HTML content
1. `ExampleSendEmailAdvanced` - Sends an email with dynamic HTML Content passed into Code Service

Tests:

5. `TestSendEmailMissingAuthToken` - Tests init and validation logic
6. `TestSendEmailMissingOriginEmail` - Tests validation of origin email

### Code Libraries

1. `SendGridConstants` - This lib has constants which needs to be set by the user to test the example services. It is recommended to store keys in the constants library for centralized management of keys.
2. `SendGridEmail` - Described in the API section.

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
