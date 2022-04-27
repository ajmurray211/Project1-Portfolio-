$(document).ready(function () {
    let i = 0;
    $("#workLeft").on('click', () => {
        // console.log('work left')
        // call shift function with the parametors of works and -1
        shiftTiles('works', 'left', iShift('down'))
    })
    $("#workRight").on('click', () => {
        // console.log('work right')
        // call shift function with the parametors of works and 1
        shiftTiles('works', 'right', iShift('up'))
    })
    $("#projLeft").on('click', () => {
        // console.log('projects left')
        // call shift function with the parametors of proj and -1

        shiftTiles('projects', 'left', iShift('up'))
    })
    $("#projRight").on('click', () => {
        // console.log('projects right')
        // call shift function with the parametors of proj and 1
        shiftTiles('projects', 'right', iShift('down'))
    })

    // this function will cycle i from -2 to 2
    const iShift = (arr) => {
        if (arr === 'up') {
            if (i >= -1 && i <= 1) {
                i++
                console.log(i)
            } else {
                i = 0
            }
        } else if (arr === 'down') {
            if (i >= -1 || i >= 2) {
                i--
                console.log(i)
            }
            else {
                i = 0
            }
        } return i
    }


    // this function will shift the tile location based on the (arr, direction and i value)
    const shiftTiles = (what, direction, i) => {
        if (what === 'works') {
            if (i === -2) {
                $("#work1").addClass('right').removeClass('center').removeClass('left')
                $("#work2").addClass('center').removeClass('left').removeClass('right')
                $("#work3").addClass('left').removeClass('right').removeClass('center')
            } else if (i === -1) {
                $("#work2").addClass('right').removeClass('center').removeClass('left')
                $("#work3").addClass('center').removeClass('left').removeClass('right')
                $("#work1").addClass('left').removeClass('right').removeClass('center')
            } else if (i === 0) {
                $("#work3").addClass('right').removeClass('center').removeClass('left')
                $("#work1").addClass('center').removeClass('left').removeClass('right')
                $("#work2").addClass('left').removeClass('right').removeClass('center')
            } else if (i === 1) {
                $("#work1").addClass('right').removeClass('center').removeClass('left')
                $("#work2").addClass('center').removeClass('left').removeClass('right')
                $("#work3").addClass('left').removeClass('right').removeClass('center')
            } else if (i === 2) {
                $("#work2").addClass('right').removeClass('center').removeClass('left')
                $("#work3").addClass('center').removeClass('left').removeClass('right')
                $("#work1").addClass('left').removeClass('right').removeClass('center')
            }
        }
        else {
            if (i === -2) {
                $("#proj1").addClass('right').removeClass('center').removeClass('left')
                $("#proj2").addClass('center').removeClass('left').removeClass('right')
                $("#proj3").addClass('left').removeClass('right').removeClass('center')
            } else if (i === -1) {
                $("#proj2").addClass('right').removeClass('center').removeClass('left')
                $("#proj3").addClass('center').removeClass('left').removeClass('right')
                $("#proj1").addClass('left').removeClass('right').removeClass('center')
            } else if (i === 0) {
                $("#proj3").addClass('right').removeClass('center').removeClass('left')
                $("#proj1").addClass('center').removeClass('left').removeClass('right')
                $("#proj2").addClass('left').removeClass('right').removeClass('center')
            } else if (i === 1) {
                $("#proj1").addClass('right').removeClass('center').removeClass('left')
                $("#proj2").addClass('center').removeClass('left').removeClass('right')
                $("#proj3").addClass('left').removeClass('right').removeClass('center')
            } else if (i === 2) {
                $("#proj2").addClass('right').removeClass('center').removeClass('left')
                $("#proj3").addClass('center').removeClass('left').removeClass('right')
                $("#proj1").addClass('left').removeClass('right').removeClass('center')
            }
        }
    }
})

