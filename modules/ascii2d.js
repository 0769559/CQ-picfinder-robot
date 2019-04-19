import {
    get
} from 'axios';

function search(imgURL){
    return get('https://ascii2d.net/search/url/'+imgURL,{
        timeout: 6000
    });
}

export default search;
