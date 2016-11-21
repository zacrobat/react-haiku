import React, {Component} from 'react';
import InputBox from './InputBox';

function syllableCounter(word) {
    word = word.toLowerCase();
    if (word.length <= 3) {
        return 1;
    }
    word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');
    word = word.replace(/^y/, '');
    return word.match(/[aeiouy]{1,2}/g).length;
}

class SyllableCount extends React.Component {
  render () {
    return (
      <div>
        <h3>
          Syllable count:
          {(" " + syllableCounter('forest trees and bark'))}
        </h3>

      </div>
    )
  }
}
export default SyllableCount;
