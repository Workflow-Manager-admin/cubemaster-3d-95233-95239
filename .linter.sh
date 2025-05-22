#!/bin/bash
cd /home/kavia/workspace/code-generation/cubemaster-3d-95233-95239/cube_master_3d
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

