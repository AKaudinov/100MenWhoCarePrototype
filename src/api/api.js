import fetch from 'isomorphic-fetch';

class api {
    static SendContact(contactInfo){
        let fetchRequest = new Request('http://localhost:3000/api/contacts', {
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
    }

    static GetAllContacts(){
        let fetchRequest = new Request('http://localhost:3000/api/contacts', {
           method: 'GET',
            mode: 'cors',
            redirect: 'follow',
            headers: new Headers({
                'Content-Type': 'text/plain'
            })
        });
        return fetch(fetchRequest)
        .then(response => response.json());
    }
}
export default api;