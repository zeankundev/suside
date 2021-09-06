# How to build Suside
## Prerequirisites
You will need the following.
* Node.js LTS
* Yarn
* Git
* node-gyp (Python)

## Clone the git repository
Clone the git repository by typing this.
```shell
git clone https://github.com/zeankundev/suside.git
```
In case if you want the latest commit, type the following after the latest commit
```
git pull
```
## Install all dependencies
You have to get inside the source folder by typing the following
```shell
cd suside
```
Then, install all of it using Yarn. You can use this command
```
yarn
```
or
```
yarn install
```
## Running
You can run by typing this
```
yarn start
```
Or, run the web version by typing this
```
yarn start:experimental:browser
```
## Building
### Browser
You can type this to build the browser version
```
yarn build:experimental:browser
```
### Desktop app
Just type this command.
```
yarn build
```
Or, to be platform or OS specific, type the following
```
yarn build:electron --info platfrom=<plat>
```
Replace ```<plat>``` with the following:
* snap
* freebsd
* apk
* deb
* rpm
* pacman
* AppImage
* p2p

You can also build OS specific
```
yarn build:electron --info os=<os>
```
For example
```
yarn build:electron --info os=win
```
