import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  ScrollView,
  Button,
} from 'react-native';
import './localization';
import {useTranslation} from 'react-i18next';
import LanguageSelector from './LanguageSelector';
import Section from './Section';
import moment from 'moment';

declare const global: {HermesInternal: null | {}};

const App = () => {
  const {t} = useTranslation();

  // -- Funny Message loading logic --
  const [funnyMessageIndex, setFunnyMessageIndex] = useState(0);
  const jumbleJumble = () => {
    if (funnyMessages.length < 2) {
      return funnyMessages[0];
    }

    let newIndex = funnyMessageIndex;

    while (newIndex === funnyMessageIndex) {
      newIndex = Math.floor(Math.random() * funnyMessages.length);
    }

    setFunnyMessageIndex(newIndex);
  };
  // -- Funny Message loading logic ends --

  const user = {
    username: 'Nishant',
    intelligenceLevel: 7,
  };

  const userBill = {
    total: 420.69,
    paymentDueDate: 'May the fourth',
  };

  const genderPronouns = ['she', 'he', 'they', 'ze', 'ey'];
  const funnyMessages = t('funnyLoadingMessages', {returnObjects: true});
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <SafeAreaView style={styles.main}>
        <ScrollView style={styles.scroll}>
          <Section title="NAMESPACES">
            <Text>homePage NS: {t('homePage:welcome')}</Text>
            <Text>Deafult NS: {t('ok')}</Text>
          </Section>
          <Section title="CHANGE LANGUAGE">
            <LanguageSelector />
          </Section>
          <Section title="INTERPOLATION">
            <Text>{t('accountSuspended', {user, userBill})}</Text>
          </Section>
          <Section title="CUSTOM FORMAT">
            <Text>{t('flagsCount', {count: 3})}</Text>
            <Text>
              Moment.js Locale 42 minutes ago:
              {moment().subtract(42, 'minutes').fromNow()}
            </Text>
          </Section>
          <Section title="PLURALIZATION">
            <Text>{t('autopsy', {count: 0})}</Text>
            <Text>{t('autopsy', {count: 1})}</Text>
            <Text>{t('autopsy', {count: 7})}</Text>
          </Section>
          <Section title="CONTEXT: GENDER">
            {genderPronouns.map((context) => (
              <Text key={context}>{t('loveThyself', {context})}</Text>
            ))}
          </Section>
          <Section title="CONTEXT: PLURALIZATION">
            <Text>{t('autopsy', {count: 0, context: '0'})}</Text>
            <Text>{t('autopsy', {count: 1, context: '1'})}</Text>
            <Text>{t('autopsy', {count: 7, context: '7'})}</Text>
          </Section>
          <Section title="ARRAYS AND OBJECTS">
            <Text>{funnyMessages[funnyMessageIndex]}</Text>
            <Button onPress={() => jumbleJumble()} title="ANOTHER MESSAGE" />
          </Section>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // width: '100%',
  },
  scroll: {
    flex: 1,
  },
});

export default App;
