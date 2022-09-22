---
stoplight-id: d7eutyrrtmvg5
---

Source SOH Field                           |  Target POLE Entity       |  Target Data Model Field                    |  Mapping Type
-------------------------------------------|---------------------------|---------------------------------------------|-------------------------------------------------------------------------------------------------
insuranceCompany                           |  Person                   |  insuranceCompany                           |  Direct Mapping
insurancePolicyNumber                      |  Person                   |  insurancePolicyNumber                      |  Direct Mapping
nextOfKinKnown                             |  Person                   |  nextOfKinKnown                             |  Direct Mapping
nextOfKinPhoneNumber                       |  Object (Telephone)       |  telephoneNumber                            |  New POLE entity created, value remains the same
nextOfKinRelationship                      |  Person                   |                                             |  information preserved in linking
nextOfKinFirstName                         |  Person                   |  givenName                                  |  New POLE entity created, value remains the same
nextOfKinSurname                           |  Person                   |  surname                                    |  New POLE entity created, value remains the same
nextOfKinAddress                           |  Location                 |  _AddressFields                             |  New POLE entity created, value remains the same
nextOfKinEmailAddress                      |  Object (Email)           |  emailAddress                               |  New POLE entity created, value remains the same
nonGbdrivingLicenseNumber                  |  Object (DrivingLicence)  |  drivingLicenceNumberForeign                |  New POLE entity created, value remains the same
nonGbdrivingLicenseIssueDate               |  Object (DrivingLicence)  |  drivingLicenceIssueDate                    |  New POLE entity created, value remains the same
nonGbdrivingLicenseExpiryDate              |  Object (DrivingLicence)  |  drivingLicenceExpiryDate                   |  New POLE entity created, value remains the same
passportNumber                             |  Object (Passport)        |  passportNumber                             |  New POLE entity created, value remains the same
passportCountryOfIssue                     |  Object (Passport)        |  passportCountry                            |  New POLE entity created, value remains the same
passportIssueNumber                        |  Object (Passport)        |  passportIssueNumber                        |  New POLE entity created, value remains the same
passportIssueDate                          |  Object (Passport)        |  passportIssueDate                          |  New POLE entity created, value remains the same
passportExpiryDate                         |  Object (Passport)        |  passportExpiryDate                         |  New POLE entity created, value remains the same
passportIssuingOffice                      |  Object (Passport)        |  passportIssuingOffice                      |  New POLE entity created, value remains the same
passportType                               |  Object (Passport)        |  passportType                               |  New POLE entity created, value remains the same
passportVisaNumber                         |  Object (Passport)        |  passportVisaNumber                         |  New POLE entity created, value remains the same
registeredGp                               |  Person                   |  registeredGp                               |  Direct Mapping
registeredGpaddress                        |  Location                 |  _AddressFields                             |  New POLE entity created, value remains the same
drivingLicenseCountryOfIssue               |  Object (DrivingLicence)  |  drivingLicenceCountry                      |  New POLE entity created, value remains the same
drivingLicenseIssueDate                    |  Object (DrivingLicence)  |  drivingLicenceIssueDate                    |  New POLE entity created, value remains the same
drivingLicenseExpiryDate                   |  Object (DrivingLicence)  |  drivingLicenceExpiryDate                   |  New POLE entity created, value remains the same
drivingLicenseNumber                       |  Object (DrivingLicence)  |  drivingLicenceNumber                       |  New POLE entity created, value remains the same
drivingLicenseType                         |  Object (DrivingLicence)  |  drivingLicenceType                         |  New POLE entity created, value remains the same
title                                      |  Person                   |  titleOther                                 |  Concat with titleListOther
firstName                                  |  Person                   |  givenName                                  |  Direct Mapping
middleName1                                |  Person                   |  middleName                                 |  Concat with middleName2
middleName2                                |  Person                   |  middleName                                 |  Concat with middleName1
surname                                    |  Person                   |  surname                                    |  Direct Mapping
dateOfBirth                                |  Person                   |  dateOfBirth                                |  Direct Mapping
dateOfBirthKnown                           |  Person                   |  dateofBirthKnown                           |  Direct Mapping
gender                                     |  Person                   |  gender                                     |  Direct Mapping
genderSelfDescribe                         |  Person                   |  genderSelfDescribe                         |  Direct Mapping
emailAddress                               |  Object (Email)           |  emailAddress                               |  New POLE entity created, value remains the same
phoneNumber                                |  Object (Telephone)       |  telephoneNumber                            |  New POLE entity created, value remains the same
personDescription                          |  Person                   |  personDescription                          |  Direct Mapping
ageKnown                                   |  Person                   |  ageKnown                                   |  Direct Mapping
ageDetails                                 |  Person                   |  age                                        |  Direct Mapping
ageRangeOcr                                |  Person                   |  ageRange                                   |  Merge into single field ageRange
ageRangeChild                              |  Person                   |  ageRange                                   |  Merge into single field ageRange
ageRangeAdult                              |  Person                   |  ageRange                                   |  Merge into single field ageRange
ageRangeMispers                            |  Person                   |  ageRange                                   |  Merge into single field ageRange
approximateAgeString                       |  Person                   |  approximateAgeFrom                         |  Populate approximateAgeFrom and approximateAgeTo with approximateAgeString
inVehicle                                  |  Person                   |  inVehicle                                  |  Direct Mapping
approximateHeight                          |  Person                   |  approximateHeight                          |  Direct Mapping
communicationNeeds                         |  Person                   |  communicationNeeds                         |  Direct Mapping
communicationNeedsDescription              |  Person                   |  communicationNeedsDetails                  |  Direct Mapping
connectedToAnyOneElse                      |  Person                   |  connectedToAnyOneElse                      |  Direct Mapping
contactPreference                          |  Person                   |  contactPreference                          |  Direct Mapping
accent                                     |  Person                   |  accent                                     |  Direct Mapping
additionalCitizenship                      |  Person                   |  hasAdditionalCitizenship                   |  Direct Mapping
additionalCitizenshipList                  |  Person                   |  additionalCitizenship                      |  Direct Mapping
additionalPersonInvolvedInIncident         |  Event                    |  additionalPersonInvolvedInIncident         |  Direct Mapping
additionalPersonInvolvedInIncidentDetails  |  Event                    |  additionalPersonInvolvedInIncidentDetails  |  Direct Mapping
ageAtTimeOfIncident                        |  Person                   |  ageAtTimeOfIncident                        |  Direct Mapping
alias                                      |  Person                   |  alias                                      |  Direct Mapping
build                                      |  Person                   |  buildDetails                               |  Direct Mapping
buildList                                  |  Person                   |  build                                      |  Direct Mapping
clothingAtTimeOfIncident                   |  Person                   |  clothingAtTimeOfIncident                   |  Direct Mapping
complexion                                 |  Person                   |  complexion                                 |  Direct Mapping
countryOfBirth                             |  Person                   |  placeOfBirth                               |  Direct Mapping
daytimeTelephone                           |  Object (Telephone)       |  telephoneNumber                            |  New POLE entity created, value remains the same
educationLocation                          |  Person                   |  educationLocation                          |  Direct Mapping
employmentStatus                           |  Person                   |  employmentStatus                           |  Direct Mapping
englishFirstLanguage                       |  Person                   |  englishFirstLanguage                       |  Direct Mapping
englishFluency                             |  Person                   |  englishFluency                             |  Direct Mapping
englishSpeaking                            |  Person                   |  englishSpeaking                            |  Direct Mapping
eveningTelephone                           |  Object (Telephone)       |  telephoneNumber                            |  New POLE entity created, value remains the same
eyeColour                                  |  Person                   |  eyeColourDetails                           |  Direct Mapping
eyeColourList                              |  Person                   |  eyeColourLeft                              |  Maps into eyeColourLeft & eyeColourRight based on value
eyeColourListLeft                          |  Person                   |  eyeColourLeft                              |  Direct Mapping
eyeColourListRight                         |  Person                   |  eyeColourRight                             |  Direct Mapping
eyewear                                    |  Person                   |  eyewear                                    |  Direct Mapping
facebookUserName                           |  Object (SocialMedia)     |  socialMediaTag                             |  SocialMedia POLE entity created with socialMediaType Facebook, socialMediaTag remains the same
facialHair                                 |  Person                   |  facialHair                                 |  Direct Mapping
facialHairType                             |  Person                   |  facialHairType                             |  Direct Mapping
facialHairTypeOtherDetails                 |  Person                   |  facialHairDetails                          |  Direct Mapping
fatherForename1                            |  Person                   |  fatherForename                             |  Concat with fatherForename2
fatherForename2                            |  Person                   |  fatherForename                             |  Concat with fatherForename1
fatherSurname                              |  Person                   |  fatherSurname                              |  Direct Mapping
genderSameAsBirth                          |  Person                   |  genderSameAsBirth                          |  Direct Mapping
habitsMannersismsDetails                   |  Person                   |  habitsMannersismsDetails                   |  Direct Mapping
hairColour                                 |  Person                   |  hairColourDetails                          |  Concat with hairColourListOtherDetails
hairColourList                             |  Person                   |  hairColourList                             |  Direct Mapping
hairColourListOtherDetails                 |  Person                   |  hairColourDetails                          |  Concat with hairColour
hairDescription                            |  Person                   |  hairDescription                            |  Direct Mapping
hairLength                                 |  Person                   |  hairLength                                 |  Direct Mapping
hairStyleDetails                           |  Person                   |  hairStyleDetails                           |  Direct Mapping
hairStyleList                              |  Person                   |  hairStyle                                  |  Direct Mapping
handedness                                 |  Person                   |  handedness                                 |  Direct Mapping
heightFromCm                               |  Person                   |  heightFromCm                               |  Direct Mapping
heightToCm                                 |  Person                   |  heightToCm                                 |  Direct Mapping
identifyingMarks                           |  Person                   |  distinguishingFeatureDetails               |  Pass information as distinguishingFeatureDetails in distinguishingFeature group
inEducation                                |  Person                   |  educationStatus                            |  Direct Mapping
instragramUsername                         |  Object (SocialMedia)     |  socialMediaTag                             |  SocialMedia POLE entity created with socialMediaType Instagram socialMediaTag remains the same
languagesSpoken                            |  Person                   |  languagesSpokenDetails                     |  Direct Mapping
languagesSpokenList                        |  Person                   |  languagesSpoken                            |  Direct Mapping
maritalStatus                              |  Person                   |  maritalStatus                              |  Direct Mapping
motherForename1                            |  Person                   |  motherForename                             |  Concat with motherForename2
motherForename2                            |  Person                   |  motherForename                             |  Concat with motherForename1
motherSurname                              |  Person                   |  motherSurname                              |  Direct Mapping
nationalInsuranceNumber                    |  Person                   |  nationalInsuranceNumber                    |  Direct Mapping
nationality                                |  Person                   |  nationalityDetails                         |  Direct Mapping
nationalityAcquisitionMethod               |  Person                   |  nationalityAcquisitionMethod               |  Direct Mapping
nationalityList                            |  Person                   |  nationality                                |  Direct Mapping
occupation                                 |  Person                   |  occupation                                 |  Direct Mapping
otherSocialMediaAccountsDetail             |  Object (SocialMedia)     |  socialMediaDetails                         |  SocialMedia POLE entity created with socialMediaType Other, socialMediaDetails remains the same
personNotes                                |  Person                   |  personNotes                                |  Direct Mapping
physicalCharacteristics                    |  Person                   |  physicalCharacteristics                    |  Direct Mapping
preferredPhoneNumber                       |  Object (Telephone)       |  telephoneNumber                            |  New POLE entity created, value remains the same
preferredLanguageSpokenList                |  Person                   |  preferredLanguageSpoken                    |  Direct Mapping
preferredLanguageWrittenList               |  Person                   |  preferredLanguageWritten                   |  Direct Mapping
previousNationalityList                    |  Person                   |  previousNationality                        |  Direct Mapping
personRecentPhoto                          |  Person                   |                                             |  Direct Mapping
personRecentPhotoUpload                    |  Person                   |                                             |  Direct Mapping
personRecentPhotoUploadDetails             |  Person                   |                                             |  Direct Mapping
religion                                   |  Person                   |  religionOther                              |  Concat with religionListOther
religionList                               |  Person                   |  religion                                   |  Direct Mapping
religionListOther                          |  Person                   |  religionOther                              |  Concat with religion
snapchatUsername                           |  Object (SocialMedia)     |  socialMediaTag                             |  SocialMedia POLE entity created with socialMediaType Snapchat, socialMediaTag remains the same
speechDescriptionList                      |  Person                   |  speechDescription                          |  Direct Mapping
surnameUnknown                             |  Person                   |  surnameUnknown                             |  Direct Mapping
telephoneCountryCode                       |  Object (Telephone)       |  telephoneCountryCode                       |  New POLE entity created, value remains the same
tikTokUsername                             |  Object (SocialMedia)     |  socialMediaTag                             |  SocialMedia POLE entity created with socialMediaType Tiktok, socialMediaTag remains the same
titleList                                  |  Person                   |  title                                      |  Direct Mapping
titleListOther                             |  Person                   |  titleOther                                 |  Concat with title
twitterUserName                            |  Object (SocialMedia)     |  socialMediaTag                             |  SocialMedia POLE entity created with socialMediaType Twitter, socialMediaTag remains the same
unavailabilityDetail                       |  Person                   |  unavailabilityDetails                      |  Direct Mapping
usualClothing                              |  Person                   |  usualClothing                              |  Direct Mapping
victimSuspectRelationship                  |  Person                   |  victimRelationshipToSuspectDetails         |  Direct Mapping
victimSuspectRelationshipList              |  Person                   |  victimRelationshipToSuspect                |  Direct Mapping
willingToAttendCourt                       |  Person                   |  willingToAttendCourt                       |  Direct Mapping
workEmailAddress                           |  Object (Email)           |  emailAddress                               |  New POLE entity created, value remains the same
workExtensionNumber                        |  Object (Telephone)       |  telephoneCountryCode                       |  New POLE entity created, value remains the same
workPhoneNumber                            |  Object (Telephone)       |  telephoneNumber                            |  New POLE entity created, value remains the same
workStartTime                              |  Person                   |  workStartTimeDetails                       |  Direct Mapping
workStartTimeClock                         |  Person                   |  workStartTime                              |  Direct Mapping
workEndTime                                |  Person                   |  workEndTimeDetails                         |  Direct Mapping
workEndTimeClock                           |  Person                   |  workEndTime                                |  Direct Mapping
youtubeUserName                            |  Object (SocialMedia)     |  socialMediaTag                             |  SocialMedia POLE entity created with socialMediaType Youtube, socialMediaTag remains the same
distinguishingFeature                      |  Person                   |  distinguishingFeature                      |  Direct Mapping
currentAddress                             |  Location                 |  _AddressFields                             |  New POLE entity created, value remains the same
permanentResidence                         |  Location                 |                                             |  information preserved in linking
permanentAddress                           |  Location                 |  _AddressFields                             |  New POLE entity created, value remains the same
dateMovedIn                                |  Location                 |  dateMovedIn                                |  New POLE entity created, value remains the same
addressAlarmFitted                         |  Location                 |  alarmFitted                                |  New POLE entity created, value remains the same
addressAlarmFittedDetails                  |  Location                 |  alarmFittedDetails                         |  New POLE entity created, value remains the same
addressDescription                         |  Location                 |  addressDescription                         |  New POLE entity created, value remains the same
sameAddressAsPersonReporting               |  Location                 |                                             |  New POLE entity created, value remains the same
ethnicity                                  |  Person                   |  ethnicityGroup                             |  Direct Mapping
ethnicityAsian                             |  Person                   |  ethnicitySelfDefined                       |  Direct Mapping
ethnicityAsianOther                        |  Person                   |  ethnicitySelfDefinedDetails                |  Direct Mapping
ethnicityBlack                             |  Person                   |  ethnicitySelfDefined                       |  Direct Mapping
ethnicityBlackOther                        |  Person                   |  ethnicitySelfDefinedDetails                |  Direct Mapping
ethnicityMixed                             |  Person                   |  ethnicitySelfDefined                       |  Direct Mapping
ethnicityMixedOther                        |  Person                   |  ethnicitySelfDefinedDetails                |  Direct Mapping
ethnicityWhite                             |  Person                   |  ethnicitySelfDefined                       |  Direct Mapping
ethnicityWhiteOther                        |  Person                   |  ethnicitySelfDefinedDetails                |  Direct Mapping
ethnicityAnother                           |  Person                   |  ethnicitySelfDefined                       |  Direct Mapping
ethnicityAnotherOther                      |  Person                   |  ethnicitySelfDefinedDetails                |  Direct Mapping
vehicle                                    |  Object (Vehicle)         |  _VehicleFields                             |  New POLE entity created, value remains the same
connections                                |  Person                   |  _PersonFields                              |  New POLE entity created, value remains the same