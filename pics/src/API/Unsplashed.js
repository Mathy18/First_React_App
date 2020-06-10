import axios from 'axios';

export default axios.create({
baseURL:'https://api.unsplash.com',
headers : {
    Authorization : 'Client-ID CUpz8qyn3YEFg7sDjN3Jd5wDCHCycJsLDfK5lNyvCqo'    
   
    }
   }

)