# Updating angular cli to latest version. 
## Also see : updating local and global angular cli versions.


- After reading some issues reported on the GitHub repository, I found the solution.

In order to update the angular-cli package installed globally in your system, you need to run:

`npm uninstall -g angular-cli
npm cache clean
npm install -g @angular/cli@latest`
Depending on your system, you may need to prefix the above commands with sudo.

Also, most likely you want to also update your local project version, because inside your project directory it will be selected with higher priority than the global one:

`rm -rf node_modules
npm uninstall --save-dev angular-cli
npm install --save-dev @angular/cli@latest
npm install`


source: [https://stackoverflow.com/questions/43931986/how-to-upgrade-angular-cli-to-the-latest-version]