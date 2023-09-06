# Wedding Site (Frontend)

## The guest-facing client for my wedding website

Find the backend repo [here](https://github.com/CutlerSheridan/wedding-site-server).

#### TODO NEXT

- delete address logic from Table.jsx
- add heading for addresses grid
- in addresses, use different functions to create field groupings to customize control
- add checkbox to edit column for having sent character info
- add checkbox to edit column for having sent invite
- add ability to edit address(es)
- ? delete address logic from Dashboard.jsx if it's going in its own page

#### TODO LATER

##### Features

- ? move Addresses to Addresses page
- ? refactor Dashboard so URI dictates display style
- add Characters page for game
- add ability in Schedule to link or span more than once per description line
- add button to Rsvp to return to search
- add RSVP button to home page
- add admin user setting to dictate if admin can only view admin site or if they can edit too
- add character page with condensed view and expanded view
- on character page, add ability to edit things
- add view to see all info about all guests in specific group
  - make component for each individual person
  - maybe lookup by name, maybe click through from list, maybe both

##### Behavior

- make sure, if token doesn't validate to fetch data, that user is redirected to login page
- get "Toggle stored groupId" button on RSVP page working again
- should 404 "Go back" button go to previous page or to home page?
- add page fade after brief delay to RSVP so it doesn't flicker "loading" for super fast loads

##### Style

- ? add highlight to RSVP totals in table
- make tables consistent widths
- get dashboard table headers looking better on Safari
- make password field censor passwords
- censor secret passphrase
- underline active tab
- research styling page transitions
- ? remove 'declined' column for declined guests when not editing
- add credit

#### DONE

_0.5.0_

- add :active style on desktop for clicking RSVP cells
- add 'families' display option to Dashboard
- add 'addresses' display option with bespoke component
- wrap all page content in div and add page edge margin
- make group addresses display all if they're different or just one if they're the same or if only one is filled out
- style addresses grid for readability
- make verticle grid lines as thin as guest divider lines instead of as thick as group divider lines

_0.4.5_

- add "next_round" col for guest table editing

_0.4.4_

- have guest RSVP cells call API to update guest info in DB
- when clicking table cell, add func to update guests locally

_0.4.3_

- make admin login work on mobile by changing SERVER_URL to 'http://192.168.1.187'
- fix cell highlighting to not stick on mobile
- adjust table display so all columns are visible on mobile
- flip words to go other direction + make it work in Safari
- on mobile admin login page, prevent auto-capitalizing first letter and auto-correct
- make form inputs align-left

_0.4.2_

- swap checks and Xs in tables for filled color squares
- add ability to toggle "edit" mode on dashboard to edit table cells myself
- make Dashboard table cells appropriate color on hover when editing

_0.4.1_

- add totals to main table when desired

_0.4.0_

- get Dashboard to fetch all guests
- put all guest RSVP info into table
- extract table into component
- add hidden Declined column that only shows up when specified
- style tables a bit to make them more legible

_0.3.4_

- disable App.css; move desired styles to index.css
- add global variable to pass to all API calls so I can swap it easily once I deploy production site

_0.3.3_

- wire up signup form to call auth API
- merge handleLogin() and handleSubmit()
- print errors if any are returned
- log in and store jwt if successful

_0.3.2_

- wire up login form to call auth API
- convert formdata to JSON for fetch payload
- if successful, store jwt and update localstorage
- refactor updateJwt() to extract token string if jwtData passed is an object
- make login screen display error if there is one

_0.3.1_

- lift jwt state var and updateJwt() to App component
- make admin nav show when no auth if path includes 'admin'
- delete unused routing code
- set up AdminAuth page for logging in
- add swap button to go from logging in to signing up or vice versa
- set up AdminAuth page for signing up

_0.3.0_

- add admin routes
- have AdminWrapper display user auth if not signed in

_0.2.2_

- programmatically add commas to event addresses in calendar buttons

_0.2.1_

- add styling to only show focused button outline if navigating with keyboard

_0.2.0_

- put events onto schedule page
- add ability to have one link or span in event description
- add "add to calendar" buttons under schedule

_0.1.8_

- add address section under Rsvp
- disable checkboxes while guest RSVP is updated
- add address inputs

_0.1.7_

- add RSVP checkboxes that communicate with db

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
