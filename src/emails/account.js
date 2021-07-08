const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'taskmanager222@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the TaskMan app, ${name}. Let me know how you get along with the TaskMan app.`
    }).then(() => {
        console.log('Email sent')
    }).catch((error) => {
        console.error(error.response.body)
    })
}

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'taskmanager222@gmail.com',
        subject: 'Good Bye From TaskMan App!',
        text: `Goodbye, ${name}. Sorry to see you leave our app. I hope to see you back sometime soon.`
    }).then(() => {
        console.log('Email sent')
    }).catch((error) => {
        console.error(error.response.body)
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}

// const msg = {
//     to: 'umeshp2003@gmail.com', // Change to your recipient
//     from: 'umesh.khunt@gmail.com', // Change to your verified sender
//     subject: 'Sending with SendGrid is Fun',
//     text: 'and easy to do anywhere, even with Node.js',
//     html: '<strong>and easy to do anywhere, even with Node.js</strong>',
// }
// sgMail
//     .send(msg)
//     .then(() => {
//         console.log('Email sent')
//     })
//     .catch((error) => {
//         console.error(error)
//     })
