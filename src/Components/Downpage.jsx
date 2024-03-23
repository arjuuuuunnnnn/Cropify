// import React, { useState } from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

// function Downpage(){
// <MapContainer center={[20.5937, 78.9629]} zoom={5} style={{ height: '400px' }}>
//         <TileLayer
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         />
//         {/* Add your markers here */}
//         <Marker position={[15.9129, 79.74]}>
//           <Popup>
//             Andhra Pradesh: Coconut - 16935.05846
//           </Popup>
//         </Marker>
//         <Marker position={[22.5726, 88.3639]}>
//     <Popup>
//         West Bengal: Rice - 15846.4676
//     </Popup>
// </Marker>

// <Marker position={[20.1809, 73.0169]}>
//     <Popup>
//         Maharashtra: Sugarcane - 10162.8436
//     </Popup>
// </Marker>

// <Marker position={[27.0238, 74.2179]}>
//     <Popup>
//         Rajasthan: Wheat - 14350.1392
//     </Popup>
// </Marker>

// <Marker position={[26.8467, 80.9462]}>
//     <Popup>
//         Uttar Pradesh: Sugarcane - 16233.7956
//     </Popup>
// </Marker>

// <Marker position={[22.9868, 87.855]}>
//     <Popup>
//         West Bengal: Rice - 13582.6496
//     </Popup>
// </Marker>

// <Marker position={[29.0588, 76.0856]}>
//     <Popup>
//         Haryana: Wheat - 12738.384
//     </Popup>
// </Marker>

// <Marker position={[30.0668, 79.0193]}>
//     <Popup>
//         Uttarakhand: Rice - 5411.536
//     </Popup>
// </Marker>

// <Marker position={[25.4358, 81.8463]}>
//     <Popup>
//         Uttar Pradesh: Rice - 15022.7134
//     </Popup>
// </Marker>

// <Marker position={[25.2637, 82.9912]}>
//     <Popup>
//         Uttar Pradesh: Sugarcane - 16986.234
//     </Popup>
// </Marker>

// <Marker position={[23.6102, 85.2799]}>
//     <Popup>
//         Jharkhand: Rice - 8059.2764
//     </Popup>
// </Marker>

// <Marker position={[25.0961, 85.3131]}>
//     <Popup>
//         Bihar: Rice - 10158.7042
//     </Popup>
// </Marker>

// <Marker position={[15.9129, 79.74]}>
//     <Popup>
//         Andhra Pradesh: Coconut - 16935.05846
//     </Popup>
// </Marker>

//         {/* Add more markers as needed */}
//       </MapContainer>
//     </div>
    
//   };

// export  default Downpage;

import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './Downpage.scss'

function Downpage() {
  return (
    <div className='map-container'>
      / <MapContainer center={[20.5937, 78.9629]} zoom={5} style={{ height: '400px' }}>
//         <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {/* Add your markers here */}
        <Marker position={[15.9129, 79.74]}>
          <Popup>
            Andhra Pradesh: Coconut - 16935.05846
          </Popup>
        </Marker>
        <Marker position={[22.5726, 88.3639]}>
    <Popup>
        West Bengal: Rice - 15846.4676
    </Popup>
</Marker>

<Marker position={[20.1809, 73.0169]}>
    <Popup>
        Maharashtra: Sugarcane - 10162.8436
    </Popup>
</Marker>

<Marker position={[27.0238, 74.2179]}>
    <Popup>
        Rajasthan: Wheat - 14350.1392
    </Popup>
</Marker>

<Marker position={[26.8467, 80.9462]}>
    <Popup>
        Uttar Pradesh: Sugarcane - 16233.7956
    </Popup>
</Marker>

<Marker position={[22.9868, 87.855]}>
    <Popup>
        West Bengal: Rice - 13582.6496
    </Popup>
</Marker>

<Marker position={[29.0588, 76.0856]}>
    <Popup>
        Haryana: Wheat - 12738.384
    </Popup>
</Marker>

<Marker position={[30.0668, 79.0193]}>
    <Popup>
        Uttarakhand: Rice - 5411.536
    </Popup>
</Marker>

<Marker position={[25.4358, 81.8463]}>
    <Popup>
        Uttar Pradesh: Rice - 15022.7134
    </Popup>
</Marker>

<Marker position={[25.2637, 82.9912]}>
    <Popup>
        Uttar Pradesh: Sugarcane - 16986.234
    </Popup>
</Marker>

<Marker position={[23.6102, 85.2799]}>
    <Popup>
        Jharkhand: Rice - 8059.2764
    </Popup>
</Marker>

<Marker position={[25.0961, 85.3131]}>
    <Popup>
        Bihar: Rice - 10158.7042
    </Popup>
</Marker>

<Marker position={[15.9129, 79.74]}>
    <Popup>
        Andhra Pradesh: Coconut - 16935.05846
    </Popup>
</Marker>

        {/* Add more markers as needed */}
      </MapContainer>
    </div>
  );
}

export default Downpage;