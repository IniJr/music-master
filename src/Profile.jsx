import React, { Component } from 'react';
import './App.css';

class Profile extends Component {
    render() {
        let artist = {name: '', followers: {total: ''}, images: [{url: ''}], genres: []};
        artist = this.props.artist !== null ? this.props.artist : artist; 

        return (
            <div className='Profile'>
                <img 
                    alt='profile'
                    className='Profile-img'
                    src={artist.images[0].url}
                />
                <div className='Profile-info'>
                    <div className='Profile-name'>{artist.name}</div>
                    <div className='Profile-followers'>
                        {artist.followers.total} followers
                    </div>
                    <div className='Profile-genres'>
                        {
                            artist.genres.map((genre, index) => {
                                genre = genre !== artist.genres[artist.genres.length - 1] 
                                              ? ` ${genre},` 
                                              : ` & ${genre}`;
                                return(
                                    <span key={index}>{genre}</span>
                                )
                            }) 
                        }
                    </div>
                </div> 
            </div>
        )
    }
}

export default Profile;