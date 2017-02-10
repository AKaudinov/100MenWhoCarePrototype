import fetch from 'isomorphic-fetch';

const apiUrl = 'https://denver-100menwhocare.herokuapp.com/api/';
//const localApiUrl = 'http://localhost:3000/api/contacts';

const request = (method, service, body) => {
    let requestUrl = `${apiUrl}${service}`;
    return method.toLowerCase() === 'post' ? new Request(requestUrl, {
        method: 'POST',
        body: JSON.stringify(body),
        mode: 'cors',
        redirect: 'follow',
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    }) :
        new Request(requestUrl, {
            method: 'GET',
            mode: 'cors',
            redirect: 'follow',
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        });
};


class api {
    static SendContact(contactInfo){
        let fetchRequest = request('post', 'contacts', contactInfo);
        return fetch(fetchRequest)
        .then(response => response.json());
    }

    static GetAllContacts(){
        let fetchRequest = request('get', 'contacts');
        return fetch(fetchRequest)
        .then(response => response.json());
    }

    static GetGallery(){
        let fetchRequest = request('get', 'contentplacements');
        return fetch(fetchRequest)
        .then(response => response.json());
    }
}

export default api;