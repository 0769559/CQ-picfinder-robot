import {
    get
} from 'axios';

function search(imgURL, db, debug = false){
    return get('https://ascii2d.net/search/url/'+imgURL)
}

export default search;
