/**
 * UnScrembl : UnObfusticate message page.
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { useState }      from 'react';
import { useEffect }     from 'react';
import { useRef }        from 'react';
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
	TextInput,
	Keyboard,
	KeyboardAvoidingView,
} from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faClipboard }     from '@fortawesome/free-solid-svg-icons';
import Clipboard           from '@react-native-clipboard/clipboard';
import { colours }         from '../constants';
import { unScrembl }       from '../functions/gubbins';

export default function () {
	const [scrembledText,   setScrembledText  ] = useState('');
	const [unScrembledText, setUnScrembledText] = useState('');
	function copyToClipboard() {
		Clipboard.setString(unScrembledText);
		ToastAndroid.show("Copied to Clipboard!", ToastAndroid.LONG);
	}
	async function pasteFromClipboard() {
		const clipboardText = await Clipboard.getString();
		setScrembledText(clipboardText);
	}
	function onUnScrembl() {
		Keyboard.dismiss();
		let unobfusticated = unScrembl(scrembledText);
		setUnScrembledText(unobfusticated);
	}
	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === 'ios' ? 'padding' : 'padding'}
			style={styles.centre}
		>
			<Text style={styles.medText}>UnScrembl a message</Text>
			<View style={styles.textInputContainer}>
				<TouchableOpacity
					style={styles.button}
					onPress={() => pasteFromClipboard()}
				>
					<Text style={styles.buttonText}>
						<FontAwesomeIcon  color={colours.scremblWhite} size={25} icon={faClipboard} />
						<Text style={styles.textSmall}>Paste from Clipboard</Text>
					</Text>
				</TouchableOpacity>
				<TextInput style={styles.textInput}
					multiline
					editable
					onChangeText={text => setScrembledText(text)}
					value={scrembledText}
					placeholder="Or type your Scrembled message here"
					numberOfLines={4}
				 />
			</View>
            <TouchableOpacity
                style={styles.button}
                onPress={() => onUnScrembl()}
            >
                <Text style={styles.buttonText}>UnScrembl</Text>
            </TouchableOpacity>
			{unScrembledText !== '' &&
				<>
				<View style={styles.textInputContainer}>
					<TextInput style={styles.textInput}
						multiline
						editable={false}
						value={unScrembledText}
						placeholder="UnScrembled message here"
						numberOfLines={4}
					 />
				</View>
				<TouchableOpacity
					style={styles.button}
					onPress={() => copyToClipboard()}
				>
					<Text style={styles.buttonText}>
						<FontAwesomeIcon  color={colours.scremblWhite} size={25} icon={faClipboard} />
					</Text>
				</TouchableOpacity>
				</>
			}
		</KeyboardAvoidingView>
	);
}
