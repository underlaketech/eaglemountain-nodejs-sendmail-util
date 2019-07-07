---
title: sendmail-util
---

# Background

Sometimes it's useful to send an email from the command line. The ancient
Linux tools like sendmail, exim, and postfix are somewhat complicated to setup
because they have so many options and capabilities. When you don't want a
complete SMTP server with user aliasing, relaying from selected servers, etc.,
when you want to just connect to the recipient's SMTP server directly and
deliver the message, and you want to do it from the command line, but you
don't want to use telnet :)  then you might find this package useful.

# Abstract

The `@underlake/sendmail-util` package provides a command line interface to
the [sendmail](https://www.npmjs.com/package/sendmail) library which delivers the message.

# Install

```
npm install -g @underlake/sendmail
```

# Usage

## Console help

```
sendmail --help
```

## Send text message

```
sendmail --from someone@example.com --to someone@example.com --subject "text greeting" --text "hello world"
```

## Send html message

```
sendmail --from someone@example.com --to someone@example.com --subject "html greeting" --html "hello <b>world</b>"
```

## Multiple recipients

```
sendmail --from someone@example.com --to foo@example.com --to bar@example.com --subject "multi greeting" --text "hello everyone"
```

## Attachments

```
sendmail --from someone@example.com --to someone@example.com --subject "files" --text "see attachments" --attach /path/to/file1 --attach /path/to/file2
```

