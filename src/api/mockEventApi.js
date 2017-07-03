import delay from './delay';

let eventForm = {};

class EventApi {
    static CreateEvent(eventInfo){
        eventInfo = Object.assign({}, eventInfo);
        return new Promise((resolve, reject) => {
           setTimeout(() => {
               eventForm = eventInfo;
               resolve({
                   status: 'Event Created!'
               });
           }, delay);
        });
    }
}

export default EventApi;