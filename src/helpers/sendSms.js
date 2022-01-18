import dotenv from "dotenv"

dotenv.config();
const client=require("twilio")(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_ID
);
const sendSms=(userName,document,applicationId,userphone)=>{
    client.messages.create({body:"Hello "+userName+" your "+document+" document "+applicationId,
    from:"+13257503360",
    to:userphone
}).then((message)=>console.log(message.sid))
}
export default sendSms;