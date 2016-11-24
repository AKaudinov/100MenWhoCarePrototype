import fetch from 'isomorphic-fetch';

class api {
    static SendContact(contactInfo){
        let fetchRequest = new Request('localhost:3000/api/contacts', {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(contactInfo),
            redirect: 'follow',
            headers: new Headers({
                'Content-Type': 'text/plain'
            })

        });
        return fetch(fetchRequest)
        .then(response => response.json());
        //implement actual call to the real API here.
    }

    static GetAllContacts(){
        return fetch('localhost:3000/api/contacts')
        .then(response => response.json());
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