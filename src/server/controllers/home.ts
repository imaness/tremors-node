import { Router } from 'express';
import * as faultLineData from '../static/json/faultLineData.json';
import * as evacData from '../static/json/evacuationSites.json';

const routes = Router();


routes.get("/", (req, res) => {
    res.render("home2", { title: "Hey", message: "Hello there!" });
});


const computeRaduis = (dist: number) => {
    return dist * Math.PI / 180;
}

const deg2Rad = (deg: number): number => {
    return (deg * Math.PI / 180.0);
}

const rad2Deg = (rad: number): number => {
    return (rad / Math.PI * 180.0);
}

const calculateDistance = (lat1: number, lng1: number, lat2: number, lng2: number): number => {

    const theta: number = lng1 - lng2;
    let dist: number = Math.sin(deg2Rad(lat1)) * Math.sin(deg2Rad(lat2)) +
        Math.cos(deg2Rad(lat1)) *
        Math.cos(deg2Rad(lat2)) *
        Math.cos(deg2Rad(theta));

    dist = Math.acos(dist);
    dist = rad2Deg(dist);
    dist = dist * 60 * 1.1515;
    dist = dist * 1.609344;

    return dist;

}

const getNearestDistance = (latitude: number, longitude: number) => {

}



routes.get("/GetNearestFaultDistance", (req, res) => {


    let latitude: number = req.query.latitude as number;
    let longitude: number = req.query.longitude as number;

    let nearestDistance: number = 999999999999999999999;
    let nearestLineLat: number = 0;
    let nearestLineLong: number = 0;

    const earthRadius = 6378137; // Earth's mean radius in meter

    faultLineData.faults.map(fault => {
        const coordsList = fault.Coordinates.split(';');

        coordsList.forEach((coord: string) => {

            let lat = coord.split(',')[1];
            let latNumber = parseFloat(lat);

            let lng = coord.split(',')[0];
            let lngNumber = parseFloat(lng);;

            const dLat = computeRaduis(latNumber - latitude);
            const dLong = computeRaduis(lngNumber - latitude);

            const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                Math.cos(computeRaduis(latitude)) * Math.cos(computeRaduis(longitude)) *
                Math.sin(dLong / 2) * Math.sin(dLong / 2);

            const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

            var d = calculateDistance(latitude, longitude, latNumber, lngNumber);

            if (d < nearestDistance) {
                nearestLineLat = latNumber;
                nearestLineLong = lngNumber;
                nearestDistance = d;
            }
        });
    })

    res.json({
        distance: nearestDistance.toFixed(2).toString(),
        lineLat: nearestLineLat,
        lineLong: nearestLineLong
    })
});

routes.get("/GetNearestEvacDistance", (req, res) => {


    let latitude: number = req.query.latitude as number;
    let longitude: number = req.query.longitude as number;

    let nearestDistance: number = 999999999999999999999;
    let nearestLineLat: number = 0;
    let nearestLineLong: number = 0;

    const earthRadius = 6378137; // Earth's mean radius in meter

    evacData.evacSites.map(evac => {

        const latNumber = parseFloat(evac.Lat);
        const lngNumber = parseFloat(evac.Lng);

        const dLat = computeRaduis(latNumber - latitude);
        const dLong = computeRaduis(lngNumber - latitude);

        const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(computeRaduis(latitude)) * Math.cos(computeRaduis(longitude)) *
            Math.sin(dLong / 2) * Math.sin(dLong / 2);

        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        var d = calculateDistance(latitude, longitude, latNumber, lngNumber);

        if (d < nearestDistance) {
            nearestLineLat = latNumber;
            nearestLineLong = lngNumber;
            nearestDistance = d;
        }

    })

    res.json({
        distance: nearestDistance.toFixed(2).toString(),
        lineLat: nearestLineLat,
        lineLong: nearestLineLong
    })
});






module.exports = routes;
