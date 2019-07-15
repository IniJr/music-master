import React, { Component } from 'react';
import './App.css';

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playing: false,
            playingUrl: '',
            audio: null
        }
    }

    playAudio(previewUrl) {
        let audio = new Audio(previewUrl);
        if (!this.state.playingg) {
            audio.play()
            this.setState({
                playing: true,
                playingUrl: previewUrl,
                audio
            })
        } else {
            if (this.state.playingUrl === previewUrl) {
                this.state.audio.pause();
                this.setState({
                    playing: false 
                })
            } else {
                this.state.audio.pause();
                audio.play()
                this.setState({
                    playing: true,
                    playingUrl: previewUrl,
                    audio
                })
            }
        }
    }

    render() {
        const { tracks } = this.props;
        return(
            <div>
                {
                    tracks.map((track, index) => {
                        const trackImg = track.album.images[0].url;
                        return(
                            <div
                                key={index}
                                className='Track'
                                onClick={() => this.playAudio(track.preview_url)}
                            >
                                <img 
                                    src={trackImg}
                                    className='Track-img'
                                    alt='track'
                                />
                                <div className='Track-play'>
                                    <div className='Track-play-inner'>
                                        {
                                            this.state.playingUrl === track.preview_url
                                            ? <span>| |</span>
                                            : <span>&#9654;</span>
                                        }
                                    </div>
                                </div>
                                <p className='Track-text'>
                                    {track.name}
                                </p>
                            </div>
                        )
                        
                    })
                }
            </div>
        )
    }
}

export default Gallery;