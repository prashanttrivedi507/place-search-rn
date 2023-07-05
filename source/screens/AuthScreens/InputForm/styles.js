import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightblue',
        alignItems: 'center',
    },
    searchBox: {
        width: 350,
        height: 50,
        fontSize: 18,
        borderRadius: 8,
        borderColor: '#aaa',
        color: '#000',
        backgroundColor: 'white',
        borderWidth: 1.5,
        paddingLeft: 15,
    },
    autocompleteContainer: {
        width: 350,
        marginTop:10,
        zIndex:100
    },
    searchResultsContainer: {
        width: 350,
        height: 200,
        backgroundColor: '#fff',
        position: 'absolute',
        top: 50,
        zIndex:10
    },
    dummmy: {
        width: 600,
        height: 200,
        marginTop: 20,
    },
    resultItem: {
        width: '100%',
        justifyContent: 'center',
        height: 40,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        paddingLeft: 15,
        zIndex:1,
        

    },
    headindStyle:{
        fontSize:20
    }
});
