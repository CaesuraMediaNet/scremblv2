/**
 * Scrembl : Obfusticate messages to post on socials that can be unobfusticated by others.
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import { useState }      from 'react';
import { useEffect }     from 'react';
import { useRef }        from 'react';
import type {Node}       from 'react';

import {
	SafeAreaView,
	ScrollView,
	StatusBar,
	StyleSheet,
	Text,
	useColorScheme,
	View,
	Button,
	FlatList,
	TouchableOpacity,
	Image,
	Platform,
	ToastAndroid,
	PermissionsAndroid,
	Dimensions,
	BackHandler,
	ActivityIndicator,
	Linking,
	Alert,
} from 'react-native';

// FontAwesome.
//
import {
	Colors,
} from 'react-native/Libraries/NewAppScreen';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
	faQuestion,
	faPlus,
	faMinus,
	faPlay,
	faGear,
	faTrash,
	faCalendar,
	faHouse,
	faCircleDot,
	faFloppyDisk,
} from '@fortawesome/free-solid-svg-icons';

// Other community libs.
//
import SplashScreen   from 'react-native-splash-screen';

// Local Components.
//
import styles       from './styles';
import MainPage     from './components/MainPage';

// Constants.
//
// Debug
//

// App context.
//
import { colors }   from './constants';

// The Scrembl App.
//
const App: () => Node = () => {
	
	const [page, setPage]         = useState('main');
	const [prevPage, setPrevPage] = useState('main');

	useEffect(() => {
		SplashScreen.hide();
	}, []);

    // https://reactnative.dev/docs/backhandler
    //
    useEffect(() => {
        const backAction = () => {
			if (page === 'main') {
				Alert.alert('Aha!', 'Are you sure you want to exit Scrembl?', [
					{
						text    : 'Cancel',
						onPress : () => null,
						style   : 'cancel',
					},
					{
						text    : 'YES',
						onPress : () => BackHandler.exitApp()
					},
				]);
				return true;
			} else {
				setPrevPage('main');
				setPage(prevPage);
				return true;
			}
        };
        const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            () => backAction (),
        );
        return () => backHandler.remove();
    },[page]);

	function setPages(newPage) {
		setPrevPage(page);
		setPage(newPage);
	}
	return (
		<SafeAreaView style={styles.container}>
			<StatusBar />
			<ScrollView
				contentInsetAdjustmentBehavior="automatic"
				keyboardShouldPersistTaps='handled'
			>
				<MainPage page={page} setPages={setPages}/>
			</ScrollView>
		</SafeAreaView>
	);
};
export default App;
