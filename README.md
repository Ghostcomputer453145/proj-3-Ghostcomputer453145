# Web Development Project 3 - *Ultimate Mixed Trivia Flashcards Game!*

Submitted by: **Yumin Jang**

This web app: **is an interactive flashcard quiz game where users can pick a theme, guess answers to trivia questions, track their streaks, and mark cards as mastered. The app provides immediate feedback on guesses and allows users to shuffle cards for variety, all while displaying a custom background image for visual appeal.**

Time spent: **10** hours spent in total

## Required Features

The following **required** functionality is completed:

- [X] **The user can enter their guess into an input box *before* seeing the flipside of the card**
  - Application features a clearly labeled input box with a submit button where users can type in a guess
  - Clicking on the submit button with an **incorrect** answer shows visual feedback that it is wrong 
  -  Clicking on the submit button with a **correct** answer shows visual feedback that it is correct
- [X] **The user can navigate through an ordered list of cardss**
  - A forward/next button displayed on the card navigates to the next card in a set sequence when clicked
  - A previous/back button displayed on the card returns to the previous card in the set sequence when clicked
  - Both the next and back buttons should have some visual indication that the user is at the beginning or end of the list (for example, graying out and no longer being available to click), not allowing for wrap-around navigation

The following **optional** features are implemented:


- [X] Users can use a shuffle button to randomize the order of the cards
  - Cards should remain in the same sequence (**NOT** randomized) unless the shuffle button is clicked 
  - Cards should change to a random sequence once the shuffle button is clicked
- [X] A user’s answer may be counted as correct even when it is slightly different from the target answer
  - Answers are considered correct even if they only partially match the answer on the card 
  - Examples: ignoring uppercase/lowercase discrepancies, ignoring punctuation discrepancies, matching only for a particular part of the answer rather than the whole answer
- [X] A counter displays the user’s current and longest streak of correct responses
  - The current counter increments when a user guesses an answer correctly
  - The current counter resets to 0 when a user guesses an answer incorrectly
  - A separate counter tracks the longest streak, updating if the value of the current streak counter exceeds the value of the longest streak counter 
- [X] A user can mark a card that they have mastered and have it removed from the pool of displayed cards
  - The user can mark a card to indicate that it has been mastered
  - Mastered cards are removed from the pool of displayed cards and added to a list of mastered cards


The following **additional** features are implemented:

* [X] Added a new background with an image.
* [X] Made a mastered list of cards showing the name of those specifc cards.
* [X] Added in background images of correct and incorrect everytime the user submits a right or wrong answer.
* [X] Added in backgeound images for each theme.

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src="Flashcardwalkthrough.gif" title="Video Walkthrough" alt="Video Walkthrough" />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with ...  
Snipping tool

## Notes

Challenges encountered:
- Making sure the background image is visible
- Managing state for current streak, longest streak, and mastered cards required careful updates to avoid off-by-one errors.
- Getting the size just as I wanted it to be.
- Getting the background image size to fit the screen.
- Picking which images to use.

## License

    Copyright 2026 Yumin Jang

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
