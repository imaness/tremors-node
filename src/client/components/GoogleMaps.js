import { GoogleMap, Data, LoadScript } from '@react-google-maps/api'
import React, {PropTypes} from 'react';
// import GoogleMapReact from 'google-map-react';

// const ExampleOptionsPropTypes = {
//   styles: PropTypes.shape({
//     container: PropTypes.object.isRequired,
//   }).isRequired,
// }

const center = {
  lat: 0,
  lng: -180,
}

// Reference for options:
// https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions

const options = {
  streetViewControl: false,
}

const onClick = (...args) => {
  console.log('onClick args: ', args)
}

const ExampleOptions = ({ styles }) => (
  <div className='map'>
    <div className='map-container'>
      <GoogleMap
        id='options-example'
        zoom={2}
        center={center}
        options={options}
        onClick={onClick}
      />
    </div>
  </div>
)

// ExampleOptions.propTypes = ExampleOptionsPropTypes

export default ExampleOptions