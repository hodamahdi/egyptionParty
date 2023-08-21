//nav
$('.nav-btn,#Btn').click(function () {
    $('.nav-items').animate({ 'opacity': '1' })
    $('nav').animate({ 'width': '25%' })
    $('#Btn').animate({ 'left': '110%' })
    $('#Btn,.nav-btn').addClass('remove')
    
   
    
})

$('.close-Btn').click(function () {
    $('.nav-items').animate({ 'opacity': '0' })
    $('nav').animate({ 'width': '0' })
    $('#Btn,.nav-btn').removeClass('remove')
})
    
//section two
$('#Duration h2').click(function(){
    $('.inner').not($(this).next()).slideUp(500);
    $(this).next().slideToggle(500);
});

//counters
let countDownDate = new Date('Dec 31 ,2030 23:59:59').getTime();
// console.log(countDownDate)
let counter = setInterval(() => {
    let dateNow = new Date().getTime();
    let dateDiff = countDownDate - dateNow;
    let days = Math.floor(dateDiff / (1000 *60 * 60 * 24));
    let hours =Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 *60 *60));
    let mints =Math.floor((dateDiff % (1000 * 60 * 60 ) )/ (1000 * 60));
    let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);
    document.querySelector('.days').innerHTML = days +' '+"D";
    document.querySelector('.hours').innerHTML = hours  <10 ?`0${hours}h`: hours+' '+'h'
    document.querySelector('.min').innerHTML = mints  <10 ?`0${mints}s`: mints +' '+'m'
    document.querySelector('.sec').innerHTML = seconds < 10 ? `0${seconds}s` : seconds + ' ' + 's'
    if (days == 0) {
        $('.message').fadeIn('500')
    }

    // console.log(days)
    // console.log(hours)
    // console.log(mints)
    // console.log(seconds)
}, 1000);


// typing message
$(function () {
    var maxText = $('textarea').attr('maxLength');
    $('textarea').keyup(function () {
        let textLength = $(this).val().length;
        $('.count').html(maxText -textLength)
        // console.log(textLength)
    })
    // console.log(maxText)
    
})


// nav scrolling
$("a[href^='#']").click(function (e) {
    let aHref = e.target.getAttribute('href');
    let secOffset = $(aHref).offset().top;
    $('html ,body').animate({scrollTop : secOffset},500)
    
})

//upBtn
let sectionOffset = $('#Duration').offset().top;
$(window).scroll(function () {
    let wScroll =$(window).scrollTop()
    if (wScroll > sectionOffset -500 ) {
       $('#upBtn').fadeIn('500')
    }
    else {
        $('#upBtn').fadeOut()
    }
})
$('#upBtn').click(function () {
    $(window).scrollTop(0)
})