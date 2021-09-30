# 🛠 How to build Suside
## ❗ Prerequirisites
You will need the following.
* Node.js LTS
* Yarn
* Git
* node-gyp (Python)

## 📡 Clone the git repository
For best results or if you want to make a PR, fork this repo.
Then, clone your forked repository
```shell
git clone https://github.com/your-username/suside.git
```
Then, you can also merge your forked repo with the upstream (the official repo) commits.
```
cd suside
git checkout main
git pull https://github.com/zeankundev/suside.git main
```

**OR**

If you don't want to make a PR and just modify the entire Suside code, you can type this..
```shell
git clone https://github.com/zeankundev/suside.git
```
In case if you want the latest commit, type the following after the latest commit
```
git pull
```
## 🔧 Install all dependencies
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
## 😇 Running
You can run by typing this
```
yarn start
```
Or, run the web version by typing this
```
yarn start:experimental:browser
```
## 🏭 Building
### 🌏 Browser
You can type this to build the browser version
```
yarn build:experimental:browser
```
### 💻 Desktop app
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
