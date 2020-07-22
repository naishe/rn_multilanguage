import React from 'react';
import {SafeAreaView, StyleSheet, Text, StatusBar} from 'react-native';
import './localization';
import {useTranslation} from 'react-i18next';
import LanguageSelector from './LanguageSelector';
import Section from './Section';
import moment from 'moment';

declare const global: {HermesInternal: null | {}};

const App = () => {
  const {t} = useTranslation();

  const user = {
    username: 'Nishant',
    intelligenceLevel: 7,
  };

  const userBill = {
    total: 420.69,
    paymentDueDate: 'May the fourth',
  };
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <SafeAreaView style={styles.main}>
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
});

export default App;
