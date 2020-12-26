# Script to only copy over build folder
echo "Deploying UI - from Source folder to Heroku project...."
cp -a ../node-workspace/i-am-bored/frontend/build/ just-bored/build
echo "Deleting Source location build folder...."
rm -rf ../node-workspace/i-am-bored/frontend/build