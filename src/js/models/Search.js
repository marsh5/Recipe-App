import axios from 'axios';

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults(){
        //axios works similar to fetch. But it works on all browswers unlike fetch. It also returns a JSON, which is better.
        try {
            const res = await axios(`https://forkify-api.herokuapp.com/api/search?&q=${this.query}`);
            //instead of returning anything, we are just storing the result in the this.result value.
            this.result = res.data.recipes;
            //console.log(this.result);
        } catch (error){
            alert(error);
        }
        
    }


}

