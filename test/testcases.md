# Test cases for Korp

This is a non-exhaustive list of things to test when doing changes in Korp.
 The tests are written for Språkbankens setup of Korp.

Ideally all of these would be tested automatically, but that is future work.

## Search

### Simple

**Related words**

"Related words" should appear when searching for a lemgram in simple search.

https://spraakbanken.gu.se/korplabb/#?lang=eng&cqp=%5B%5D&corpus=vivill&page=0&search=lemgram%7Cframtid%5C.%5C.nn%5C.1

- Go to link
- **Check that a "Related words"-button appears on the right**
- Click the button
- **Check that the results seem reasonable**

**Lemgram suggestions**

https://spraakbanken.gu.se/korplabb/#?cqp=%5B%5D&corpus=suc3

- Follow link or go to Korp and select the "SUC3"-corpus
- Enter a wordform in the search input, "framtid" for example
- Select a lemgram and search
- Enter another wordform
- **The lemgram autocomplete should popup**
- Don't select anything, just search
- Enter yet another wordform
- **The lemgram autocomplete should popup**

### Extended

**Warnings when using lemgram, initial part and final part**

https://spraakbanken.gu.se/korplabb/#?cqp=%5B%5D&corpus=suc3

- Go to link
- Go to Extended search
- Select "lemgram" and type something
- Do not select a lemgram and click outside the token box
- **"Choose a value" should appear**
- Type an actual wordform and select a lemgram
- **"Choose a value" should disappear**
- Redo the test for *compounds*

**Case insensitivity settings should not be preserved when switching search attribute**

https://spraakbanken.gu.se/korplabb/#?cqp=%5Bword%20%3D%20%22framtid%22%20%25c%5D&result_tab=2&corpus=vivill&search_tab=1&lang=eng&search=cqp&show_stats

- Follow link
- A case-insensitive search has been performed
- Switch from `word` to `lemgram` in the search box
- Enter a lemgram
- Go to the advanced tab
- **`%c` should not be included in the "Active CQP query in extended"-box**

### Advanced

https://spraakbanken.gu.se/korplabb/#?lang=eng&cqp=%5B%5D&corpus=suc3&search_tab=2&search=cqp%7C%5Bword%20%3D%20%22national.*%22%20%26%20word%20!%3D%20%22nationaliteter%22%20%25c%5D

- Follow link
- **It should open "Advanced" tab for searching**
- Click the JSON-button
- **Check that the result is the same as in KWIC**

### Filters

**Escaping values**

https://spraakbanken.gu.se/korplabb/#?lang=eng&cqp=%5B%5D&corpus=aspacsv&global_filter=eyJ0ZXh0X2F1dGhvciI6WyJKLlIuUi4gVG9sa2llbiJdfQ%3D%3D&page=0&search=word%7CSmaug

