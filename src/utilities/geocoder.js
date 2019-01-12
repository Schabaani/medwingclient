import { MAP_API_KEY, MAP_SERVER_URL } from 'react-native-dotenv'

export const addressToPoint = async  query => {
    let result = await fetch(`${MAP_SERVER_URL}${query}.json?access_token=${MAP_API_KEY}&country=de`);
    console.log(JSON.parse(result._bodyText))
};