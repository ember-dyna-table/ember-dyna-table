#!/usr/bin/env bash

# fail script immediately on any errors in external commands
set -e

npm run coverage
cat ./coverage/lcov.info | node_modules/codacy-coverage/bin/codacy-coverage.js