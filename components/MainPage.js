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

export default function MainPage ({page, setPages, scrollRef}) {
   return (
      <>
      <Header page={page} setPages={setPages} />
      {page === 'main' &&
      <>
      <View style={styles.mainPageContainer}>
         <Text style={styles.medText}>
            I have a message to : 
         </Text>
         <View style={[styles.spaceAround, styles.mainButtonContainer]}>
            <TouchableOpacity
               style={styles.buttonSmall}
               onPress={() => setPages('scrembl')}
            >
               <Text style={styles.buttonText}>Scrembl</Text>
            </TouchableOpacity>
            <TouchableOpacity
               style={styles.buttonSmall}
               onPress={() => setPages('unscrembl')}
            >
               <Text style={styles.buttonText}>UnScrembl</Text>
            </TouchableOpacity>
         </View>
      </View>
      <View>
         <Text style={[styles.textSmall, styles.marginVert]}>
            Convert plain text into gobbldegook, paste that into your socials and other people can paste it
            back here to see what you wrote!
         </Text>
         <Text style={[styles.textSmall, styles.marginVert]}>
            No messages are stored anywhere, not even in this App, your messages are safe.
         </Text>
         <Text style={[styles.textSmall, styles.marginVert]}>
            Scrembled messages are only valid for 24 hours.
         </Text>
         <Text style={[styles.textSmall, styles.bigMarginTop, styles.margin]}>
            (Note that this is not "encryption" but obfustication. You can unScrembl a message
            without using this App if you know how the obfustication algorithm works (it is online
            under our "github" account). This Scrembl App is meant to be occassionally useful.)
         </Text>
      </View>
      </>
      }
      {page === 'scrembl' &&
         <Scrembl scrollRef={scrollRef} />
      }
      {page === 'unscrembl' &&
         <UnScrembl scrollRef={scrollRef} />
      }
      </>
   )
}