- Go to link or filter on author J.R.R. Tolkien in *ASPAC svenska* and search for e.g. Smaug in simple search.
- Go to the advanced tab
- Check that in "Active CQP query in simple search" the dots in the name
  are escaped with `\`
- (or search and use developer tools to check that the CQP in the request is escaped)

**Empty values**

https://spraakbanken.gu.se/korplabb/#?lang=eng&cqp=%5B%5D&corpus=spin-source&global_filter=eyJ0ZXh0X3RleHRfdHlwZXMiOlsiIl19&search=word%7Cbil&page=0

- (Search for "bil" with filter Genre = "-" in SpIn)
- Should give two hits and in the advanced tab we should see: \
  `[word = "bil" & _.text_text_types = ""]`

### Controls

**Abort**

https://spraakbanken.gu.se/korplabb/#?cqp=%5B%5D&corpus=wikipedia-sv&search=lemgram%7Cf%C3%B6da%5C.%5C.vb%5C.1&lang=eng

- Make a search with several pages of hits
- Press the Escape button immediately after pressing Search
- **The search should be aborted with a message**
- Open the Network tab in the Developer tools
- Press Search twice, quickly
- **There should be two GET `/query` requests, the first one aborted**
  - (This behaviour will probably change with https://github.com/spraakbanken/korp-frontend/issues/88)
- **No abort message should be showing**
- In the pagination bar, press the next page button "&gt;" twice, quickly
- **Same as above**

## Results

### KWIC (keyword in context)

**Progress and preview**

- Search in simple for any fairly common word that has not been search 
  for before (to make sure that backend isn't caching the search) in 
  the default corpora in the Modern-mode
- Check that the progress bar works, it updates every time we get new results from corpora
- Check that the first page of results are shown before search is completely finished

**JSON button is available**

https://spraakbanken.gu.se/korplabb/#?cqp=%5B%5D&corpus=suc3&lang=eng&search=word%7Cf%C3%B6r%20att

- Do a simple search in any corpus, SUC3 for example
- **JSON button should appear and link to the correct search (compare hits for example**
- Switch to another result tab and back
- **JSON button should still be available**

**Downloading in context view**

https://spraakbanken.gu.se/korplabb/#?lang=eng&cqp=%5B%5D&corpus=vivill&search=word%7Cframtid&page=0&reading_mode

- Follow link
- Download as "One sentence per row (TSV)"
- Open in "Notepad"/Excel/LibreOffice
- **Check that there is correct data in each column**
- Redo for "One token per row with annotations (CSV)"

**Downloading when "in free order" is enabled**

https://spraakbanken.gu.se/korplabb/#?lang=eng&cqp=%5B%5D&corpus=vivill&page=0&in_order=false&search=word%7Cframtid%20m%C3%A4nniskor

- Follow link
- Download as "One sentence per row (TSV)"
- Open in "Notepad"/Excel/LibreOffice
- **Check that there is correct data in each column**
- Redo for "One token per row with annotations (CSV)"

Note: "One sentence per row (TSV)" does not fully support this search.
The entire row will be placed in left context, since there may be one
word or more that matches.

**Download from KWIC opened from word picture**

https://spraakbanken.gu.se/korplabb/#?lang=eng&cqp=%5B%5D&page=0&result_tab=4&word_pic&corpus=aspacsv,romi,romii,rom99,storsuc,romg&search=lemgram%7Chund%5C.%5C.nn%5C.1

- Follow link
- Click the icon by any word to get a new KWIC
- Click "Download hit page" as... -> "One sentence per row (CSV)"
- **The correct data should be in the downloaded document**

**Context view look**

https://spraakbanken.gu.se/korplabb/#?lang=eng&cqp=%5B%5D&corpus=vivill&search=word%7Cframtid&page=0&reading_mode

- Follow link
- Check that the hits are bold, the hit sentences are black and the rest of the contexts are grey

**Short KWIC rows should not cut off corpus names**

https://spraakbanken.gu.se/korplabb/#?cqp=%5Bword%20%3D%20%22och%22%20%26%20lbound(sentence)%20%26%20rbound(sentence)%5D&corpus=drama&search_tab=1&search=cqp

- Follow link
- **Check that the hit corpus name in the KWIC is completely visible**

**Keyboard navigation**

https://spraakbanken.gu.se/korplabb/#?lang=eng&cqp=%5Bword%20%3D%20%22f%C3%B6r%22%5D%20%5B%5D%7B0,2%7D%20%5Bpos%20%3D%20%22VB%22%5D&corpus=suc3&search_tab=1&search=cqp

- Follow link to get a KWIC
- Select any token by clicking on it
- Navigate around with arrow keys
- **Navigation should correspond to what keys are pressed. Edge cases (first/last token/row) should feel natural and make sense.**
- Swich to context view
- **Navigation should correspond to what keys are pressed. Edge cases (first/last token/row) should feel natural and make sense.**

### Word picture

**Word picture does not support filtering**

https://spraakbanken.gu.se/korplabb/#?cqp=%5B%5D&page=0&reading_mode&word_pic&corpus=aspacsv&search=lemgram%7Chund%5C.%5C.nn%5C.1&result_tab=3

- Follow link
- **Check that a word picture is generated**
- Click "Add author" then add "Astrid Lindgren"
- Perform search
- **Check that a word picture is not genereated**

**Word picture works when statistics is disabled**

https://spraakbanken.gu.se/korplabb/#?lang=eng&cqp=%5B%5D&corpus=suc3&page=0&result_tab=3&hide_stats&word_pic&search=lemgram%7Chund%5C.%5C.nn%5C.1

- Follow link
- Check that the word picture works, but statistics is turned off

**Pagination when opening KWIC from word picture**

https://spraakbanken.gu.se/korplabb/#?lang=eng&cqp=%5B%5D&page=0&result_tab=3&word_pic&search=lemgram%7Chund%5C.%5C.nn%5C.1&corpus=aspacsv,romi,romii,rom99,storsuc,romg

- Follow link
- Click the first result in wordpicture, "med" with about 200 occurences
- A KWIC should open up
- Go to page 6 using the "Go to page" input box
- **First hit on this page should be the two last hits from "Bonniersromaner II"**

### Statistics

**Download**

**It should be possible to make column sizes indefinitely bigger**

https://spraakbanken.gu.se/korplabb/#?cqp=%5B%5D&corpus=gp1994,gp2001,gp2002,gp2003,gp2004,gp2005,gp2006,gp2007,gp2008,gp2009,gp2010,gp2011,gp2012,gp2013,gp2d&search=word%7Cnyhet&page=0&result_tab=2&show_stats

- Search in all GP-corpora for "nyhet" and go to statistics or follow link above
- **Check that all columns have the same size (except checkbox and pie chart)**
- **Check that resizing a corpus column to be super big works**
- **Check that resizing the value column to be super big works and also that it doesn't affect the corpus column sizes**

**Table should use the available space**

https://spraakbanken.gu.se/korplabb/#?cqp=[]&corpus=vivill&page=0&search=word|nyhet&show_stats

- Search in "Svenska partiprogram och valmanifest" for
  "nyhet" or follow link above
- The point here is that the statistics table load in the background
  while the KWIC is viewed
- When the search is done, go to the statistics tab
- **Check that the table uses (almost) all the available space**

**Opening a KWIC from statistics should use the same search settings**

https://spraakbanken.gu.se/korplabb/#?cqp=%5B%5D&page=0&result_tab=2&corpus=vivill&search=word%7Cframtid&show_stats

- Go to link
- Deselect "Svenska partiprogram och valmanifest" and select another
  corpus (do not search)
- Click the result row in the statistics to open a KWIC
- **Check that the result count is the same as in the actual KWIC to make sure that search is still done in "Svenska partiprogram och valmanifest"**

**"Compile based on" should not be empty after switching to corpus with other attributes**

https://spraakbanken.gu.se/korplabb/#?cqp=%5B%5D&result_tab=2&corpus=vivill&search=word%7Cframtid&stats_reduce=text_party_name&show_stats

- Follow link
- "Compile based on" is `party`
- Switch corpus to "SUC3"
- **Check that "compile based on" has been reset to `word`**

**JSON button should link to the correct search**

https://spraakbanken.gu.se/korplabb/#?cqp=%5B%5D&result_tab=2&corpus=vivill&search=word%7Cframtid&stats_reduce=text_party_name&show_stats

- Follow link
- **Click the statistics JSON-button and check that the result is for the same search**
- Search for another word, "jämlikhet" perhaps
- **Click the statistics JSON-button and check that the result is for the new word**

### Map

**Opening map**

- Perform any simple search with many hits in the Modern-mode (with statistics enabled)
- Go to the statistics tab
- Select "Show map" and "Co-occurence in sentence"
- Map should open in a new tab and show up with some markers

**Clicking a marker**

- Do the test above
- Click any marker
- **Check that the map doesn't zoom**
- **Check that the info box (or boxes) about the mark becomes permanent and not just appear on hover**
- Check the number of absolute occurrences in the info box
- Click the info box
- **An example search should be performed and yield the same amount of hits**

**Should be disabled when no rows are selected**

https://spraakbanken.gu.se/korplabb/#?lang=eng&cqp=%5B%5D&corpus=suc3&search=lemgram%7Cframtid%5C.%5C.nn%5C.1&result_tab=2&show_stats

- Follow link
- Deselect all rows in statistics
- Click "Show map" -> "Show map"
- **An error message should appear**
- **Korp should not open a map tab**

### Reading mode

### Sidebar

**Long sidebar with scroll**

https://spraakbanken.gu.se/korplabb/#?lang=swe&cqp=%5B%5D&corpus=rd-mot&search=word%7Cinkomstbortfall&reading_mode

- Follow link, we need a result view where the sidebar is very long
- (You might have to make your browser window smaller for this one)
- Select a word in the KWIC so that sidebar appears
- Scroll down to the bottom
- **Check that it is possible to view all info in the sidebar, dependency graph should be at the bottom**

**Dependency graph**

https://spraakbanken.gu.se/korplabb/#?cqp=%5B%5D&corpus=vivill&search=lemgram%7Cframtid%5C.%5C.nn%5C.1&page=0&lang=eng

- Follow link
- Sidebar should show
- Click "Show Dependency Tree" in the sidebar
- **Check that the dependency tree pops up and looks ok**

## Comparison

**Use context from the correct corpora**

- Select "Svenska partiprogram och valmanifest"
- Save a simple search on "jämlikhet" as a lemgram
- Save a simple search on "frihet" as a lemgram
- Change corpus to "August Strindbergs romaner"
- Go to comparision tab and execute the comparison on jämlikhet
  and frihet (attribute party is the best).
- Click on any row in the result
- Click on "Show context"
- **Check that this works. Each result row should consist of five sentences.**

## Authentication

**Links to restricted corpora**

https://spraakbanken.gu.se/korplabb/#?cqp=%5B%5D&corpus=spinv1&show_stats&stats_reduce=pos&word_pic&search=word%7Char&page=1

- Follow link, or:
  - Login
  - Select a restricted corpora
  - Search in simple
  - Select a non-default "compile based on"-attribute
  - Turn on word picture
  - Perform search
  - Switch to another page in the KWIC
- Copy link and then log out
- Open link in a new tab
- **Login prompt should appear**
- Login
- Check that these things are restored to the same as before:
  - Selected corpora
  - The actual search
  - The page in the KWIC
  - Word picture is enabled and performed
  - The correct "compile based on" in statistics
- Redo for extended and advanced search instead of simple, but it is enough
  to check that the search is performed correctly

**Reloading when using restricted corpora**

- Login and check "Remember me"
- Select some restricted corpora and then search for something
- Reloading page should work without issue

Note: This only applies when "Remember me" have been checked

## Parallel mode

**Word links should work**

https://spraakbanken.gu.se/korplabb/?mode=parallel#?lang=eng&parallel_corpora=swe&cqp_swe=%5Bword%20%3D%20%22katt%22%5D&cqp_null=%5B%5D&corpus=saltnld-sv&search=cqp%7C%5Bword%20%3D%20%22katt%22%5D

- Follow link
- **Click some words and make sure that the corresponding word in the linked sentence is highlighted**
- Also check that dependency highlighting works, for the first sentence, "katt" is linked to "och".
- Move around with arrow keys
- **Navigation should correspond to what keys are pressed**

Hint: in Dutch, the Swedish word "katt" is "kat"!

**Searches on non-default language**

https://spraakbanken.gu.se/korplabb/?mode=parallel#?stats_reduce=word&parallel_corpora=eng&cqp_swe=%5B%5D&cqp_null=%5B%5D&corpus=aspacsven-sv&cqp_eng=%5Bword%20%3D%20%22sawdust%22%5D&search=cqp%7C%5Bword%20%3D%20%22sawdust%22%5D

- Follow link, do not search manually
- **Check that Korp searches for "sawdust" in English**

**KWIC alignment**

https://spraakbanken.gu.se/korplabb/?mode=parallel#?lang=swe&parallel_corpora=swe&cqp_null=%5Bword%20%3D%20%22%C3%A4r%22%5D&cqp_dan=%5B%5D&cqp_swe=%5Bword%20%3D%20%22Mexiko%22%5D&corpus=europarl-fi&cqp=%5Bprefix%20contains%20%22l%C3%A4%5C.%5C.nn%5C.1%22%5D&search=cqp%7C%5Bword%20%3D%20%22Mexiko%22%5D

- Follow link (important that the search result is a short sentence first and longer sentences later in the KWIC)
- **For each row, check that linked sentence is roughly center-aligned with the hit sentence**

**Dependency highlighting**

https://spraakbanken.gu.se/korplabb/?mode=parallel#?stats_reduce=word&parallel_corpora=eng&cqp_swe=%5B%5D&cqp_null=%5B%5D&corpus=aspacsven-sv&cqp_eng=%5Bword%20%3D%20%22sawdust%22%5D&search=cqp%7C%5Bword%20%3D%20%22sawdust%22%5D

https://spraakbanken.gu.se/korplabb/?mode=parallel#?parallel_corpora=swe&cqp_swe=%5Bword%20%5E%3D%20%22s%C3%A5gsp%C3%A5n%22%5D&cqp_null=%5B%5D&corpus=aspacsven-sv&cqp_eng=%5Bword%20%3D%20%22sawdust%22%5D&page=0&search=cqp%7C%5Bword%20%3D%20%22s%C3%A5gsp%C3%A5n.*%22%5D

- Open both links
- Click on sågspån in every occurence on the two pages
- Compare dependency highlighting on the sentences that are the same
- **Should be the same no matter if the search was in English or Swedish**

**KWIC download**

https://spraakbanken.gu.se/korplabb/?mode=parallel#?stats_reduce=word&parallel_corpora=eng&cqp_swe=%5B%5D&cqp_null=%5B%5D&corpus=aspacsven-sv&cqp_eng=%5Bword%20%3D%20%22sawdust%22%5D&search=cqp%7C%5Bword%20%3D%20%22sawdust%22%5D

- Follow link
- Download "One sentence per row (CSV)"
- **Check that it looks ok**
  - The linked sentence is always fully in the left context column
- "One token per row ..." should be disabled.

## Trend diagram

**i18n for download buttons**

https://spraakbanken.gu.se/korplabb/#?lang=eng&cqp=%5B%5D&page=0&result_tab=2&corpus=vivill&search=lemgram%7Cframtid%5C.%5C.nn%5C.1&show_stats

- Follow link
- Click "Show Trend Diagram"
- Press "Table"
- Switch language back and forth
- **Check that all texts are updated to the correct language immediately**
- Click "Export"
- **Downloaded document should contain correct data**

**Trend diagram width**

https://spraakbanken.gu.se/korplabb/#?cqp=%5B%5D&page=0&result_tab=2&lang=eng&corpus=familjeliv-adoption,familjeliv-allmanna-ekonomi,familjeliv-allmanna-familjeliv,familjeliv-allmanna-fritid,familjeliv-allmanna-hushem&search=lemgram%7Cframtid%5C.%5C.nn%5C.1&show_stats

- Follow link
- Click "Show trend diagram" then immediately switch back to statistics
- Now the trend diagram will render in the background
- Wait until the progress bar is done
- Wait some more :)
- Go back to the trend diagram tab
- **The width of the diagram should be the same as the width of the window**

## Miscellaneous

**Responsiveness**

- Do any simple search
- Resize the window some and make sure that no elements overlap
- Make sure no elements move in a particularly ugly manner

**Note**: Korp is obviously not created to be completely responsive and look good on small screens.

**Resetting Korp by clicking logo**

- Make some non-standard choices to corpora and preferably some other settings
- Do any search
- Click the Korp logo
- All settings **except** language and mode should be set back to the same value as when loading Korp

**Linking to corpus folder**

https://spraakbanken.gu.se/korplabb/#?lang=eng&corpus=fisk

- Follow link
- **Only the corpora under "Finlandssvenska texter" should be selected**

https://spraakbanken.gu.se/korplabb/#?lang=eng&corpus=socialmedia.forum

- Follow link
- **Only the corpora under "Internet forums" should be selected**

**About-view layout**

- Go to Korp
- Click the right upper MENU-button and open the About-view
- **Check that everything looks OK, no overflow errors or weird scrolls**
- Leave the modal open and refresh the page
- **The modal should open on load, and be translated correctly**

**Free order**

https://spraakbanken.gu.se/korplabb/#?cqp=%5B%5D&corpus=romi,romii&in_order=false&lang=eng&search=word%7Ckatt%20svart

- Follow link
- **Search words, "katt" and "svart" should be highlighted in the result**
- **Some hits should have the words non-adjacent ("svart ... katt")**
