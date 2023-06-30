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
   faAngleUp,
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
const minScrollHeight = 150; // Or : Dimensions.get('window').height / something;

// Debug
//

// App context.
//
import { colours }  from './constants';

// The Scrembl App.
//
const App: () => Node = () => {
   
   const [page, setPage]                                   = useState('main');
   const [prevPage, setPrevPage]                           = useState('main');
   const [contentVerticalOffset, setContentVerticalOffset] = useState(0);
   const scrollRef                                         = useRef();

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
   function BackToTop () {
      //https://spin.atomicobject.com/2021/04/20/react-native-building-scroll-top-button/
      //
      return (
         <TouchableOpacity
            style={styles.clearIcon}
            onPress={() => scrollRef.current.scrollTo({ x: 0, y : 0, animated: true })}
         >
            <View style={contentVerticalOffset > minScrollHeight ? styles.backToTop : styles.hideBTT}>
               <Text style={styles.medText}>Back To Top</Text>
               <FontAwesomeIcon  color={colours.scremblColour} size={50} icon={faAngleUp} />
            </View>
         </TouchableOpacity>
      );
   }
   return (
      <SafeAreaView style={styles.container}>
         <StatusBar />
         <ScrollView
            ref={scrollRef}
            contentInsetAdjustmentBehavior="automatic"
            keyboardShouldPersistTaps='handled'
            onScroll={event => {
               setContentVerticalOffset(event.nativeEvent.contentOffset.y);
            }}
         >
            <MainPage page={page} setPages={setPages} scrollRef={scrollRef}/>
            <BackToTop />
         </ScrollView>
      </SafeAreaView>
   );
};
export default App;
