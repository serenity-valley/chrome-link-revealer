// Copyright (c) 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

function buildLinkDisplayContainer() {
  var linkDisplayContainer = document.createElement('div');
  linkDisplayContainer.setAttribute('id', 'link-display-div');
  linkDisplayContainer.setAttribute('class', 'link-display');

  return linkDisplayContainer;
}

function showLinkDestination(e) {
  var linkHrefText = document.createTextNode(e.target.href),
      linkDisplayContainer = buildLinkDisplayContainer();

  linkDisplayContainer.appendChild(linkHrefText);
  document.body.appendChild(linkDisplayContainer);
}

function hideLinkDestination(e) {
  var container = document.getElementById('link-display-div');
  container.parentNode.removeChild(container);
}

function moveLinkDisplay(e) {
  var container = document.getElementById('link-display-div');

  container.style.position = 'absolute';
  container.style.left = (e.pageX + 15) + 'px';
  container.style.top = (e.pageY + 15) + 'px';
}

function initListeners() {
  var anchors = document.getElementsByTagName('a');

  for (var i=0; i<anchors.length;i++) {
    var anchor = anchors[i];

    if (typeof anchor !== 'object' || typeof anchor.addEventListener === 'undefined') {
      continue;
    }

    anchor.addEventListener('mouseover', showLinkDestination);
    anchor.addEventListener('mouseout', hideLinkDestination);
    anchor.addEventListener('mousemove', moveLinkDisplay);
  }
}

initListeners();