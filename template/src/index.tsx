import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {BottomTab} from './navigator/bottom-tab';
import {Provider} from 'react-redux';
import {persistor, store} from './store';
import {PersistGate} from 'redux-persist/integration/react';
export const AppContainer = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <BottomTab />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};
