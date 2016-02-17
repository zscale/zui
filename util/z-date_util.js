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

zDateUtil = this.zDateUtil || {};

zDateUtil.kSecondsPerMinute = 60;
zDateUtil.kSecondsPerHour = 3600;
zDateUtil.kSecondsPerDay = 86400;
zDateUtil.kMillisPerSecond = 1000;
zDateUtil.kMillisPerMinute = zDateUtil.kMillisPerSecond * zDateUtil.kSecondsPerMinute;
zDateUtil.kMillisPerHour = zDateUtil.kSecondsPerHour * zDateUtil.kMillisPerSecond;
zDateUtil.kMillisPerDay = zDateUtil.kSecondsPerDay * zDateUtil.kMillisPerSecond;
zDateUtil.kMillisPerWeek = zDateUtil.kMillisPerDay * 7;
zDateUtil.kMicrosPerMilli = 1000;
zDateUtil.kMicrosPerSecond = 1000000;
zDateUtil.kMicrosPerHour = 3600000000;
zDateUtil.kMicrosPerDay = zDateUtil.kSecondsPerDay * zDateUtil.kMicrosPerSecond;

zDateUtil.printTimeAgo = function(timestamp) {
  var now = Date.now();
  var offset = Math.floor((now - timestamp) / 1000);

  if (offset < 10) {
    return "just now";
  } else if (offset < 60) {
    var label = (offset == 1)? " second ago" : " seconds ago";
    return offset + label;
  } else if (offset < 3600) {
    var time = Math.floor(offset / 60);
    var label = (time == 1)? " minute ago" : " minutes ago";
    return time + label;
  } else if (offset < 86400) {
    var time =  Math.floor(offset / 3600);
    var label = (time == 1)? " hour ago" : " hours ago";
    return time + label;
  } else {
    var time = Math.floor(offset / 86400);
    var label = (time == 1)? " day ago" : " days ago";
    return time + label;
  }
};
