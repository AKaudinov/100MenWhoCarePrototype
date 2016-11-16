import delay from './delay';

let contactForm ={};


class ContactApi {
    static SendContact(contactInfo){
        contactInfo = Object.assign({}, contactInfo);
        return new Promise((resolve, reject) =>{
            setTimeout(() => {
                contactForm  = contactInfo;
                resolve('Message Sent!');
            }, delay);
        });
    }
}


export default ContactApi;