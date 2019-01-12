import I18n from 'react-native-i18n';
import en from './locales/en';
import de from './locales/de';

I18n.fallbacks = true;

I18n.translations = {
    en,
    de,
};

export default I18n;
