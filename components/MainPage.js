/**
 * Scrembl : Obfusticate messages to post on socials that can be unobfusticated by others.
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import { useState }   from 'react';
import { useEffect }  from 'react';
import { useRef }     from 'react';

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
}                  from 'react-native';

import styles      from '../styles';
import Header      from './Header';
import { colours } from '../constants';
import Scrembl     from './Scrembl';
import UnScrembl   from './UnScrembl';

export default function MainPage () {
	const [page, setPage] = useState('main');
	return (
		<>
		<Header page={'main'} setPage={setPage} />
		{page === 'main' &&
		<View style={styles.mainPageContainer}>
			<Text style={styles.bigText}>
				I have a message to : 
			</Text>
			<TouchableOpacity
				style={styles.button}
				onPress={() => setPage('scrembl')}
			>
				<Text style={styles.buttonText}>Scrembl</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.button}
				onPress={() => setPage('unscrembl')}
			>
				<Text style={styles.buttonText}>UnScrembl</Text>
			</TouchableOpacity>
		</View>
		}
		{page === 'scrembl' &&
			<Scrembl />
		}
		{page === 'unscrembl' &&
			<UnScrembl />
		}
		</>
	)
}
