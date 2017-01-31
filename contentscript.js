// Copyright (c) 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

function showLinkDestination(elem) {
  //Built dom element w/ style
  var linkDisplayContainer = document.createElement('div');
  linkDisplayContainer.setAttribute('id', 'link-display-div');
  linkDisplayContainer.setAttribute('class', 'link-display');

  var linkHrefText = document.createTextNode(elem.attr('href'));

  linkDisplayContainer.appendChild(linkHrefText);

  document.body.appendChild(linkDisplayContainer);
}

function hideLinkDestination(elem) {
  $('#link-display-div').remove();
}

$("a").hover(
  function(e) {
    console.log("mouse in");
    showLinkDestination($(this));
  },
  function(e) {
    console.log("mouse OUT");
    hideLinkDestination($(this));
  }
);

$(document).on('mousemove', function(e){
    $('#link-display-div').css({
       position: 'absolute',
       left:  e.pageX + 15,
       top:   e.pageY + 15
    });
});