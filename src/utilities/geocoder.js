import {MAP_API_KEY, MAP_SERVER_URL} from 'react-native-dotenv'

export const addressToPoint = async (query, filters = {}) => {
    let queryString = queryBuilder(query, filters);
    try {
        let result = await fetch(queryString);
        return JSON.parse(result._bodyText);
    } catch (e) {
        console.log('some error');
        return {features: []}
    }
};

export const extractPoints = async points => {
    let rss = await points;
    let rs = rss.features;
    try {
        return rs.map((result) => {
            return {
                name: result.place_name,
                id: result.id,
                geometry: result.center
            }
        });
    } catch (e) {
        return [];
    }
};

const queryBuilder = (query, filters) => {
    let queryString = `${MAP_SERVER_URL}${query}.json?access_token=${MAP_API_KEY}`;
    if (filters.country) {
        queryString += "&country=" + filters.country;
    }
    return queryString;
};