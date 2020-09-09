const sgMail=require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)


const sendWelcomeEmail=(email, name)=>{
    sgMail.send({
        to:email,
        from:'sakshi.ch121@gmail.com',
        subject:'WELCOME to Sakshis App',
        html:`<h1 style="color:red; background-color:pink;">Hey ${name}, Thanks for joining in!</h1><br><br>  <h4 style="color:blue;"> <strong>A very warm welcome to my app. Hope you enjoy using this app.</strong></h4><br><img src="https://source.unsplash.com/random" alt="hi">`
    })
}



const sendDeleteEmail=(email, name)=>{
    sgMail.send({
        to:email,
        from:'sakshi.ch121@gmail.com',
        subject:'Sorry to see you go!',
        html:`<h1 style="color:red; background-color:pink;">Hey ${name}, We noticed that you have left us!</h1><br><br>  <h4 style="color:blue;"> <strong>Is there some thing we could have done to keep you on board? In case you wnna join us back pls click here.</strong></h4><br>`
    })
}


module.exports={
    sendWelcomeEmail,
    sendDeleteEmail
}