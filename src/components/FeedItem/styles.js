import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
    info: {
        position: 'absolute',
        zIndex: 99,
        left: 8,
        padding: 8,
    },
    name:{
        color: '#FFF',
        fontWeight: 'bold',
        marginBottom: 4,
        textShadowColor: 'rgba(0,0,0,0.60)',
        textShadowOffset: {width: -1, height: 1.5},
        textShadowRadius: 8,
    },
    description:{
        color: '#FFF',
        marginRight: 24,
        textShadowColor: 'rgba(0,0,0,0.20)',
        textShadowOffset: {width: -1, height: 1.5},
        textShadowRadius: 8,
    },
    actions:{
        position:'absolute',
        zIndex: 99,
        right: 10,
        bottom: Platform.OS === 'android' ? 140 : 170,
        gap: 8,
    },
    actionButton:{
        
    },
    actionText:{
        textAlign: 'center',
        color: '#FFF',
        textShadowColor: 'rgba(0,0,0,0.60)',
        textShadowOffset: {width: -1, height: 1.5},
        textShadowRadius: 8,
    }
})

export default styles;