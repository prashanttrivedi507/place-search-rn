import { Text, View, SafeAreaView } from 'react-native'
import React, { Component } from 'react'
import MapView, { Marker } from 'react-native-maps';
import styles from './styles'
import InputForm from '../InputForm'
import { connect } from 'react-redux';

const mapStyle = [
    { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
    { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
    { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
    {
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#d59563' }],
    },
    {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#d59563' }],
    },
    {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [{ color: '#263c3f' }],
    },
    {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#6b9a76' }],
    },
    {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{ color: '#38414e' }],
    },
    {
        featureType: 'road',
        elementType: 'geometry.stroke',
        stylers: [{ color: '#212a37' }],
    },
    {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#9ca5b3' }],
    },
    {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{ color: '#746855' }],
    },
    {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{ color: '#1f2835' }],
    },
    {
        featureType: 'road.highway',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#f3d19c' }],
    },
    {
        featureType: 'transit',
        elementType: 'geometry',
        stylers: [{ color: '#2f3948' }],
    },
    {
        featureType: 'transit.station',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#d59563' }],
    },
    {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{ color: '#17263c' }],
    },
    {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#515c6d' }],
    },
    {
        featureType: 'water',
        elementType: 'labels.text.stroke',
        stylers: [{ color: '#17263c' }],
    },
];

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            latitude: '',
            longitude: '',
            markerLoction:[]
        }
    };
    componentDidMount(){
        const { places } = this.props;

        this.setState({
            latitude:parseInt(places.lat),
            longitude: parseInt(places.lng),
            markerLoction:places

        })

    }

    onRegionChange(region){
        // console.log("chnage");
        const { places } = this.props;
        this.setState({
            latitude:parseInt(places.lat),
            longitude: parseInt(places.lng),
        })
        // this.setState({ places });
    }
    getInitialState() {
        return {
          region: {
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          },
        };
      }
    render() {
        const { places } = this.props;
        console.log('====================================');
        console.log("places", places);
        
        console.log('====================================');

        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ marginTop: 20, zIndex: 1 }}>
                    <InputForm />
                </View>
                <View style={styles.container}>

                    <MapView
                        style={styles.mapStyle}
                        initialRegion={this.state.region}
                        onRegionChange={()=>this.onRegionChange()}

                        customMapStyle={mapStyle}>
                        {places.map((marker, index) => (
                            <Marker
                                draggable
                                coordinate={{
                                    latitude: marker.lat,
                                    longitude: marker.lng,
                                }}
                            />
                        ))}


                    </MapView>

                </View>
            </SafeAreaView>
        )
    }
}

const mapStateToProps = state => ({
    places: state.places.places,
});
export default connect(mapStateToProps, null)(index)
