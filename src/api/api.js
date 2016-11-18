import fetch from 'isomorphic-fetch';

class api {
    static SendContact(contactInfo){
        //implement actual call to the real API here.
    }
}


//static SendContact(contactInfo){
//    contactInfo = Object.assign({}, contactInfo);
//    return new Promise((resolve, reject) =>{
//        setTimeout(() => {
//            contactForm  = contactInfo;
//            resolve('Message Sent!');
//        }, delay);
//    });
//}
export default api;