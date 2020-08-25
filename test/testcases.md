# Test cases for Korp

This is a non-exhaustive list of things to test when doing changes in Korp.
 The tests are written for Språkbankens setup of Korp.

Ideally all of these would be tested automatically, but that is future work.

## Search

### Simple

**Related words**

"Related words" should appear when searching for a lemgram in simple search.

https://spraakbanken.gu.se/korplabb/#?lang=en&cqp=%5B%5D&corpus=vivill&page=0&search=lemgram%7Cframtid%5C.%5C.nn%5C.1

- Go to link
- **Check that a "Related words"-button appears on the right**
- Click the button
- **Check that the results seem reasonable**

### Extended

**Warnings when using lemgram, initial part and final part**

https://spraakbanken.gu.se/korplabb/#?cqp=%5B%5D&corpus=suc3

- Go to link
- Select "lemgram" and type something
- Do not select a lemgram and click outside the box
- **"Choose a value" should appear**
- Type an actual wordform and select a lemgram
- **"Choose a value" should disappear**
- Redo the test for *initial part* and *final part* also

### Filters

**Escaping values**

https://spraakbankengu.se/korplabb/#?lang=en&cqp=%5B%5D&corpus=aspacsv&global_filter=eyJ0ZXh0X2F1dGhvciI6WyJKLlIuUi4gVG9sa2llbiJdfQ%3D%3D&page=0&search=word%7CSmaug

