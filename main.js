$(document).ready(function () {

    let i = 0;

    // this checks to the window size onload and assigns the propper css to the nav
    if ($(window).width() >= 768) {
        $('#nav-bar li').removeClass('hidden')
        $('#nav-bar').addClass('panel').removeClass('start')
    } else {
        $('#nav-bar li').addClass('hidden')
        $('#nav-bar').removeClass('panel').addClass('start')
    }

    // Hamburger collapsable button
    $('#ham').on('click', (event) => {
        $('#nav-bar li').toggleClass('hidden')
        $('#nav-bar').toggleClass('start').toggleClass('panel')
        $('#ham').toggleClass('ham-position')
    })

    // removes hidden class based on screen size
    $(window).resize(() => {
        if ($(window).width() >= 768) {
            $('#nav-bar li').removeClass('hidden')
            $('#nav-bar').addClass('panel').removeClass('start')
        } else {
            $('#nav-bar li').addClass('hidden')
            $('#nav-bar').removeClass('panel').addClass('start')
        }
    })

    // These are the listeners for the carousel buttons   
    $("#workLeft").on('click', () => {
        // call shift function
        shiftTiles('work', 'left', iShift('down'))
    })
    $("#workRight").on('click', () => {
        // call shift function
        shiftTiles('work', 'right', iShift('up'))
    })
    $("#projLeft").on('click', () => {
        // call shift function 
        shiftTiles('proj', 'left', iShift('up'))
    })
    $("#projRight").on('click', () => {
        // call shift function
        shiftTiles('proj', 'right', iShift('down'))
    })

    // this function will cycle i from -2 to 2
    const iShift = (arr) => {
        if (arr === 'up') {
            if (i >= -1 && i <= 1) { i++ }
            else { i = 0 }
        } else if (arr === 'down') {
            if (i >= -1 || i >= 2) { i-- }
            else { i = 0 }
        } return i
    }

    // this function will shift the tile location based on the (arr, direction and i value)
    const shiftTiles = (what, direction, i) => {
        if (i === -2) {
            $(`#${what}1`).addClass('right').removeClass('center').removeClass('left')
            $(`#${what}2`).addClass('center').removeClass('left').removeClass('right')
            $(`#${what}3`).addClass('left').removeClass('right').removeClass('center')
        } else if (i === -1) {
            $(`#${what}2`).addClass('right').removeClass('center').removeClass('left')
            $(`#${what}3`).addClass('center').removeClass('left').removeClass('right')
            $(`#${what}1`).addClass('left').removeClass('right').removeClass('center')
        } else if (i === 0) {
            $(`#${what}3`).addClass('right').removeClass('center').removeClass('left')
            $(`#${what}1`).addClass('center').removeClass('left').removeClass('right')
            $(`#${what}2`).addClass('left').removeClass('right').removeClass('center')
        } else if (i === 1) {
            $(`#${what}1`).addClass('right').removeClass('center').removeClass('left')
            $(`#${what}2`).addClass('center').removeClass('left').removeClass('right')
            $(`#${what}3`).addClass('left').removeClass('right').removeClass('center')
        } else if (i === 2) {
            $(`#${what}2`).addClass('right').removeClass('center').removeClass('left')
            $(`#${what}3`).addClass('center').removeClass('left').removeClass('right')
            $(`#${what}1`).addClass('left').removeClass('right').removeClass('center')
        }
    }
})