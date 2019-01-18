import {MAP_API_KEY, MAP_SERVER_URL} from 'react-native-dotenv'

export const addressToPoint = async (query, filters = {}) => {
    let queryString = queryBuilder(query, filters);
    let result = await fetch(queryString);
    return JSON.parse(result._bodyText);
};

export const extractPoints = async points => {
    let rss = await points;
    let rs = rss.features;
    return rs.map((result) => {
        return {
            name: result.place_name,
            id: result.id,
            geometry: result.center
        }
    });
};

const queryBuilder = (query, filters) => {
    let queryString = `${MAP_SERVER_URL}${query}.json?access_token=${MAP_API_KEY}`;
    if (filters.country) {
        queryString += "&country=" + filters.country;
    }
    return queryString;
};