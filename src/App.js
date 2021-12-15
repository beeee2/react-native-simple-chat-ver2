import React, { useState } from 'react';
import { StatusBar, Image } from 'react-native';
import AppLoading from 'expo-app-loading';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './theme';

const cacheImages = images => {
    return images.map(image => {
        if (typeof image === 'string'){
            return Image.prefetch(image);
        } else {
            return Asset.fromModule(image).downloadAsync();
        }
    });
};

const cacheFonts = fonts => {
    return fonts.map(font => Font.loadAsync(font));
};

const App = () => {
    const [isReady, setIsReady] = useState(false);

    const _loadAssets = async () => {
        const imageAssets = cacheImages([require('../assets/splash.png')]);
        const fontAssets = cacheFonts([]);

        await Promise.all([...imageAssets, ...fontAssets]);
    };

    return isReady ? (
        <ThemeProvider theme={theme}>
            <StatusBar barStyle="dark-content" />
        </ThemeProvider>
    ) : (
        <AppLoading /> 
    );
};

export default App;