- Go to link or filter on author J.R.R. Tolkien in *ASPAC svenska*
- Go to the advanced tab
- Check that in "Active CQP query in simple search" the dots in the name
  are escaped with `\`
- (or search and use developer tools to check that the CQP in the request is escaped)

**Empty values**

https://spraakbanken.gu.se/korplabb/#?lang=en&cqp=%5B%5D&corpus=spin-source&global_filter=eyJ0ZXh0X3RleHRfdHlwZXMiOlsiIl19&search=word%7Cbil&page=0

- (Search for "bil" with filter "-" in Spin)
- Should give two hits and in the advanced tab we should see: \
  `[word = "bil" & _.text_text_types = ""]`

## Results

### KWIC (keyword in context)

**Progress and preview**

- Search in simple for any fairly common word that has not been search 
  for before (to make sure that backend isn't caching the search) in 
  the default corpora in the Modern-mode
- Check that the progress bar works, it updates every time we get new results from corpora
- Check that the first page of results are shown before search is completely finished

**JSON button**

- Do a simple search in any corpus, SUC3 for example
- **JSON button should appear and link to the correct search (compare
  hits for example**
- Switch to another result tab and back
- **JSON button should still be available**

**Downloading in context view**

https://spraakbanken.gu.se/korplabb/#?lang=en&cqp=%5B%5D&corpus=vivill&search=word%7Cframtid&page=0&reading_mode

- Follow link
- Download as "One sentence per row (TSV)"
- Open in "Notepad"/Excel/LibreOffice
- **Check that there is correct data in each column**
- Redo for "One token per row with annotations (CSV)"

**Downloading when "in order" is disabled**

https://spraakbanken.gu.se/korplabb/#?lang=en&cqp=%5B%5D&corpus=vivill&page=0&in_order=false&search=word%7Cframtid%20m%C3%A4nniskor

- Follow link
- Download as "One sentence per row (TSV)"
- Open in "Notepad"/Excel/LibreOffice
- **Check that there is correct data in each column**
- Redo for "One token per row with annotations (CSV)"

Note: "One sentence per row (TSV)" does not fully support this search.
The entire row will be placed in left context, since there may be one
word or more that matches.

**Context view look**

https://spraakbanken.gu.se/korplabb/#?lang=en&cqp=%5B%5D&corpus=vivill&search=word%7Cframtid&page=0&reading_mode

- Follow link
- Check that the hits are bold, the hit sentences are black and the rest of the contexts are grey

### Word picture

**Word picture does not support filtering**

https://spraakbanken.gu.se/korplabb/#?cqp=%5B%5D&page=0&reading_mode&word_pic&corpus=aspacsv&search=lemgram%7Chund%5C.%5C.nn%5C.1

- Follow link
- **Check that a word picture is generated**
- Click "Add author" then add "Astrid Lindgren"
- Perform search
- **Check that a word picture is not genereated**

**Word picture works when statistics is disabled**

https://spraakbanken.gu.se/korplabb/#?lang=en&cqp=%5B%5D&corpus=suc3&page=0&result_tab=3&hide_stats&word_pic&search=lemgram%7Chund%5C.%5C.nn%5C.1

- Follow link
- Check that the word picture works, but statistics is turned off

### Statistics

**Download**

**It should be possible to make column sizes indefinitely bigger**

https://spraakbanken.gu.se/korplabb/#?cqp=%5B%5D&corpus=gp1994,gp2001,gp2002,gp2003,gp2004,gp2005,gp2006,gp2007,gp2008,gp2009,gp2010,gp2011,gp2012,gp2013,gp2d&search=word%7Cnyhet&page=0&result_tab=2

- Search in all GP-corpora for "nyhet" and go to statistics or follow link above
- **Check that all columns have the same size (except checkbox and pie chart)**
- **Check that resizing a corpus column to be super big works**
- **Check that resizing the value column to be super big works and also
  that it doesn't affect the corpus column sizes**

**Table should use the available space**

https://spraakbanken.gu.se/korplabb/#?cqp=[]&corpus=vivill&page=0&search=word|nyhet&result_tab=1

- Search in all "vivill" for "nyhet" or follow link above
- The point here is that the statistics table load in the background
  while the KWIC is viewed
- When the search is done, go to the statistics tab
- **Check that the table use (almost) all the available space**

**Opening an a KWIC from statistics should use the same search settings**

https://spraakbanken.gu.se/korplabb/#?cqp=%5B%5D&page=0&result_tab=2&corpus=vivill&search=word%7Cframtid

- Go to link
- Deselect "Svenska partiprogram och valmanifest" and select another
  corpus (do not search)
- Click the result row in the statistics to open a KWIC
- **Check that the result is the same as in the actual KWIC to make 
  sure that se search is still done in "Svenska partiprogram och valmanifest"**

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
- **Check that the info box (or boxes) about the mark becomes 
  permanent and not just appear on hover**

### Reading mode

### Sidebar

**Long sidebar with scroll**

https://spraakbanken.gu.se/korplabb/#?lang=sv&cqp=%5B%5D&corpus=rd-anf&search=word%7Cinkomstbortfall&reading_mode

- Follow link, we need a result view where the sidebar is very long
- (You might have to make your browser window smaller for this one)
- Select a word in the KWIC so that sidebar appears
- Scroll down, when the sidebar hits the top of the window, a scrollbar should appear
- **Check that it is possible to view all info in the sidebar, dependency
  graph should be at the bottom**

**Dependency graph**

https://spraakbanken.gu.se/korplabb/#?cqp=%5B%5D&corpus=vivill&search=lemgram%7Cframtid%5C.%5C.nn%5C.1&page=0&lang=en

- Follow link
- If sidebar does not show, click a word
- Click "Show Dependency Tree" in the sidebar
- **Check that the dependency tree pops up and looks ok** (might
  take a second)

#### 

## Comparison

**Use context from the correct corpora**

- Select "Svenska partiprogram och valmanifest"
- Save a simple search on "jämlikhet" as a lemgram
- Save a simple search on "frihet" as a lemgram
- Change corpus to "August Strindbergs samlade verk"
- Go to comparision tab and execute the comparison on jämlikhet
  and frihet
- Click on any row in the result
- Click on "Show context"
- **Check that this works. Each result row should consist of five 
  sentences.**

## Authentication

**Links to restricted corpora**

- Login
- Search in simple
- Select a non-default "compile based on"-attribute
- Turn on word picture
- Perform search
- Switch to another page
- Copy link and then log out
- Open link in a new tab
- Login prompt should appear - login
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

## Miscellaneous

**Responsiveness**

- Do any simple search
- Resize the window some and make sure that no elements overlap
- Make sure no elements move in a particularly ugly manner

**Note**: Korp is obviously not created to be completely responsive and look good on small screens.

**Parallel searches on non-default language**

https://spraakbanken.gu.se/korplabb/?mode=parallel#?stats_reduce=word&parallel_corpora=eng&cqp_swe=%5B%5D&cqp_null=%5B%5D&corpus=aspacsven-sv&cqp_eng=%5Bword%20%3D%20%22sawdust%22%5D&search=cqp%7C%5Bword%20%3D%20%22sawdust%22%5D

- Follow link, do not search manually
- **Check that Korp searches for "sawdust" in English**

**Parallel search KWIC alignment**

https://spraakbanken.gu.se/korplabb/?mode=parallel#?lang=sv&parallel_corpora=swe&cqp_null=%5Bword%20%3D%20%22%C3%A4r%22%5D&cqp_dan=%5B%5D&cqp_swe=%5Bword%20%3D%20%22Mexiko%22%5D&corpus=europarl-fi&cqp=%5Bprefix%20contains%20%22l%C3%A4%5C.%5C.nn%5C.1%22%5D&search=cqp%7C%5Bword%20%3D%20%22Mexiko%22%5D

- Follow link (important that the search result is a short sentence first and longer sentences later in the KWIC)
- **For each row, check that linked sentence starts at around the same place as the hit sentence**

**Parallel search dependency highlighting**

https://spraakbanken.gu.se/korplabb/?mode=parallel#?stats_reduce=word&parallel_corpora=eng&cqp_swe=%5B%5D&cqp_null=%5B%5D&corpus=aspacsven-sv&cqp_eng=%5Bword%20%3D%20%22sawdust%22%5D&search=cqp%7C%5Bword%20%3D%20%22sawdust%22%5D

https://spraakbanken.gu.se/korplabb/?mode=parallel#?parallel_corpora=swe&cqp_swe=%5Bword%20%5E%3D%20%22s%C3%A5gsp%C3%A5n%22%5D&cqp_null=%5B%5D&corpus=aspacsven-sv&cqp_eng=%5Bword%20%3D%20%22sawdust%22%5D&page=0&search=cqp%7C%5Bword%20%3D%20%22s%C3%A5gsp%C3%A5n.*%22%5D

- Open both links
- Click on sågspån in every occurence on the two pages (six in total)
- Compare dependency highlighting on the sentences that are the same
- **Should be the same no matter if the search was in English or Swedish**

**KWIC download in parallel mode**

https://spraakbanken.gu.se/korplabb/?mode=parallel#?stats_reduce=word&parallel_corpora=eng&cqp_swe=%5B%5D&cqp_null=%5B%5D&corpus=aspacsven-sv&cqp_eng=%5Bword%20%3D%20%22sawdust%22%5D&search=cqp%7C%5Bword%20%3D%20%22sawdust%22%5D

- Follow link
- Download "One senence per row (CSV)"
- **Check that it looks ok**

**Resetting Korp by clicking logo**

- Make some non-standard choices to corpora and preferably some other settings
- Do any search
- Click the Korp logo
- All settings **except** language and mode should be set back to the same value as when loading Korp

**Linking to corpus folder**

https://spraakbanken.gu.se/korplabb/#?lang=en&corpus=fisk

- Follow link
- **Only the corpora under "Finlandssvenska texter" should be selected**
