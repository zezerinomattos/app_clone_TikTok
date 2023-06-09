import React, {useEffect, useState} from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';

// MY IMPORTS
import styles from './styles';
import { FeedItem } from '../../components/FeedItem';

//Lista de post fixa para teste
import { feedItems } from '../../utils/ListVideos';

export default function Home(){



    return(
        <View style={styles.container}>
            <View style={styles.labels}>
                <TouchableOpacity>
                    <Text style={[styles.labelText, {color: '#DDD'}]}>Seguindo</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={[styles.labelText, {color: '#FFF'}]}>Pra você</Text>
                    <View style={styles.indicator}></View>
                </TouchableOpacity>
            </View>

            <FlatList
                data={feedItems}
                renderItem={({ item }) => <FeedItem data={item}/>}
            />

        </View>
        
    )
}