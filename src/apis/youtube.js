import axios from 'axios';

const KEY = 'AIzaSyDSCeDPNzLSzMrK3a4CE_jliupDcWlScPc';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        key : KEY,
        part: 'snippet',
        maxResults:5,
        type:'video'
    }
});