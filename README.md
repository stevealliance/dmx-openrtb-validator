# dmx-openrtb-validator
This code return the fields that are missing or not using the right value


###required nodejs version 7.6
You can download the code or use git
```bash
git clone https://github.com/stevealliance/dmx-openrtb-validator.git
```

Once you have the code in your computer, run the following command to install package

```bash
npm i
```

This command to run the server

```bash
node server.js
```

This will expose the port 5004, server URL http://localhost:5004

Example payload for testing 

```json
{
        "id": "ac7b807f643f-4322-0f14-891dd4ed94c2",
        "tmax": 200,
        "ext": {
            "ip": "95.142.121.20"
        },
        "source": {
            "ext": {
                "schain": {
                    "ver": "1.0",
                    "complete": null,
                    "nodes": []
                }
            },
            "fd": 0
        },
        "imp": [{
            "id": "1",
            "secure": 1,
            "bidfloor": 3,
            "bidfloorcur": "USD",
            "tagid": "vidazoo-DMX",
            "video": {
                "skip": 0,
                "minduration": 0,
                "maxduration": 210,
                "maxextended": 30,
                "startdelay": 0,
                "minbitrate": 0,
                "boxingallowed": 1,
                "mimes": [
                    "video/mp4",
                    "application/javascript"
                ],
                "protocols": [
                    2,
                    3,
                    5,
                    6
                ],
                "delivery": [
                    1,
                    2
                ],
                "api": [
                    2
                ],
                "linearity": 1,
                "w": 640,
                "h": 480,
                "pos": 0,
                "playbackmethod": [
                    2
                ],
                "placement": 1
            }
        }],
        "device": {
            "ip": "95.142.121.20",
            "connectiontype": 0,
            "devicetype": 2,
            "ua": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36",
            "language": "en",
            "js": 1,
            "os": "OS X",
            "osv": "10.15.3",
            "dnt": 0,
            "lmt": 0,
            "geo": {
                "country": "USA",
                "ipservice": 3,
                "lat": 40.7145,
                "lon": -74.0029,
                "type": 2
            }
        },
        "user": {
            "ext": {},
            "id": "9c8da3c5-e348-388c-4e63-099e9fc2c1ed",
            "buyeruid": "eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJzaWQiOjEwMTUwMywidXNyIjoicWdZZXNnWWJNVnBOUkRSM01sSnpaR1JoZVhWcmRXRlZaM2xsWlVZeE9XZFcifQ.DewBNQI1FfOfKrGuBd7RpWnGRgdiK2nTFWjqfXv928Zm7eTtoCxTAqM_JmX1Nq7EqGGV1sqqdFr1uHiGI7BNUg"
        },
        "regs": {
            "ext": {}
        },
        "site": {
            "domain": "static.vidazoo.com",
            "page": "https://static.vidazoo.com/tests.vidazoo.com/districtm-s2s-cookieSyncTest.html",
            "ref": "https://static.vidazoo.com",
            "publisher": {
                "id": "57b1d07799ed281200888eac"
            }
        },
        "at": 1
    }
```

Payload that should return an error

```json
{
        "id": "ac7b807f643f-4322-0f14-891dd4ed94c2",
        "tmax": 200,
        "ext": {
            "ip": "95.142.121.20"
        },
        "source": {
            "ext": {
                "schain": {
                    "ver": "1.0",
                    "complete": null,
                    "nodes": []
                }
            },
            "fd": 0
        },
        "imp": [{
            "id": "1",
            "secure": 1,
            "bidfloor": 3,
            "bidfloorcur": "USD",
            "tagid": "vidazoo-DMX",
            "video": {
                "skip": 0,
                "minduration": 0,
                "maxduration": 210,
                "maxextended": 30,
                "startdelay": 0,
                "minbitrate": 0,
                "boxingallowed": 1,
                "mimes": [
                    "video/mp4",
                    "application/javascript"
                ],
                "protocols": [
                    "2",
                    3,
                    5,
                    6
                ],
                "delivery": [
                    "1"
                ],
                "api": [
                    2
                ],
                "linearity": 1,
                "w": 640,
                "h": 480,
                "pos": 0,
                "playbackmethod": [
                    2
                ],
                "placement": 1
            }
        }],
        "device": {
            "ip": "95.142.121.20",
            "connectiontype": 0,
            "devicetype": 2,
            "ua": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36",
            "language": "en",
            "js": 1,
            "os": "OS X",
            "osv": "10.15.3",
            "dnt": 0,
            "lmt": 0,
            "geo": {
                "country": "USA",
                "ipservice": 3,
                "lat": 40.7145,
                "lon": -74.0029,
                "type": 2
            }
        },
        "user": {
            "ext": {},
            "id": "9c8da3c5-e348-388c-4e63-099e9fc2c1ed",
            "buyeruid": "eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJzaWQiOjEwMTUwMywidXNyIjoicWdZZXNnWWJNVnBOUkRSM01sSnpaR1JoZVhWcmRXRlZaM2xsWlVZeE9XZFcifQ.DewBNQI1FfOfKrGuBd7RpWnGRgdiK2nTFWjqfXv928Zm7eTtoCxTAqM_JmX1Nq7EqGGV1sqqdFr1uHiGI7BNUg"
        },
        "regs": {
            "ext": {}
        },
        "site": {
            "domain": "static.vidazoo.com",
            "page": "https://static.vidazoo.com/tests.vidazoo.com/districtm-s2s-cookieSyncTest.html",
            "ref": "https://static.vidazoo.com",
            "publisher": {
                "id": "57b1d07799ed281200888eac"
            }
        },
        "at": 1
    }
```

