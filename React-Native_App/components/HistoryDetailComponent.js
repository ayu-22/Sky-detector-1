import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  Image,
  Platform,
  View,
  Text
} from 'react-native';
import { LineChart, Grid, YAxis } from 'react-native-svg-charts';
import { Card, Button, Icon } from 'react-native-elements';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import * as ImageManipulator from 'expo-image-manipulator';

class HistoryDetailComponent extends Component {
  constructor(props) {
    super(props);
    const mask = this.props.navigation.getParam('mask');
    const angles = this.props.navigation.getParam('angles');
    this.state = {
      mask: mask,
      angles: angles
    };
  }

  render() {
    const { maask, angles } = this.state;
    const contentInset = { top: 20, bottom: 20 };
    return (
      <ScrollView>
        <View style={styles.headContainer}>
          <Image
            source={{ uri: imageUri }}
            loadingIndicatorSource={require('./images/logo.png')}
            style={styles.image}
          />
        </View>
        <Text style={styles.headline}>Plot</Text>

        <View style={{ height: 200, flexDirection: 'row' }}>
          <YAxis
            angles={angles}
            contentInset={contentInset}
            svg={{
              fill: 'grey',
              fontSize: 10
            }}
            numberOfTicks={12}
            formatLabel={value => `${value}ยบ`}
          />
          <LineChart
            style={{ flex: 1, marginLeft: 8 }}
            angles={angles}
            svg={{ stroke: 'rgb(134, 65, 244)' }}
            contentInset={contentInset}
          >
            <Grid />
          </LineChart>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    margin: 20
  },
  imageContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  headContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    padding: 20
  },
  image: {
    margin: 10,
    width: 320,
    height: 256
  },
  buttons: {
    marginTop: 40
  },
  headline: {
    textAlign: 'center', // <-- the magic
    fontWeight: 'bold',
    fontSize: 18,
    margin: 'auto'
  }
});

export default HistoryDetailComponent;
