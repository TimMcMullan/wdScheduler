

        // *** puts date at top of page ***
// displayDate = () => {
//     const rightNow = moment().format('dddd[,] MMM Do');
//   dateDisplayEl.text(rightNow);
// };

        // *** Same as above uses jQuery ***
displayDate = () => {
    $('#currentDay').text(moment().format('dddd, MMMM Do'));
};

        // *** color-codes by hour ***
whatHour = () => {
    let currentTime = moment().hours();

    $('.time-block').each(function () {
        var blockTime = parseInt($(this).attr('id').split('-')[1]);

    if (currentTime > blockTime) {
        $(this).addClass('past');
    } else if (currentTime === blockTime) {
        $(this).removeClass('past');
        $(this).addClass('present');
    } else {
        $(this).removeClass('past');
        $(this).removeClass('present');
        $(this).addClass('future');
    }
})
};

        // *** stores task to local storage ***
$(document).ready(function () {

    $('.saveBtn').on('click', function () {

        let task = $(this).siblings('.description').val();
        let time = $(this).parent().attr('id');

        localStorage.setItem(time, task);

        $('.notification').addClass('show')

        setTimeout(function() {
            $('.notification').removeClass('show');
        }, 5000);
    });


        // *** Updates tasks from local storage ***


        // *** end of document.ready function ***
});

postItems = () => {
    $('#hour-9 .description').val(localStorage.getItem('hour-9'));
    $('#hour-10 .description').val(localStorage.getItem('hour-10'));
    $('#hour-11 .description').val(localStorage.getItem('hour-11'));
    $('#hour-12 .description').val(localStorage.getItem('hour-12'));
    $('#hour-13 .description').val(localStorage.getItem('hour-13'));
    $('#hour-14 .description').val(localStorage.getItem('hour-14'));
    $('#hour-15 .description').val(localStorage.getItem('hour-15'));
    $('#hour-16 .description').val(localStorage.getItem('hour-16'));
    $('#hour-17 .description').val(localStorage.getItem('hour-17'));
    $('#hour-18 .description').val(localStorage.getItem('hour-18'));
            };

setInterval(displayDate, 1000);
setInterval(whatHour, 5000);
postItems();
