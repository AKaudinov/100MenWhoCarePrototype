import fetch from 'isomorphic-fetch';
const apiUrl = 'https://denver-100menwhocare.herokuapp.com/api/';
//const localApiUrl = 'http://localhost:3000/api/contacts';
import aws from 'aws-sdk';


aws.config.update({
    accessKeyId: "test",
    secretAccessKey: "test"
});
let s3 = new aws.S3();


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
        let s3Params = {
            Bucket: 'hrdmenwhocaredenver',
            Key: 'SiteContent/DF logo_Site.png'
        };
        return s3.getObject(s3Params).promise()
        .then(data => data.Body).catch(err => err);
    }
}

export default api;