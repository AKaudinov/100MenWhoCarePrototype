import delay from './delay';

let contactForm ={};


class ContactApi {
    static SendContact(contactInfo){
        contactInfo = Object.assign({}, contactInfo);
        return new Promise((resolve, reject) =>{
            setTimeout(() => {
                contactForm  = contactInfo;
                resolve('success');
            }, delay);
        });
    }
}


export default ContactApi;