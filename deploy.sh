echo "Building app..."
npm run build
echo "Deploy files to server..."
scp -r dist/* root@14.225.212.6:/var/www/html/
echo "Deploy Successfully!!!"