import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    TextInput,
    StyleSheet,
    SafeAreaView,
} from 'react-native';
import React, { Component } from 'react'
import { Button, InputItem, List } from '@ant-design/react-native'
import styles from './styles'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as pageActions from '../../../redux/action';
import { NativeModules } from "react-native";

// import dummmyData from '../../../utils/DummyData'

const dummmyData = [
    {
        "city": "Delhi",
        "lat": "28.6100",
        "lng": "77.2300",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Delhi",
        "capital": "admin",
        "population": "32226000",
        "population_proper": "16753235"
    },
    {
        "city": "Mumbai",
        "lat": "19.0761",
        "lng": "72.8775",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Mahārāshtra",
        "capital": "admin",
        "population": "24973000",
        "population_proper": "12478447"
    },
    {
        "city": "Kolkāta", 
        "lat": "22.5675", 
        "lng": "88.3700", 
        "country": "India", 
        "iso2": "IN", 
        "admin_name": "West Bengal", 
        "capital": "admin", 
        "population": "18502000", 
        "population_proper": "4496694"
      }, 
      {
        "city": "Bangalore", 
        "lat": "12.9789", 
        "lng": "77.5917", 
        "country": "India", 
        "iso2": "IN", 
        "admin_name": "Karnātaka", 
        "capital": "admin", 
        "population": "15386000", 
        "population_proper": "8443675"
      }, 
      {
        "city": "Chennai", 
        "lat": "13.0825", 
        "lng": "80.2750", 
        "country": "India", 
        "iso2": "IN", 
        "admin_name": "Tamil Nādu", 
        "capital": "admin", 
        "population": "12395000", 
        "population_proper": "6727000"
      }, 
      {
        "city": "Hyderābād", 
        "lat": "17.3850", 
        "lng": "78.4867", 
        "country": "India", 
        "iso2": "IN", 
        "admin_name": "Telangāna", 
        "capital": "admin", 
        "population": "10494000", 
        "population_proper": "6993262"
      }, 
      {
        "city": "Pune", 
        "lat": "18.5203", 
        "lng": "73.8567", 
        "country": "India", 
        "iso2": "IN", 
        "admin_name": "Mahārāshtra", 
        "capital": "", 
        "population": "8231000", 
        "population_proper": "3124458"
      }, 
      {
        "city": "Ahmedabad", 
        "lat": "23.0300", 
        "lng": "72.5800", 
        "country": "India", 
        "iso2": "IN", 
        "admin_name": "Gujarāt", 
        "capital": "minor", 
        "population": "8009000", 
        "population_proper": "5570585"
      }, 
      {
        "city": "Sūrat", 
        "lat": "21.1702", 
        "lng": "72.8311", 
        "country": "India", 
        "iso2": "IN", 
        "admin_name": "Gujarāt", 
        "capital": "", 
        "population": "6538000", 
        "population_proper": "4466826"
      }, 
      {
        "city": "Prayagraj", 
        "lat": "25.4358", 
        "lng": "81.8464", 
        "country": "India", 
        "iso2": "IN", 
        "admin_name": "Uttar Pradesh", 
        "capital": "", 
        "population": "5954391", 
        "population_proper": "5954391"
      }, 
      {
        "city": "Lucknow", 
        "lat": "26.8500", 
        "lng": "80.9500", 
        "country": "India", 
        "iso2": "IN", 
        "admin_name": "Uttar Pradesh", 
        "capital": "admin", 
        "population": "3382000", 
        "population_proper": "3382000"
      }, 
]


class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchKeyword: '',
            searchResults: [],
            isShowingResults: false,
            selectedItem: ''
        }
    };
    searchLocation = async (text) => {
        this.setState({
            isShowingResults: true,
            searchKeyword: text

        });
    };
    render() {
        let { actions,places } = this.props;

        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.autocompleteContainer}>
                    <InputItem
                        placeholderTextColor="#000"
                        style={styles.searchBox}
                        onChange={(text) => this.searchLocation(text)}
                        value={this.state.searchKeyword}
                        placeholder="Search for an address"
                        size="middle"
                    >
                    </InputItem>
                    {this.state.isShowingResults && (
                        <FlatList
                            data={dummmyData}
                            renderItem={({ item, index }) => {
                                return (
                                    <TouchableOpacity
                                        style={styles.resultItem}
                                        onPress={() => {
                                            var localArray=[...places]
                                            localArray.push(item)
                                            actions.getDataFulfilled(localArray);
                                            this.setState({
                                                searchKeyword: item.city,
                                                isShowingResults: false,
                                                selectedItem: item
                                            })

                                        }
                                        }>
                                        <Text>{item.city}</Text>
                                    </TouchableOpacity>
                                );
                            }}
                            keyExtractor={(item) => item.id}
                            style={styles.searchResultsContainer}
                        />
                    )}
                </View>
            </SafeAreaView>
        )
    }
}

const ActionCreators = Object.assign(
    {},
    pageActions,
);

const mapStateToProps = state => ({
    places: state.places.places,
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(index)
