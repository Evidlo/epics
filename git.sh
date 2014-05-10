#!/bin/bash
cd /srv/epics 2>&1
git pull 2>&1
echo $(date)>/tmp/epics-pull 2>&1
