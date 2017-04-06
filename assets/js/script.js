$(document).ready(function () {
  $('.thumb').on('mouseover', function () {
    $(this).find('.getLinkButton').fadeIn(100);
    $(this).addClass('thumb-active');
    $(this).find('.twoButtons').fadeIn(300);
  });
  $('.thumb').on('mouseleave', function () {
    $(this).find('.getLinkButton').fadeOut();
    $(this).removeClass('thumb-active');
    $(this).find('.twoButtons').fadeOut();
  });
  $('.heartButton').on('click', function () {
    if ($(this).hasClass('fa-heart')) {
      $(this).removeClass('fa-heart');
      $(this).addClass('fa-heart-o');
    } else {
      $(this).removeClass('fa-heart-o');
      $(this).addClass('fa-heart');
    }
  });
  $('.wrapper').on('mouseenter', function () {
    $(this).addClass('wrapper-active');
    $(this).find('.queueBtn').fadeIn();
    $(this).find('.icon').addClass('icon-overlay');
  });
  $('.wrapper').on('mouseleave', function () {
    $(this).removeClass('wrapper-active');
    $(this).find('.queueBtn').fadeOut();
    $(this).find('.icon').removeClass('icon-overlay');
  });
  $('.button-menu-mobile').on('click', function () {
    //alert('llll');
    $('.contents').toggleClass('content-short');
    $('.wrapper').toggleClass('wrapper-short');
  });
  $('.minQueue').on('click', function () {
    $(this).closest('.queuePannel').slideUp();
    $('.usage-details').slideDown();
    $('#openQueue').delay(1000).fadeIn();
    //alert('llllll');
  });
  $('#openQueue').on('click', function () {
    $(this).hide();
    $('.usage-details').slideUp();
    $('.queuePannel').slideDown();
  });
  $('.dateTime').on('mouseenter', function () {
    //alert('llllllll');
    $(this).find('.dateTimeValue').text('To Be Scheduled');
    $(this).siblings('.customTime').fadeIn(1000);
    $(this).siblings('.postbtn').hide();
    $(this).siblings('.deselect').hide();
  });
  $('.myfeed-campaigns').on('mouseenter', '.gal-detail', function () {
    //alert('llllll');
    $(this).addClass('bx-shadow');
    $(this).find('.threeButtons').fadeIn();
    //$(this).css('position', 'absolute');
  })
  $('.myfeed-campaigns').on('mouseleave', '.gal-detail', function () {
    //alert('llllll');
    $(this).removeClass('bx-shadow');
    $(this).find('.threeButtons').fadeOut();
    //$(this).css('position', 'relative');
  })

  //    $('.tagsinput').tagsInput({
  //      width: 'auto',
  //      height: 45
  //    });
  $("#dropdownMenu7").on('click', function () {
    $('.advertiserDropdownMenu').slideToggle();
  })
  $('.rankone').on('click', function () {
    $(this).text(function (i, text) {
      return text === "Overall" ? "My Rank" : "Overall";
    })
  });
  $('.articleShort').on('click', '.crossButton', function () {
    var deletCard = confirm('confirm delet card?');
    if (deletCard) {
      $(this).closest(".col-lg-6").remove();
    } else {
      return;
    }

  });
});
