# Wedding Site (Frontend)

## The guest-facing client for my wedding website

Find the backend repo [here](https://github.com/CutlerSheridan/wedding-site-server).

#### TODO NEXT

- ? add White Star Line logo to schedule
  - ? or omg replace navbar "&" with logo
  - ? also add it to Table empty corner cells
- decide on calendar button font color
- rewrite itinerary copy

#### TODO LATER

##### Features

- ? wedding hashtag
- add character page with condensed view and expanded view
  - on character page, add ability to edit things
- add SEO
- ? add admin user setting to dictate if admin can only view admin site or if they can edit too

##### Behavior

- prevent async loading flicker by creating stand-in views (like an empty ticket for RSVP, for example)
- add error if server is called and doesn't respond
- ? add ability in Schedule to link or span in description line (this would really just require manually putting in event descriptions instead of including them in event objects)

##### Style

- decide how to lay out pictures on Home
- add credit

##### Production Deployment Checklist

- clean up comments
- clean up logs
- Remove 'toggle stored groupId' button
- Remove 'Toggle auth' button
- change default backend db to production db

#### DONE

_0.11.16_

- do another mobile pass with Kenna's old iPhone Max
  - adjust 'booking options' sizes
- add stars to top of page
- add transparency mask to stars so they fade about halfway down a page's initial view
- make fade occur at the same spot on each page regardless of how much content is on the page (use vh's instead of %'s for gradient switch point)

_0.11.15_

- move 'go back' link to bottom of Photo page
- refactor hotel page buttons so you can copy the links
- decide on and clean up .button-small use
- make Home photos focus-able; swap navigation to a transparent button on top of each picture
- make Hotel photo focus-able

_0.11.14_

- add page transitions using framer-motion package
- adjust RSVP loading so user with no stored group ID doesn't see Loading component upon loading search bar
- fix how, on mobile, clicking "back to search" reverts page to RsvpAuth but doesn't scroll page up
  - (didn't really figure out the issue but I added scroll-to-top behavior to "back to search" button)

_0.11.13_

- check breakpoints; add more where needed
  - [x] Cardstock
  - [x] Home
  - [x] Navbar
  - [x] Photo
  - [x] RSVP Auth
  - [x] RSVP Form
  - [x] Itinerary
  - [x] Hotel
  - [x] Registry
  - [x] Dashboard
  - [x] Addresses
  - [x] Group Lookup
  - [x] Group Edit
  - [x] Login
  - [x] Signup
  - [x] Error 404
- make header font smaller on mobile

_0.11.12_

- style login page to current theme
- adjust spacing of Group Card names so it's more clear when one name is breaking vs. two names are stacked
- add padding to GuestCard input fields
- fix GuestCard detail wrapping, not sure when this fucked up again
- adjust spacing of labels when in edit mode
- make letter-spacing normal everywhere that's cursive
- make password field censor passwords
- censor secret passphrase

_0.11.11_

- add ticket hole to GuestCard
- hide GuestCard delete button when not in edit mode
- make Save btn revert Group Edit page to not-editing
- hide New Guest btn and last separator when not editing

_0.11.10_

- improve RSVP ticket holes so responsive sizing never results in camouflaged half of hole covering Cardstock border
- style GuestCard labels and name
- get GuestCard ticket responsive width for mobile
- fix hidden h1 so long URL doesn't cause blank page to extend to the right

_0.11.9_

- strikethrough Characters navlink for the time being
- surround Group Lookup with Cardstock
- improve layout, spacing, and sizing of group lookup search section
- remove border radius from group cards
- adjust border style on group cards
- adjust group card font sizes on mobile
- adjust group card gaps
- make secret h1 positioning absolute so it doesn't interfere with page layout
- style group edit instructions
- adjust spacing on Home

_0.11.8_

- make Save btn shift below address input on mobile in Addresses

_0.11.7_

- restyle Addresses hover behavior

_0.11.6_

- update Addresses colors to current theme
- add page header
- adjust Edit btn placement
- get columns to be the correct widths on mobile
- get table to size itself correctly
- recolor and resize cell borders
- change column header font and add letter-spacing
- make Addresses table border style double
- color thick dividers via borders instead of background so see-through table border design is visible

_0.11.5_

- in Dashboard, improve Table label style
- simplify cell border CSS
- make Table border double lines
- remove border radius from Table
- refactor hover/active behavior for Table cells
- adjust global button style
- resize RSVP buttons accordingly
- add transitions to Table buttons

_0.11.4_

- update Table color scheme to new theme
- fix table resizing upon toggling Edit
- simplify max-width of table on mobile
- center table headers
- adjust Dashboard control buttons sizes on mobile

_0.11.3_

- put Dashboard on Cardstock
- on Dashboard Tables, adjust font sizes on mobile
- adjust cell sizes on mobile
- add name overflow behavior to names column
- make name max-width smaller when editing due to additional columns

_0.11.2_

- on RSVP tickets, make event labels all caps
- make event labels smaller
- remove border radii from tickets and inner borders
- make event title cursive
- change perferation separator into more subtle separator
- change separator back

_0.11.1_

- add inner border around RSVP ticket
- make border 'double' instead of 'solid'
- make Cardstock border double too
- make ticket outline .5px
- fix navbar admin links so underline doesn't extend past last letter of each link

_0.11.0_

- update RSVP ticket style to current theme
- update RSVP style for mobile
- adjust perforation placement / length
- refactor ticket holes on mobile and desktop
- make mobile tickets have two holes - one for top half, one fo bottom half
- adjust horizontal spacing for mobile address input so it's not so close to the hole
- on RSVP, change accent colors to grey-lightest instead of grey-lighter
- on Hotels, also change accent colors to grey-lightest
- add invisible h1's to each page so search engines can find them

_0.10.5 (branch: booking-grid; merge branch to main)_

- turn booking options list into grid
- make grid one column on mobile, three on desktop
- remove links from options and add buttons
- add separators between booking options
- add lines to the left of other Hotel infoGroups
- link up buttons to behaviors

_0.10.4_

- make hotel name cursive
- adjust booking options spacing

_0.10.3_

- add Cardstock to error 404 page
- style Error 404 page
- refactor routes and App.jsx to insert Error page into normal site layout

_0.10.2_

- add Cardstock to Registry
- write better copy for Registry
- style Registry

_0.10.1_

- delete empty hotel info elements and revert bottom margin in response
- add additional info at bottom of hotel page

_0.10.0_

- make Photo back button navigate to previous page instead of to parent route
- populate Hotel page
- find hotel photo
- figure out hotel information grouping and coloring
- style hotel page
- add links and phone numbers
- move photo outside of hotel Cardstock
- lessen bottom margin for hotel page

_0.9.12_

- adjust default height of Photo component
- make all non-nav links underlined with thicker underline on hover
- simplify link styling for default links, links on white, and navbar links
- add "go back" button to Photos page in addition to link

_0.9.11_

- adjust Home top and bottom margins
- adjust Cardstock margins
- adjust Schedule event description margins/padding

_0.9.10_

- fix img element sources on Photo component so image loads properly upon refresh (currently only loads the first time you click)
  - the issue was having the URL end with the file extension; as soon as I removed that, refreshing worked fine
- link both pictures to Photo pages
- make cursor into pointer when hovering over Home pictures

_0.9.9_

- create Photo component
- add route straight to each picture

_0.9.8_

- adjust picture spacing on home
- make fancy bottom corners same size as top corners
- adjust bottom spacing for pictures
- adjust bottom spacing for itinerary

_0.9.7_

- remove fancy corners from navbar
- add flourishes besetting names in navbar

_0.9.6_

- add fancy corners to Cardstock
- add corners to both versions of navbar

_0.9.5_

- change RSVP deadline
- make navbar cursive names link to home

_0.9.4_

- add letter-spacing and margins to home page text
- adjust text sizes on home page
- adjust home page margins and sizes for desktop vs. mobile
- make days in Schedule grey
- make home page body links open next page at top of page

_0.9.3_

- add photos to home page
- make photos equal widths and heights while remaining responsive, cropping the originally-wider image horizontally to achieve the new aspect ratio
- make some text on home page grey

_0.9.2_

- add initials to mobile navbar
- restructure mobile top bar so hamburger button and initials are grouped
- make hamburger button look better
- add separator to mobile top bar
- adjust mobile .app-contentWrapper margin

_0.9.1_

- make navlink underlines not extend past final letter
- adjust content margins
- remove h1 from home
- underline other h1's

_0.9.0_

- start writing home page
- refactor some schedule CSS so edge padding is on wrapper, not each day
- add matte to content-containing rectangles
- create Cardstock component to reuse matted rectangles
- refactor Home and Schedule to use Cardstock

_0.8.10_

- clean up comments in schedule
- add dress code to wedding description

_0.8.9 (merge branch to main)_

- continue improving itinerary
- make 'add to calendar' button smaller

_0.8.8_

- make date font-1
- make event title cursive
- remove gaps between days
- in schedule, add horizontal day separators on mobile

_0.8.7_

- italicize event descriptions in schedule
- restyle calendar button
- add vertical separator to desktop schedule events that takes height of whichever side is taller

_0.8.6_

- in itinerary, make event info side-by-side on desktop
- add day under date
- adjust page wrapper margins so header still extends across entire screen
- add h1's to Navbar.jsx
- add className-setting function to NavLinks so the file is cleaner
- fix duplicate key react error

_0.8.5_

- adjust thickness and offset of underlines for date and navlinks

_0.8.4_

- make background gradient
- restructure Schedule.jsx so event dates are their own elements and the events fill into an element beneath each one; this way, the date backgrounds can be transparent so the blue matches the background gradient
- color mobile edges

_0.8.3_

- finesse active navlink underline and hover underline

_0.8.2_

- swap navbar links to NavLinks so active link can be styled differently

_0.8.1_

- spruce up itinerary styling
- decide on fonts
- add names, date, location to navbar

_0.8.0 (branch: elegant-ui)_

- change color palette to deep blue + white
- experiment with white cards on Itinerary page

_0.7.5 (merge branch to main)_

- make RSVPs look like tickets like I did with guest cards
- change button hover border colors
- adjust sizing and layout of RSVP search page
- adjust sizing and layout of group lookup search elements
- make RSVP buttons equal widths

_0.7.4_

- add ticket holes to guest card tickets

_0.7.3_

- edit sizing and styles of Schedule text
- change Edit Group colors
- make group card and guest card borders dotted like tickets
- change button colors
- make hamburger button red
- make group + guest cards white
- make group cards' border solid on hover
- make guest card delete button text white

_0.7.2_

- recolor guest cards in Edit Group
- adjust font sizes in guest cards
- recolor and resize separators
- prevent background scrolling when hamburger menu is open on mobile
- make hamburger button smaller

_0.7.1 (branch: site-ui)_

- do tons of style changes, especially re: fonts and colors
- resize Dashboard elements
- resize Addresses elements
- resize and recolor Edit Group selection cards
- resize Edit Group group page

_0.7.0_

- center Addresses table
- Fix "Toggle stored groupId" button on RSVP page
- add button to Rsvp to return to search

_0.6.18_

- enable deleting unused new guest cards

_0.6.17_

- clean up debugging logs from solving previous issue
- simplify GroupForm's saveUpdatesToDb API calls

_0.6.16_

- fix how, when starting new guest from preexisting but empty group, 'Group: ' does not list the old group or "new group" or even a blank space
- prevent saving guest NOT in edit mode from reappearing (/re-disappearing) after saving (correctly updates database, just displays wrong)
  - also vice versa

_0.6.15_

- hack the guest cards to refresh the page upon saving so the correct things show up; this is just to get it working--try to use more react-friendly method in next commit

_0.6.14_

- prevent error when saving in new group when no new user has been created
- add 'delete guest' button that deletes saved guests
- prevent deleting all guests in group then saving from repopulating deleted guests (as they correctly are deleted and show as such upon refresh)

_0.6.13_

- make new guest in group's ID refresh upon save and take the new ID from db so you can edit the new guest again
- add ability to create new group
- enable creating multiple guests in a new group
- after saving new guest in group, navigate to edit page of first new guest's group

_0.6.12_

- add ability to add new guest to preexisting group
- add ability to add multiple guests to group at once
- make new guests in group inherit family and groupId
- add property to new guests to check if they've been edited or not so unused new guests can be auto-deleted
- add ability to save new guests in group

_0.6.11_

- make groups update if you back out of group then go back in

_0.6.10_

- add ability to save changes
- fix Selector component saving false bool value as string
- prevent saving if guest name is empty
- refactor react keys so ShortTextInput doesn't lose focus after every keystroke

_0.6.9_

- make textarea component
- reorganize GuestCard layout
- auto-assign 'label' to input components if it's not specified
- add all fields for guest cards
- make guest cards legible in iOS Safari

_0.6.8_

- extract short input text to component
- extract selector to component

_0.6.7_

- add short text inputs to guest cards
- refactor Table.jsx to use for checkboxes in guest cards
- create selector creation func for guest cards
- add families for selector
- make display values match selected value label
- add guest names and group IDs for selector
- make guest names alphabetical
- add ability to put guest in new group
- make new group option display "New Group" when not editing (had to pass down randomized new group ID as state from parent so it didn't regenerate)

_0.6.6 (branch: 'handle-multiple-edits')_

- refactor all handleEdit() methods to use object arguments instead of separate single field and value args for scalability
- change name to 'handleEdits()'

_0.6.5_

- clean up Table.jsx and remove dependence on declinedVisible variable
- create initial structure for guest cards

_0.6.4_

- change Edit buttons so they always just say "edit" and indicate status via white fill
- show 'Ready to send' column in Addresses

_0.6.3_

- create hamburger navbar for mobile
- add transitions for hamburger slide in and out
- eliminate top-of-page gap when on mobile and hamburger button is to the side
- make it so clicking the translucent overlay of the hamburger menu dismisses it
- put the hamburger navbar higher in the z-index so it superimposes the "add to calendar" buttons
- dismiss hamburger after clicking link

_0.6.2_

- add clickable list on GroupLookup page with every group listed
- make group list flex on wide screens, grid on thin ones
- add label to search bar
- keep search bar on one line on mobile
- add gap between search bar and search button

_0.6.1_

- make error 404 page 'go back' button actually go back to last page with navigate(-1)
- add Navbar to 404 page

_0.6.0_

- add GroupEdit page logic that loads and fetches guests if signed in
- add GroupLookup component that lets user search name and redirects them to the appropriate group page

_0.5.12_

- create (empty) pages for GroupEdit components
- restructure component directories so Admin components are actually in Admin folder
- move all Addresses logic to Addresses component and delete AddressesPage wrapper

_0.5.11_

- move Addresses to its own page
- make edit buttons smaller
- remove Addresses logic from Dashboard

_0.5.10_

- refactor Dashboard so URI dictates display style
- make display style tabs navigate between display style paths (had to use {relative: 'path'})
- make default /dashboard page render with default display style
- account for tabs to switch style whether path specifies style or not

_0.5.9_

- touch up Addresses table formatting

_0.5.8_

- indicate active tab
- bold and underline RSVP totals in table
- reorder Declined and Next Round columns in RSVP tables

_0.5.7_

- make all RSVP tables the same width by passing longest name to each one and setting row header widths accordingly
- make Log Out link only appear when logged in

_0.5.6_

- add red background to Declined caption
- clean up Table.css
- round inner corners in Addresses
- add caption to Addresses table

_0.5.5_

- require valid JWT to fetch guests in Dashboard
- remove 'declined' column from 'Declined Guests' table
- make 'Declined Guests' table border red
- make other table borders light grey instead of black
- refactor table CSS to allow for rounded borders
- extract table caption into separate div
- round Addresses outer corners

_0.5.4_

- alternate colors of field group cells in Addresses
- increase group separator visibility in Addresses
- make :active and :hover styles apply with priority over alternating background colors

_0.5.3_

- make Addresses toggles display :active and :hover appropriately

_0.5.2_

- extract handleEdit() from Table.jsx to Dashboard.jsx so it can be passed down to Table and to Addresses
- in addresses, use different functions to create field groupings to customize control
- add working toggle to toggle-able columns in Addresses
- create component for text input fields in Addresses
- add ability to edit address(es)
- in Addresses, make edit view display an address box for each guest in a group even if only one is filled (unlike in non-edit view)
- tighten up createTextInputFieldGrouping() code

_0.5.1_

- adjust addresses grid sizing and placement
- delete addresses logic from Table.jsx
- add heading for addresses grid

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
