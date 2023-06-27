/**
 * UnScrembl : Obfusticate message page.
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
import {
	faClipboard,
	faTrash,
}                          from '@fortawesome/free-solid-svg-icons';
import Clipboard           from '@react-native-clipboard/clipboard';
import { colours }         from '../constants';
import { scrembl }         from '../functions/gubbins';

export default function () {
	const [unScrembledText, setUnScrembledText] = useState('');
	const [scrembledText,   setScrembledText  ] = useState('');
	function copyToClipboard() {
		Clipboard.setString(scrembledText);
		ToastAndroid.show("Copied to Clipboard!", ToastAndroid.LONG);
	}
	async function pasteFromClipboard() {
		const clipboardText = await Clipboard.getString();
		setUnScrembledText(clipboardText);
	}
	function onScrembl() {
		Keyboard.dismiss();
		let obfusticated = scrembl(unScrembledText);
		setScrembledText(obfusticated);
	}
	function clearText() {
		setUnScrembledText('');
		setScrembledText('');
	}
	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === 'ios' ? 'padding' : 'padding'}
		>
			<View style={[styles.spaceBetween, styles.mauveBox]}>
				<Text style={styles.textBoldMed}>Scrembl your message</Text>
				<TouchableOpacity
					style={styles.clearIcon}
					onPress={() => clearText()}
				>
					<FontAwesomeIcon  color={colours.scremblColour} size={30} icon={faTrash} />
				</TouchableOpacity>
			</View>
			<View style={styles.textInputContainer}>
				<TouchableOpacity
					style={styles.button}
					onPress={() => pasteFromClipboard()}
				>
					<View style={styles.spaceBetween}>
						<FontAwesomeIcon  color={colours.scremblWhite} size={30} icon={faClipboard} />
						<Text style={styles.textStyle}> Paste from Clipboard</Text>
					</View>
				</TouchableOpacity>
				<TextInput style={styles.textInput}
					multiline
					onChangeText={text => setUnScrembledText(text)}
					value={unScrembledText}
					placeholder="Or type your message here"
					numberOfLines={4}
				 />
			</View>
			<Text></Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => onScrembl()}
            >
                <Text style={styles.buttonText}>Scrembl</Text>
            </TouchableOpacity>
			<Text></Text>
			{scrembledText !== '' &&
				<>
				<View style={styles.textInputContainer}>
					<TextInput style={styles.textInput}
						multiline
						value={scrembledText}
						placeholder="Scrembled message here"
						numberOfLines={4}
					 />
					<TouchableOpacity
						style={styles.button}
						onPress={() => copyToClipboard()}
					>
						<View style={styles.spaceBetween}>
							<FontAwesomeIcon  color={colours.scremblWhite} size={30} icon={faClipboard} />
							<Text style={styles.textStyle}> Copy to Clipboard</Text>
						</View>
					</TouchableOpacity>
				</View>
				</>
			}
		</KeyboardAvoidingView>
	);
}
