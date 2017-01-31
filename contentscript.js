// Copyright (c) 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

function buildLinkDisplayContainer() {
  var linkDisplayContainer = document.createElement('div');
  linkDisplayContainer.setAttribute('id', 'link-display-div');
  linkDisplayContainer.setAttribute('class', 'link-display');

  return linkDisplayContainer;
}

function showLinkDestination(elem) {
  var linkHrefText = document.createTextNode(elem.attr('href')),
      linkDisplayContainer = buildLinkDisplayContainer();

  linkDisplayContainer.appendChild(linkHrefText);
  document.body.appendChild(linkDisplayContainer);
}

function hideLinkDestination(elem) {
  $('#link-display-div').remove();
}

function initListeners() {
  $('a').hover(
    function(e) {
      showLinkDestination($(this));
    },
    function(e) {
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
}

initListeners();