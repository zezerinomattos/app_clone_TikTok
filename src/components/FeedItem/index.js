import React, { useState, useRef, useEffect } from 'react';
import { View, Text, Pressable, Dimensions, TouchableOpacity } from 'react-native';
import { Video } from 'expo-av';
import { Ionicons } from '@expo/vector-icons';

// MY IMPORTS
import styles from './styles';

const { height: heightScreen } = Dimensions.get("screen")

export function FeedItem({ data, currentVisibleItem }) {
    const video = useRef(null);

    const [status, setStatus] = useState({});

    useEffect(() => {
        if(currentVisibleItem?.id === data?.id){
            video.current?.playAsync();
        }else{
            video.current?.pauseAsync();
        }
    }, [currentVisibleItem])

    function handlePlayer(){
        status.isPlaying ? video.current?.pauseAsync() : video.current?.playAsync();
    }

    return (
    <Pressable onPress={handlePlayer}>

        <View style={[styles.info, {bottom: 110}]}>
            <Text style={styles.name}>{data?.name}</Text>
            <Text numberOfLines={2} style={styles.description}>{data?.description}</Text>
        </View>

        <View style={styles.actions}>
            <TouchableOpacity style={styles.actionButton}>
                <Ionicons name='heart' size={35} color='#fff'/>
                <Text style={styles.actionText} >30.3K</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton}>
                <Ionicons name='chatbubble-ellipses' size={35} color='#fff'/>
                <Text style={styles.actionText} >23</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton}>
                <Ionicons name='bookmark' size={35} color='#fff'/>
            </TouchableOpacity>
        </View>

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