/**
 * This file is part of the "zui" project
 *   Copyright (c) 2016, zScale Technologies GmbH - All rights reserved.
 *
 * Authors:
 *   Laura Schlimmer <laura@zscale.io>
 *   Paul Asmuth <paul@zscale.io>
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 *     * Redistributions of source code must retain the above copyright
 *       notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above copyright
 *       notice, this list of conditions and the following disclaimer in the
 *       documentation and/or other materials provided with the distribution.
 *     * Neither the name of the zScale Technologies GmbH nor the
 *       names of its contributors may be used to endorse or promote products
 *       derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL ZSCALE TECHNOLOGIES GMBH BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
window.zURLUtil = (window.zURLUtil || {});

zURLUtil.getPathAndQuery = function(url) {
  var a = document.createElement('a');
  a.href = url;

  var path = a.pathname;
  if (a.search) {
    path += "?";
    path += a.search;
  }

  return path;
}

zURLUtil.splitFilepath = function(path) {
  var parts = [];

  if (!path.endsWith("/")) {
    path += "/";
  }

  var pos = 0;
  if (path.startsWith("/")) {
    pos++;
  }

  for (var i = pos; i < path.length; ++i) {
    if (path.charAt(i) == '/' && (i < 1 || path.charAt(i - 1) != '\\')) {
      parts.push(path
          .substring(pos, i)
          .replace(/\\\//g, "/")
          .replace(/\\\\/g, "\\"));
      pos = i + 1;
    }
  }

  return parts;
}

zURLUtil.buildQueryString = function(params) {
  var qs = [];

  for (var key in params) {
    var value = params[key];
    qs.push(encodeURIComponent(key) + "=" + encodeURIComponent(value));
  }

  return qs.join("&");
};

zURLUtil.getParamValue = function(url, key) {
  var a = document.createElement('a');
  a.href = url;

  var query_string = a.search.substr(1);
  var key = encodeURIComponent(key) + "=";
  var params = query_string.split("&");
  for (var i = 0; i < params.length; i++) {
    if (params[i].lastIndexOf(key, 0) > -1) {
      return decodeURIComponent(params[i].substr(key.length));
    }
  }

  return null;
};
