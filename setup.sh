#!/usr/bin/env bash
aws cloudformation create-stack --stack-name alexa-plex --template-body file://cloudformation-template.yml --capabilities CAPABILITY_IAM