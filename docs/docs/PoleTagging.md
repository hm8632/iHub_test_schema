---
stoplight-id: cin618q0w05bk
---

# SOH Pole Tagging

### Column header descriptions
- **SOH Object** - The name of the JSON object to be tagged
- **Pole Type** - The type of object e.g. Person, Object, Location, Event
- **Pole Name** - The name of the entity

### POLE Tagging Rules

SOH Object | Pole Type | Pole Name
---------|----------|---------
 incidentDetails | event | incident
 currentAddress | location | address
 registeredGpAddress | location | address
 nextOfKinAddress | location | address
 businessAddress | location | address
 permanentAddress | location | address
 personReporting | person | person 
 witness | person | person 
 victimDetailsFromWitness | person | person 
 victimDetailsReportedOnBehalfOf | person | person 
 victimIsBusiness | object | business  
 evidence | object | evidence  
 threatAbuseOrAssault | object | weapon 
 known | person | person  
 unknown | person | person
 vehicle | object | vehicle
 damagedVehicle | object | vehicle
 guardianDetails | person | person
 stolenItem | object | vehicle   
 stolenItem | object | bicycle  
 stolenItem | object | bankCard  
 stolenItem | object | property  
 stolenItem | object | mobile  
 
 ### Example

The below example illustrates how the incidentDetails and currentAddress SOH objects are tagged.

```json
"incidentDetails": {
  "subjectedToHateCrime": false,
  "currentAddress": {
    "buildingName": "Some building",
    "streetName": "Some street",
    "townOrCity": "Some town",
    "postcode": "CBC 123M13 3SX",
    "country": "UK",
    "latitude": 51.000,
    "longitude": 0.444,
    "easting": 566222,
    "northing": 1881123,
    "isEditedInForm": false,
    "osUprn": "100241955666",
    "_metaData": {
      "name": "address",
      "type": "location",
      "schema": 2
    }
  },
  "incidentExactTimeKnown": true,
  "incidentDescription": "this is what happened",
  "incidentOnPublicTransport": false,
  "incidentDateRange": {
  "dateFrom": "2021-05-12",
  "dateTo": "2021-05-12"
  },
  "incidentStartTime": "18:20:00",
  "incidentEndTime": "19:20:00",
    "_metaData": {
      "name": "incident",
      "type": "event",
      "schema": 2
  }
}
```
  
                       