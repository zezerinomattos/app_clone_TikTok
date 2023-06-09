import React, { useState, useRef } from 'react';
import { View, Text, Pressable, Dimensions } from 'react-native';
import { Video } from 'expo-av';

// MY IMPORTS
import styles from './styles';

const { height: heightScreen } = Dimensions.get("screen")

export function FeedItem({ data }) {
    const video = useRef(null);

    const [status, setStatus] = useState({});

    function handlePlayer(){
        status.isPlaying ? video.current?.pauseAsync() : video.current?.playAsync();
    }

    return (
    <Pressable onPress={handlePlayer}>
        <Video
            ref={video}
            style={{ width: '100%', height: heightScreen }} 
            source={{uri: data?.video}}
            resizeMode='cover'
            shouldPlay={false}
            isMuted={false}
            isLooping={true}
            onPlaybackStatusUpdate={ status => setStatus(() => status)}
        />
    </Pressable>
    );
}