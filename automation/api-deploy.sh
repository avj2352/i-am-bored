# Script to copy over all contents from project to current location
echo "API - Copying from Dist...."
cp -a ../node-workspace/i-am-bored/backend/dist/. just-bored/.
echo "Copied! "
echo "API - Deleting source location..."
rm -rf ../node-workspace/i-am-bored/backend/dist
echo "UI - Copying from Frontend..."
cp -a ../node-workspace/i-am-bored/frontend/build just-bored/build
echo "Copied! "
echo "UI - Deleting source location..."
rm -rf ../node-workspace/i-am-bored/frontend/build