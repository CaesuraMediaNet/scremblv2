/**
* The thing that does the thing.
*
* @format
* @flow strict-local
*/

import { Base64 } from 'js-base64';

const now         = new Date();
const epochOffset = Math.floor(now/8.64e7) - 19000;
const hex         = epochOffset.toString(16)
const hexArr      = hex.split ('');
const base64      = Base64.encode(hex);

export function scrembl(message) {
	var chars       = message.split('');
	var output_text = "^";
	var offset      = 0;
	for (var i=0; i < chars.length; i++) {
		switch (i) {
			case 0  : offset = parseInt (hexArr[0], 16); //eslint-no-fallthrough
			case 1  : offset = parseInt (hexArr[1], 16); //eslint-no-fallthrough
			case 2  : offset = parseInt (hexArr[2], 16); //eslint-no-fallthrough
			case 3  : offset = parseInt (hexArr[3], 16); //eslint-no-fallthrough
			default : offset = 0;
		}
		var asci = (parseInt (offset + message.charCodeAt(i)) + parseInt (epochOffset)).toString(16);
		output_text += asci + "%";
	}
	output_text = output_text.replace (/%$/, '$') + base64;
	return output_text;
}

export function unScrembl(message) {
	var enc_base64  = message.replace(/^.*\$/, '');
	var output_text = "";
	if (enc_base64 !== base64) {
		output_text = "Out of date Scrembl, sorry!";
	} else {
		var asciis      = message.replace(/^\^/, '').replace(/\$.+$/, '').split('%');
		var offset      = 0;
		for (var i=0; i < asciis.length; i++) {
			switch (i) {
				case 0  : offset = parseInt (hexArr[0], 16); //eslint-no-fallthrough
				case 1  : offset = parseInt (hexArr[1], 16); //eslint-no-fallthrough
				case 2  : offset = parseInt (hexArr[2], 16); //eslint-no-fallthrough
				case 3  : offset = parseInt (hexArr[3], 16); //eslint-no-fallthrough
				default : offset = 0;
			}
			var ch = String.fromCharCode((parseInt (asciis[i], 16) - offset - parseInt (epochOffset)));
			if (!ch.match(/^[\P{Cc}\P{Cn}\P{Cs}]+$/gu)) {
				output_text = "Out of date Scrembl, sorry!";
				break;
			}
			output_text += ch;
		}
	}
	return output_text;
}
