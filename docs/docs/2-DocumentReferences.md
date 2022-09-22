---
stoplight-id: 01v12r8vbyj6e
---

# Standard Data Model

The Standard Data Model is a standardised definition of all POLE (Person, Object, Location, Event) entities which can be used within the iHub. These entities have been defined by combining the Minimum POLE Data Standards Dictionary and SOH schemas, and creating a single source of truth.

The Standard Data Model includes:

* Definitions of POLE (Person, Object, Location, and Event) entities
* Definitions of relationships between POLE entities
* Constrained Values
* Mappings between Single Online Home (SOH) schema based objects and the Standard Data Model POLE entities

## Definitions of POLE Entities
POLE entities that exist within the Minimum POLE Data Standards Dictionary, and the Single Online Home schemas used to display public facing forms have each been defined.

### What approach is used to define the Standard Data Model POLE objects?

The approach to developing the Standard Data Model POLE objects is:
1.	Where there is a National POLE standard for the data entity in question, the programme will adopt that standard, as far as it covers the attributes and structures required.
2.	Where a National POLE Standard does not exist or is missing attributes for the entity in question, the programme will consider the following standards in hierarchical order:
    1.	Other British or ISO standards
    2.	PND / Home Office or other Criminal Justice Standards
    3.	Single Online Home schema / Force Record Management Systems schemas
  4.  POLE entities and their fields are all defined using dromedary case, for example telephoneNumber

These POLE entities are:

### Person
- [person](../models/person/person.json)


### Object
- [attachment](../models/object/attachment.json)
- [bankCard](../models/object/bankCard.json)
- [bicycle](../models/object/bicycle.json)
- [business](../models/object/business.json)
- [comms](../models/object/comms.json)
- [channelShift](../models/object/channelShift.json)
- [drivingLicence](../models/object/drivingLicence.json)
- [email](../models/object/email.json)
- [evidence](../models/object/evidence.json)
- [identification](../models/object/identification.json)
- [media](../models/object/media.json)
- [mobile](../models/object/mobile.json)
- [passport](../models/object/passport.json)
- [property](../models/object/property.json)
- [publicTransportCard](../models/object/publicTransportCard.json)
- [socialMedia](../models/object/socialMedia.json)
- [telephone](../models/object/telephone.json)
- [weapon](../models/object/weapon.json)
- [vehicle](../models/object/vehicle.json) 

### Location

- [location](../models/location/location.json)
- [stolenFromLocation](../models/location/stolenFromLocation.json)

### Event

- [incident](../models/event/incident.json)
- [submission](../models/event/submission.json)

## Definitions of relationships between POLE entities
Relationships between POLE entities are used to:
* Define the relationships between entities, for example the location of an incident, or the email address of a person.
* Infer the type of object being linked to. For example an address could be related to the incident, a person, or a business. 

Relationships are used as Link Reasons in downstream systems such as Athena.

Relationships between POLE obects are defined in the [Relationships page](../docs/dataModelRelationships/relationships.md)

## Constrained Values


### Constrained Values (CV Lists)

Each value within a CV list consists of segments: a code & an identifier, delimited by an underscore.

![hehe](CVs.png)

Where
 - The code is a unique, 4-letter code representing the underlying CV list.
 - The identifier is a unique value within the constrained value list. Values for the identifier is chosen based on the following prioritised order:
CV Lists have been created based upon the following prioritised order:
1. If there is an international/British standard for the CV list, this is adopted
2. If there are widely-used values existing within the policing space, this is adopted
3. Else, a 4-digit, zero-padded integer will be created and assigned as an identifier for the CV

CVs used in the standard Data Model are defined in the [CVs page](../docs/CVs/CVs.md)


## Mapping Single Online Home to the Standard Data Model

Fields within the SOH schema objects are mapped to POLE entities defined in the Standard Data Model. 

For example a 'personReporting' within an SOH schema will have fields such as firstName, middleName1, middleName2  which are mapped to appropriate fields within a 'person' entity in the Standard Data Model.

**Mappings from SOH to the Standard Data Model**

The following table explains how fields are mapped from SOH to the Standard Data Model.


**Mapping Types**
Mapping Type | Description | 
---------|----------|
 Direct Mapping | The field is mapped directly to the Target Pole Entity within the Standard data model | 
 New POLE entity created, value remains the same | The field is mapped onto a different POLE entity. For example telephoneNumber is the property of a person object in SOH, but is a new telephoneNumber object in the Standard Data Model |
 |information preserved in linking| The field is not directly mapped to another field, information contained within the field is conveyed as an equivalent link reason.|
 |Concat with ...| The field is concatenated with another one, for example middleName1 and middleName 2 are joined together to form middleName

 

**Mapping rules** 

Mappings from SOH to standard Data Model entities are defined in the [SOH Mapping page](../docs/simplifiedMapping/Simplified-Mapping.md)




