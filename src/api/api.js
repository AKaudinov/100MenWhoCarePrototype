import fetch from 'isomorphic-fetch';

const apiUrl = 'https://denver-100menwhocare.herokuapp.com/api/contacts';
//const localApiUrl = 'http://localhost:3000/api/contacts';

const request = (method, body) => {
    return method.toLowerCase() === 'post' ? new Request(apiUrl, {
        method: 'POST',
        body: JSON.stringify(body),
        mode: 'cors',
        redirect: 'follow',
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    }) :
        new Request(apiUrl, {
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
        //let fetchRequest = new Request(apiUrl, {
        //    method: 'POST',
        //    body: JSON.stringify(contactInfo),
        //    mode: 'cors',
        //    redirect: 'follow',
        //    headers: new Headers({
        //        'Content-Type': 'application/json'
        //    })
        //});
        let fetchRequest = request('post', contactInfo);
        return fetch(fetchRequest)
        .then(response => response.json());
    }

    static GetAllContacts(){
        //let fetchRequest = new Request(apiUrl, {
        //   method: 'GET',
        //    mode: 'cors',
        //    redirect: 'follow',
        //    headers: new Headers({
        //        'Content-Type': 'application/json'
        //    })
        //});
        let fetchRequest = request('get');
        return fetch(fetchRequest)
        .then(response => response.json());
    }
}

export default api;