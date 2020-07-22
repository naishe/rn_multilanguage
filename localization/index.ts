import i18n, {
  LanguageDetectorAsyncModule,
  Services,
  InitOptions,
} from 'i18next';
import {initReactI18next} from 'react-i18next';
import AsyncStorage from '@react-native-community/async-storage';
import * as RNLocalize from 'react-native-localize';
import 'moment/min/locales';
import moment from 'moment';
import en from './en';
import hi from './hi';

export const AVAILABLE_LANGUAGES = {
  en,
  hi,
};

const AVALAILABLE_LANG_CODES = Object.keys(AVAILABLE_LANGUAGES);

const languageDetector: LanguageDetectorAsyncModule = {
  type: 'languageDetector',
  // If this is set to true, your detect function receives a callback function that you should call with your language,
  //useful to retrieve your language stored in AsyncStorage for example
  async: true,
  init: (
    _services: Services,
    _detectorOptions: object,
    _i18nextOptions: InitOptions,
  ) => {
    /* use services and options */
  },
  detect: (callback: (lng: string) => void) => {
    AsyncStorage.getItem('APP_LANG', (err, lng) => {
      // Handle error fetching stored data or no data stored case
      if (err || !lng) {
        if (err) {
          console.log('Error fetching "APP_LANG" from async store', err);
        } else {
          console.log(
            'No language is set, choosing the best available or English as fallback',
          );
        }
        const bestLng = RNLocalize.findBestAvailableLanguage(
          AVALAILABLE_LANG_CODES,
        );

        callback(bestLng?.languageTag ?? 'en');
        return;
      }
      callback(lng);
    });
  },
  cacheUserLanguage: (lng: string) => AsyncStorage.setItem('APP_LANG', lng),
};

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    resources: AVAILABLE_LANGUAGES,
    react: {
      useSuspense: false,
    },
    interpolation: {
      escapeValue: false,
      format: function (value: any, format?: string, lng?: string) {
        switch (format) {
          case 'flags':
            if (
              typeof value !== 'number' ||
              value < 1 ||
              !Number.isInteger(value)
            ) {
              return value;
            }
            if (lng === 'hi') {
              return [...Array(value as number)].map((_) => '🇮🇳').join(' ');
            } else {
              return [...Array(value as number)].map((_) => '🌎').join(' ');
            }
          default:
            return value;
        }
      },
    },
    defaultNS: 'common',
  });

i18n.on('languageChanged', (lng: string) => moment.locale(lng));
