import React, {useRef, useState} from 'react';
import { View, Text, TouchableOpacity, FlatList, Dimensions } from 'react-native';

// MY IMPORTS
import styles from './styles';
import { FeedItem } from '../../components/FeedItem';

//Lista de post fixa para teste
import { feedItems } from '../../utils/ListVideos';

const { height: heightScreen } = Dimensions.get('screen');

export default function Home(){
    const [showItem, setShowItem] = useState(feedItems[0]);
    const onViewRef = useRef(({ viewableItems }) => {
        if(viewableItems && viewableItems.length > 0){
            setShowItem(feedItems[viewableItems[0].index])
        }
    });

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
                renderItem={({ item }) => <FeedItem data={item} currentVisibleItem={showItem}/>}
                onViewableItemsChanged={onViewRef.current}
                snapToAlignment='center'
                snapToInterval={heightScreen}
                scrollEventThrottle={200}
                decelerationRate={'fast'}
                viewabilityConfig={{
                    waitForInteraction: false,
                    viewAreaCoveragePercentThreshold: 100
                    /*
                        100 significa que um item deve estar TOTALMENTE VISIVEL na tela para contar como visivel
                     */
                }}
                showsVerticalScrollIndicator={false}
            />

        </View>
        
    )
}