import axios from 'axios';

const getSubCount = async () => {
    const URL = 'https://corsanywhere.herokuapp.com/https://www.youtube.com/c/PokerFaceYoutube/about';
    try {
        const response = await axios.get (URL);
        const text = response.data;
        // (?<="subscriberCountText":{"accessibility":{"accessibilityData":{"label":")
        // (this is what we want = 3.26k subscribers) = (.+?)
        // (?="}},"simpleText":")
        const regex = '(?<="subscriberCountText":{"accessibility":{"accessibilityData":{"label":")(.+?)(?="}},"simpleText":")';
        const result = text.match(regex)[0]; // Get the first result        
    }
    catch (error) {
        console.log(error);
    }
}
