



$(function() {
  
  function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
  }

  // copy coupone code to clipboard
  $(".coupon-btn").click( function() {
    copyToClipboard("#coupon-field");
    $(".coupon-alert").fadeIn("slow");
  });
});