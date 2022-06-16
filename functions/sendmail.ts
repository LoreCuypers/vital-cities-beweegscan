const sgMail = require('@sendgrid/mail')

exports.handler = async (event: any, context: any, callback: any) => {

    const { pdf, mail, city } = JSON.parse(event.body)

    sgMail.setApiKey(process.env.SENDGRID_API_KEY)

    const mail_to_send = {
        from: "lore.cuypers@howest.be",
        to: mail,
        subject: 'Rapport over de beweegvriendelijkheid van jouw stad of gemeente',
        templateId: 'd-c5d068946c8f4e4b8b2d9f816c5618ee',
        dynamicTemplateData: {
            city: city
        },
        attachments: [{
            filename: 'Beweegscan.pdf',
            content: pdf,
            type: 'application/pdf',
            disposition: 'attachment'
        }]
    }

    try{
        await sgMail.send(mail_to_send).then(() => console.log("Email sent!!!"))

        return{
            statusCode: 200,
            body: JSON.stringify("Message sent successfully")
        }
    } catch(e: any){
        return{
            statusCode: e.code,
            body: JSON.stringify(e.message)
        }
    }
}