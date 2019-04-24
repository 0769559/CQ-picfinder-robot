import {
    get
} from 'axios';
import Cheerio from 'cheerio';

function checkLinkValid(link){
    return get(link,{
        validateStatus: function (status) {
            return status != 404;
        }
    })
}

function getOrigin(link){
    return get(link,{
        timeout: 6000
    })
}

export default {
    checkLinkValid,
    getOrigin
};
