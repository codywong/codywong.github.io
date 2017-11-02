/*
 * jQuery v1.9.1 included
 */

$(document).ready(function() {

// rearrange order of fields on contact form
var accSet = $('input#request_custom_fields_30590838').parent();
var bankCard = $('input#request_custom_fields_30508418').parent();
var bankDisp = $('input#request_custom_fields_80160307').parent();
var bankTrans = $('input#request_custom_fields_30545777').parent();
var cc = $('input#request_collaborators_').parent();
var descIssue = $('input#request_custom_fields_30225038').parent();
var description = $('textarea#request_description').parent();
var email = $('input#request_anonymous_requester_email').parent();
var howHelp = $('input#request_custom_fields_30246667').parent();
var intendedRecip = $('input#request_custom_fields_80497708').parent();
var itemDiffers = $('textarea#request_custom_fields_80161647').parent();
var name = $('input#request_custom_fields_79828207').parent();
var oldPhone = $('input#request_custom_fields_80158427').parent();
var other = $('input#request_custom_fields_30634578').parent();
var payReq = $('input#request_custom_fields_30225418').parent();
var payAmount = $('input#request_custom_fields_80165107').parent();
var phone = $('input#request_custom_fields_80224908').parent();
var purchVen = $('input#request_custom_fields_30616507').parent();
var security = $('input#request_custom_fields_30590398').parent();
var signIn = $('input#request_custom_fields_30586378').parent();
var subject = $('input#request_subject').parent();
var whatHelp = $('input#request_custom_fields_30635918').parent();
accSet.insertAfter(descIssue);
bankCard.insertAfter(descIssue);
bankTrans.insertAfter(descIssue);
cc.insertAfter(phone);
descIssue.insertAfter(howHelp);
email.insertAfter(phone);
other.insertAfter(descIssue);
payReq.insertAfter(descIssue);
phone.insertAfter(name);
purchVen.insertAfter(descIssue);
security.insertAfter(descIssue);
signIn.insertAfter(descIssue);
subject.insertAfter(email)
subject.insertAfter(cc);
howHelp.insertAfter(subject);
whatHelp.insertAfter(howHelp);
description.insertAfter(other);
description.insertAfter(oldPhone);
description.insertAfter(intendedRecip);
description.insertAfter(bankDisp);
description.insertAfter(itemDiffers);
description.insertAfter(payAmount);
$('.suggestion-list').insertAfter(subject);
  
// change text of "email" field on contact form
var email = document.querySelector('label[for="request_anonymous_requester_email"]');
email.textContent = 'Email address on file with Venmo';
  
// change text of "description"
var descText = document.querySelector('label[for="request_description"]');
descText.textContent = 'Tell us what’s up';
 
// change text of "routing number" field
var routText = document.querySelector('label[for="request_custom_fields_80914307"]');
routText.innerHTML = "The full <a href='https://help.venmo.com/hc/en-us/articles/209690058'  target='_blank'>routing number</a> for a bank, or, if providing a card, the first 6 digits of the card number";
  
// add acticle links for 'Signing In'
var signIn = document.getElementById("request_custom_fields_30586378");
signIn.onchange = function() {
  if (signIn.value === "code_to_login"){
  var newText = $(".request_custom_fields_30586378 p").text("").append("<div class='alert alert-warning'>Read our article about <a href='https://help.venmo.com/hc/en-us/articles/210414067' target='_blank'>login issues</a>.</div>");
  }
  else
  if (signIn.value === "forgot_my_password"){
  var newText = $(".request_custom_fields_30586378 p").text("").append("<div class='alert alert-warning'>Read our article on how to <a href='https://help.venmo.com/hc/en-us/articles/210413997' target='_blank'>reset your password</a>.</div>");
  }
  else
  var newText = $(".request_custom_fields_30586378 p").text("Choose the issue that best fits your problem");
}

// add acticle links for 'Payments and Requests'
var payReq = document.getElementById("request_custom_fields_30225418");
payReq.onchange = function() {
  if (payReq.value === "unknown_payer"){
  var newText = $(".request_custom_fields_30225418 p").text("").append("<div class='alert alert-warning'>Read our article on how to <a href='https://help.venmo.com/hc/en-us/articles/235170748' target='_blank'>send the payment back to the sender</a>.</div>");
  }
  else
  if (payReq.value === "sent_money_new_user"){
  var newText = $(".request_custom_fields_30225418 p").text("").append("<div class='alert alert-warning'>Read our article on how to <a href='https://help.venmo.com/hc/en-us/articles/217532047' target='_blank'>take back your payment</a>.</div>");
  }
  else
  if (payReq.value === "payment_limits"){
  var newText = $(".request_custom_fields_30225418 p").text("").append("<div class='alert alert-warning'>Read our article on <a href='https://help.venmo.com/hc/en-us/articles/221010968' target='_blank'>payment limits</a>.</div>");
  }
  else
  var newText = $(".request_custom_fields_30225418 p").text("Choose the issue that best fits your problem");
}

// add acticle links for 'Bank Accounts and Cards'
var bankCard = document.getElementById("request_custom_fields_30508418");
bankCard.onchange = function() {
  if (bankCard.value === "adding_deleting_bank_account_card"){
  var newText = $(".request_custom_fields_30508418 p").text("").append("<div class='alert alert-warning'>Read our articles on how to <a href='https://help.venmo.com/hc/en-us/articles/210413677' target='_blank'>add a card</a> or <a href='https://help.venmo.com/hc/en-us/articles/209690058' target='_blank'>bank account</a>.</div>");
  }
  else
  if (bankCard.value === "bank_account_verification"){
  var newText = $(".request_custom_fields_30508418 p").text("").append("<div class='alert alert-warning'>Read our article on how to <a href='https://help.venmo.com/hc/en-us/articles/221073067' target='_blank'>verify your bank account</a>.</div>");
  }
  else
  if (bankCard.value === "bank_account_failed"){
  var newText = $(".request_custom_fields_30508418 p").text("").append("<div class='alert alert-warning'>Read our article on what to do if your <a href='https://help.venmo.com/hc/en-us/articles/217042668' target='_blank'>bank account has failed in the past</a>.</div>");
  }
  else
  if (bankCard.value === "account_card_on_file"){
  var newText = $(".request_custom_fields_30508418 p").text("").append("<div class='alert alert-warning'>Read our article on what to do if your <a href='https://help.venmo.com/hc/en-us/articles/217042698' target='_blank'>bank account or card is already on file</a>.</div>");
  }
  else
  if (bankCard.value === "credit_card_fees"){
  var newText = $(".request_custom_fields_30508418 p").text("").append("<div class='alert alert-warning'>Read our article on <a href='https://help.venmo.com/hc/en-us/articles/224361007' target='_blank'>credit card fees</a>.</div>");
  }
  else
  var newText = $(".request_custom_fields_30508418 p").text("Choose the issue that best fits your problem");
}

// add acticle links for 'Account Settings'
var accSett = document.getElementById("request_custom_fields_30590838");
accSett.onchange = function() {
  if (accSett.value === "account_frozen"){
  var newText = $(".request_custom_fields_30590838 p").text("").append("<div class='alert alert-warning'>Read our article for more information on <a href='https://help.venmo.com/hc/en-us/articles/210413707' target='_blank'>frozen accounts</a>.</div>");
  }
  else
  if (accSett.value === "new_email__phone"){
  var newText = $(".request_custom_fields_30590838 p").text("").append("<div class='alert alert-warning'>Read our article on how to <a href='https://help.venmo.com/hc/en-us/articles/217532247' target='_blank'>edit your account settings</a>.</div>");
  }
  else
  var newText = $(".request_custom_fields_30590838 p").text("Choose the issue that best fits your problem");
}

// add acticle links for 'Bank Transfers'
var bankTrans = document.getElementById("request_custom_fields_30545777");
bankTrans.onchange = function() {
  if (bankTrans.value === "wrong_account_transfer"){
  var newText = $(".request_custom_fields_30545777 p").text("").append("<div class='alert alert-warning'>Read our article about <a href='https://help.venmo.com/hc/en-us/articles/217042668' target='_blank'>bank account validity</a>.</div>");
  }
  else
  var newText = $(".request_custom_fields_30545777 p").text("Choose the issue that best fits your problem");
}

// add acticle links for 'Purchasing with Venmo'
var purchVenmo = document.getElementById("request_custom_fields_30616507");
purchVenmo.onchange = function() {
  if (purchVenmo.value === "shopping_question"){
  var newText = $(".request_custom_fields_30616507 p").text("").append("<div class='alert alert-warning'>Read all about <a href='https://help.venmo.com/hc/en-us/sections/203918628' target='_blank'>purchasing with Venmo</a> in our help articles.</div>");
  }
  else
  var newText = $(".request_custom_fields_30616507 p").text("Choose the issue that best fits your problem");
}

// add acticle links for 'Security'
var secur = document.getElementById("request_custom_fields_30590398");
secur.onchange = function() {
  if (secur.value === "lost_phone"){
  var newText = $(".request_custom_fields_30590398 p").text("").append("<div class='alert alert-warning'>Read about what to do if you have a <a href='https://help.venmo.com/hc/en-us/articles/217042758' target='_blank'>lost or stolen phone</a>.</div>");
  }
  else
  var newText = $(".request_custom_fields_30590398 p").text("Choose the issue that best fits your problem");
}
  
  // social share popups
  $(".share a").click(function(e) {
    e.preventDefault();
    window.open(this.href, "", "height = 500, width = 500");
  });

  // show form controls when the textarea receives focus or backbutton is used and value exists
  var $commentContainerTextarea = $(".comment-container textarea"),
  $commentContainerFormControls = $(".comment-form-controls, .comment-ccs");

  $commentContainerTextarea.one("focus", function() {
    $commentContainerFormControls.show();
  });

  if ($commentContainerTextarea.val() !== "") {
    $commentContainerFormControls.show();
  }

  // Expand Request comment form when Add to conversation is clicked
  var $showRequestCommentContainerTrigger = $(".request-container .comment-container .comment-show-container"),
    $requestCommentFields = $(".request-container .comment-container .comment-fields"),
    $requestCommentSubmit = $(".request-container .comment-container .request-submit-comment");

  $showRequestCommentContainerTrigger.on("click", function() {
    $showRequestCommentContainerTrigger.hide();
    $requestCommentFields.show();
    $requestCommentSubmit.show();
    $commentContainerTextarea.focus();
  });

  // Mark as solved button
  var $requestMarkAsSolvedButton = $(".request-container .mark-as-solved:not([data-disabled])"),
    $requestMarkAsSolvedCheckbox = $(".request-container .comment-container input[type=checkbox]"),
    $requestCommentSubmitButton = $(".request-container .comment-container input[type=submit]");

  $requestMarkAsSolvedButton.on("click", function () {
    $requestMarkAsSolvedCheckbox.attr("checked", true);
    $requestCommentSubmitButton.prop("disabled", true);
    $(this).attr("data-disabled", true).closest("form").submit();
  });

  // Change Mark as solved text according to whether comment is filled
  var $requestCommentTextarea = $(".request-container .comment-container textarea");

  $requestCommentTextarea.on("keyup", function() {
    if ($requestCommentTextarea.val() !== "") {
      $requestMarkAsSolvedButton.text($requestMarkAsSolvedButton.data("solve-and-submit-translation"));
      $requestCommentSubmitButton.prop("disabled", false);
    } else {
      $requestMarkAsSolvedButton.text($requestMarkAsSolvedButton.data("solve-translation"));
      $requestCommentSubmitButton.prop("disabled", true);
    }
  });

  // Disable submit button if textarea is empty
  if ($requestCommentTextarea.val() === "") {
    $requestCommentSubmitButton.prop("disabled", true);
  }

  // Submit requests filter form in the request list page
  $("#request-status-select, #request-organization-select")
    .on("change", function() {
      search();
    });

  // Submit requests filter form in the request list page
  $("#quick-search").on("keypress", function(e) {
    if (e.which === 13) {
      search();
    }
  });

  function search() {
    window.location.search = $.param({
      query: $("#quick-search").val(),
      status: $("#request-status-select").val(),
      organization_id: $("#request-organization-select").val()
    });
  }

  $(".header .icon-menu").on("click", function(e) {
    e.stopPropagation();
    var menu = document.getElementById("user-nav");
    var isExpanded = menu.getAttribute("aria-expanded") === "true";
    menu.setAttribute("aria-expanded", !isExpanded);
  });

  if ($("#user-nav").children().length === 0) {
    $(".header .icon-menu").hide();
  }

  // Submit organization form in the request page
  $("#request-organization select").on("change", function() {
    this.form.submit();
  });

  // Toggles expanded aria to collapsible elements
  $(".collapsible-nav, .collapsible-sidebar").on("click", function(e) {
    e.stopPropagation();
    var isExpanded = this.getAttribute("aria-expanded") === "true";
    this.setAttribute("aria-expanded", !isExpanded);
  });
});
