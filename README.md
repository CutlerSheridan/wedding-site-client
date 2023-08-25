# Wedding Site (Frontend)

## The guest-facing client for my wedding website

Find the backend repo [here](https://github.com/CutlerSheridan/wedding-site-server).

#### TODO NEXT

- wire up RsvpForm to communicate with database via form selections
- add address section under Rsvp

#### TODO LATER

##### Features

- add button to Rsvp to return to search
- add "add to calendar" buttons under schedule

##### Behavior

##### Style

- underline active tab
- add RSVP button to home page
- add credit

#### DONE

_0.1.6_

- add EVENTS constant
- add logic to RsvpForm so it populates a selector for each guest's response next to each event

_0.1.5_

- actually fix submit button

_0.1.4_

- fix RsvpAuth submit button disabling on load

_0.1.3_

- disable RsvpAuth submit button when awaiting response
- disable RsvpAuth submit button when name field is empty

_0.1.2_

- write RsvpAuth component and logic
- fix issue of auth dialogue not switching to RsvpForms after successfully fetching guest info

_0.1.1_

- add Registy page

_0.1.0_

- get some basic routes set up
- create navbar for all pages
- add dynamic buttons to navbar
- create RSVP page skeleton and child components RsvpAuth and RsvpForm
- get Rsvp to check localStorage for groupId
- have Rsvp fetch guests from server and update state variables
- pass guest info down to RsvpForm
- add loading page for initial RSVP page render

_0.0.0_

- Initial commit
