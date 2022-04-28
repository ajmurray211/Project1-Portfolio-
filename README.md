# Project Overview

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description | Incomplete
|Day 1| Wireframes / Priority Matrix / Timeline | Incomplete
|Day 3| Core Application Structure (HTML, CSS, etc.) | Incomplete
|Day 4| MVP & Bug Fixes | Incomplete
|Day 5| Final Touches | Incomplete
|Day 6| Present | Incomplete


## Project Description

This project is a portfolio website highlighting my coding ability and projects comlpeted. This project is intended to have a responsive design changing styles with resizing of the screen and user interaction. Built with a mobile first design and then progressing to the desktop view. In order to do that I will be using HTML, JavaScript, CSS and jQuery and bootstrap.

## Wireframes

- [Mobile](https://i.imgur.com/VOKUGYd.jpg)
- [Desktop](https://imgur.com/a/80I6doV)

## Time/Priority Matrix 

[Link](https://imgur.com/a/Kt7nMAo)


### MVP
- Layout & structure
- Hamburger Nav
- Links 

### PostMVP
- Tile effects for scroll
- Dynamic background on nav and page

#### MVP
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | 
| Layout & structure   | H | 6hrs | 8hrs |
| Hamburger Nav        | H | 4hrs | 4hrs |
| Links                | H | 1hr  | 1.5hrs |
| Email form           | H | 2hrs | 0 |
| Total                |   | 13hrs| 13.5 hrs|

#### PostMVP
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | 
| Page styling            | M | 4hrs   | 7hrs |
| bootstrap styling       | M | 2hrs   | .5hrs |
| Simple Nav              | M | 2hrs   | 1hrs |
| Tile slide effects      | L | 1.5hrs | 0 |
| Tile hover effects      | L | 1.5hrs | 0 |
| Nav dynamic background  | L | 3hrs   | 2hrs |
| Page dynamic background | L | 3hrs   | 0 |
| tile styles             | L | 2hrs   | 2hrs |
| Total                   |   | 19hrs  | 12.5hrs |


## Additional Libraries
- [bootstrap] (https://getbootstrap.com/)

## Code Snippet

This code is what I used to make my carousel buttons work. I cycle the variable i from 0 to 2 when I want to move right. Then when I want to move the tiles left I cycle my number from zero to -2. Once I reach the limit I set the value of i back to 0. I use this variable to cycle classes that I add and remove arranging the order of my tiles with flex box.

let i = 0;

    const iShift = (arr) => {
        if (arr === 'up') {
            if (i >= -1 && i <= 1) { i++ }
            else { i = 0 }
        } else if (arr === 'down') {
            if (i >= -1 || i >= 1) { i-- }
            else { i = 0 }
        } return i
    }

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

