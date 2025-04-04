#!/bin/bash

# 블로그를 빌드하고 GitHub Pages에 배포하는 스크립트

# 빌드
npm run build

# GitHub Pages에 배포
# 사용자명은 실제 GitHub 사용자명으로 변경하세요
GIT_USER=redsubmarine npm run deploy
