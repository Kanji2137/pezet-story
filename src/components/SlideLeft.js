import React, { Component } from 'react';

import TextMusicFirst from './slideLeftComponents/TextMusicFirst'
import TextMusicSecond from './slideLeftComponents/TextMusicSecond'
import TextMusicThird from './slideLeftComponents/TextMusicThird'
import TextMusicFourth from './slideLeftComponents/TextMusicFourth'
import TextMusicFifth from './slideLeftComponents/TextMusicFifth'

import Bottle from './Bottle'

class SlideLeft extends Component {
    render(){
        return (
            <div >
                <TextMusicFirst/>
                <TextMusicSecond/>
                <TextMusicThird/>
                <TextMusicFourth/>
                <TextMusicFifth/>
                <Bottle/>
            </div>
        );
    }
}


export default SlideLeft;
