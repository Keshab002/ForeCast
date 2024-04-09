import React, { useEffect, useState } from 'react'
import { PermissionsAndroid } from 'react-native'
import Geolocation from '@react-native-community/geolocation';
import { WHETHER_API_KEY } from '@env'


export const UseGetWhether = () => {
    const [loading, setloading] = useState(true)
    const [weather, setweather] = useState([])
    const [error, setError] = useState(null)
    const [lat, setlat] = useState([])
    const [lon, setlon] = useState([])


    const fetchWhetherData = async () => {
        try {
            const res = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WHETHER_API_KEY}&units=metric`)
            const data = await res.json()
            setweather(data)
            setloading(false)
        }
        catch (e) {
            setError('Could not fetch weather')
        } finally {
            setloading(false)
        }

    }

    useEffect(() => {
        ;(async () => {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                );
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    console.log('You can use the location');
                    Geolocation.getCurrentPosition(location => {
                        setlat(location.coords.latitude)
                        setlon(location.coords.longitude)
                        fetchWhetherData()
                    });
    
                } else {
                    console.log('Location permission denied');
                }
            } catch (err) {
                console.warn(err);
            }
        })()
    }, [lat, lon]);


    return [loading,error,weather]


}