export default class SliderInfo {
    _apiBase = 'https://live.vamoos.com/api/itineraries/VMD-VL1234';
    
    


    getResource = async (url) => {
        let res = await fetch(url);
    
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
    
        return await res.json();
    }

    

    getDays = async (id) => {
        const res = await this.getResource(`${this._apiBase}characters/${id}?`);
        return this._transformCharacter(res.data.results[0]);
    }

 
}
