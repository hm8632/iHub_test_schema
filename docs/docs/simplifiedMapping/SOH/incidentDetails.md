---
stoplight-id: 5w5k6yn3o78an
---

Source SOH Field                           |  Target POLE Entity            |  Target Data Model Field                    |  Mapping Type
-------------------------------------------|--------------------------------|---------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------
whosLocation                               |  Event                         |  whosLocation                               |  Direct Mapping
yourLocationConnectionDetails              |  Event                         |  yourLocationConnectionDetails              |  Direct Mapping
theirLocationConnectionDetails             |  Event                         |  theirLocationConnectionDetails             |  Direct Mapping
hadWeapon                                  |  Event                         |  hadWeapon                                  |  Direct Mapping
weaponTypeList                             |  Object (Weapon)               |  weaponType                                 |  New POLE entity created, value remains the same
weaponDetails                              |  Object (Weapon)               |  weaponDetails                              |  New POLE entity created, value remains the same
weaponCalibre                              |  Object (Weapon)               |  weaponCalibre                              |  New POLE entity created, value remains the same
weaponNabisReference                       |  Object (Weapon)               |  weaponNabisReference                       |  New POLE entity created, value remains the same
weaponInsuranceCompany                     |  Object (Weapon)               |                                             |  New POLE entity created, value remains the same
weaponInsurancePolicyNumber                |  Object (Weapon)               |                                             |  New POLE entity created, value remains the same
weaponIssuingOrganisation                  |  Object (Weapon)               |                                             |  New POLE entity created, value remains the same
weaponImitation                            |  Object (Weapon)               |                                             |  New POLE entity created, value remains the same
ammunitionType                             |  Object (Weapon)               |                                             |  New POLE entity created, value remains the same
firearmWeaponType                          |  Object (Weapon)               |  weaponType                                 |  New POLE entity created, value remains the same
firearmType                                |  Object (Weapon)               |  weaponType                                 |  New POLE entity created, value remains the same
subjectedToHateCrime                       |  Event                         |  subjectedToHateCrime                       |  Direct Mapping
subjectedToHateCrimeDetails                |  Event                         |  subjectedToHateCrimeDetails                |  Direct Mapping
publicTransportCardType                    |  Object (publicTransportCard)  |  publicTransportCardType                    |  New POLE entity created, value remains the same
publicTransportContactlessPaymentCard      |  Object (publicTransportCard)  |  publicTransportContactlessPaymentCard      |  New POLE entity created, value remains the same
publicTransportCardNumber                  |  Object (publicTransportCard)  |  publicTransportCardNumber                  |  New POLE entity created, value remains the same
mapLocation                                |  Location                      |  mapLocation                                |  New POLE entity created, value remains the same
mapLocationCorrect                         |  Location                      |  mapLocationCorrect                         |  New POLE entity created, value remains the same
mapLocationAdditionalDetails               |  Location                      |  mapLocationAdditionalDetails               |  New POLE entity created, value remains the same
nicheLocation                              |  Location                      |  _AddressFields                             |  New POLE entity created, value remains the same
locationAlarmFitted                        |  Location                      |  alarmFitted                                |  New POLE entity created, value remains the same
locationAlarmFittedDetails                 |  Location                      |  alarmFittedDetails                         |  New POLE entity created, value remains the same
locationDescription                        |  Location                      |  addressDescription                         |  New POLE entity created, value remains the same
currentAddress                             |  Location                      |  _AddressFields                             |  New POLE entity created, value remains the same
permanentResidence                         |  Location                      |                                             |  information preserved in linking
permanentAddress                           |  Location                      |  _AddressFields                             |  New POLE entity created, value remains the same
dateMovedIn                                |  Location                      |  dateMovedIn                                |  New POLE entity created, value remains the same
addressAlarmFitted                         |  Location                      |  alarmFitted                                |  New POLE entity created, value remains the same
addressAlarmFittedDetails                  |  Location                      |  alarmFittedDetails                         |  New POLE entity created, value remains the same
addressDescription                         |  Location                      |  addressDescription                         |  New POLE entity created, value remains the same
sameAddressAsPersonReporting               |  Location                      |                                             |  information preserved in linking
incidentEventsPreceeding                   |  Event                         |  incidentEventsPreceeding                   |
incidentExactTimeKnown                     |  Event                         |  incidentExactTimeKnown                     |  Direct Mapping
incidentApproximateDate                    |  Event                         |  incidentApproximateDate                    |  Direct Mapping
incidentApproximateTime                    |  Event                         |  incidentApproximateTime                    |  Direct Mapping
incidentDescription                        |  Event                         |  incidentDescription                        |  Direct Mapping
incidentDateTimeDescription                |  Event                         |  incidentDateTimeDescription                |  Direct Mapping
incidentOnPublicTransport                  |  Event                         |  incidentOnPublicTransport                  |  Direct Mapping
incidentStillHappening                     |  Event                         |  incidentStillHappening                     |  Direct Mapping
incidentInfluencedByDrugsOrAlcohol         |  Event                         |  incidentInfluencedByDrugsOrAlcohol         |  Direct Mapping
incidentInfluencedByDrugsOrAlcoholDetails  |  Event                         |  incidentInfluencedByDrugsOrAlcoholDetails  |  Direct Mapping
incidentDateRange                          |  Event                         |  incidentStartDateTime                      |  Merges dateFrom and incidentStartTime into incidentEndStartTime, Merges dateTo and incidentEndTime into incidentEndDateTime
incidentStartTime                          |  Event                         |  incidentStartDateTime                      |  Merges dateFrom and incidentStartTime into incidentEndStartTime
incidentEndTime                            |  Event                         |  incidentEndDateTime                        |  Merges dateTo and incidentEndTime into incidentEndDateTime
incidentReportedAlready                    |  Event                         |  incidentReportedAlready                    |  Direct Mapping
incidentReportedAlreadyReference           |  Event                         |  incidentReportedAlreadyReference           |  Direct Mapping
btpdetails                                 |  Event                         |  _btpDetails                                |  New POLE entity created, value remains the same
publicTransportDetails                     |  Event                         |  _ptDetails                                 |  New POLE entity created, value remains the same