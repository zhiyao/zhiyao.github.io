---
layout: post
title: How to batch move a calendar(ICS) dates and time
date:   2016-05-27 00:42:00 +0800
categories: ruby calendar scripts
---
calendar-shifter script makes shifting ics calendar of dates and times a lot easier.

##Background

Sometimes you just got a calendar file off the internet in a .ics format filled with hundreds of events. Everything was great execpt for one major problem, the timezone or date was wrong. And you have to correct them manually one by one.

This has happen to me when I downloaded an [old insanity calendar](http://www.teambeachbody.com/connect/message-boards?p_p_id=19&p_p_lifecycle=1&p_p_state=exclusive&p_p_mode=view&p_p_col_id=column-6&p_p_col_count=1&_19_struts_action=%2Fmessage_boards%2Fget_message_attachment&_19_messageId=86307460&_19_attachment=Insanity.ics.zip) dated 5 years back. After moving a couple of events on the calendar, I thought to myself that there must be a better way to do this. To my amazement, there was such a tool on Mac's calendar app or Google calendar.

##Solution

So I fired up my text editor and started to code a simple ruby script to do just that.

[calendar-shifter script](https://github.com/zhiyao/calendar-shifter)

I hope this script could solve someone's problem as well.
