#!/bin/sh
lessc base.less > base.css
lessc -x base.less > base.min.css
