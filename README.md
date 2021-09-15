![logo](assets/large_logo.svg)

***new banner by 5R33CH4***

A fully fledged text editor built with Electron.
Flexible, minimal and comfortable text editor. ❤️
<br>

![AppVeyor](https://img.shields.io/appveyor/build/zeankundev/suside?style=for-the-badge)
![GitHub all releases](https://img.shields.io/github/downloads/zeankundev/suside/total?style=for-the-badge)
![GitHub release (latest by date and asset)](https://img.shields.io/github/downloads/zeankundev/suside/1.4.4/suside_1.4.4_amd64.deb?style=for-the-badge)
![SourceForge](https://img.shields.io/sourceforge/dm/suside?color=green&style=for-the-badge)

## 🤔 What does it do? 🤔
Suside is a code editor which can do in a normal editor, but there are
differences that made Suside unique.

The following features that made Suside unique are
* 💻 Built in terminal. You don't have to open your terminal, just open the built in terminal.
* 📓 Autocompletion. You don't need to type the full keyword. Just type half or partial of the keyword, then boom!

## 🛠️ Usage 🛠️
To get started, you must have the following.
* Node.js version 7.9
* Git
* Yarn
* Electron 13.1.17
* Python 3.9.6

I have tested this on my local Linux machine (Mint). This build method is only for Windows and Linux (I don't have the build process for macOS, or is it the same?)

Next, you got to clone the repository, change the directory to suside, and installing all dependencies. There are 2 methods.
### Method 1 (The easy way but a little bit hard)
1. Go to this repository and find the Code button.
2. Make sure to click Download ZIP as shown.

![method](Untitled2.png)

3. Go to your terminal and type the ```cd``` command along with the directory on where you extracted Suside.

**NOTE: You must extract the entire Suside ZIP file before continuing to Step 3.**

Let's say I extracted in my home directory. So, I have to type this.
```shell
cd /home/user/suside-master
```
For the path, you must PROVIDE the full path. If you extract in your home directory, you just only enter ```cd suside-master```.

After you enter the repository that you just extracted, you can install the dependencies and run it.

### Method 2 (The quick and fast way, but irritating for beginners.)
To quickly just only clone at your current directory, just type the following commands. The new Suside requires Yarn to build all dependencies.
```shell
# Clone the repository
$ git clone https://github.com/zeankundev/suside
# Change it to suside on where we clone it
$ cd suside
# Installing all dependencies
$ yarn
```

Optionally, you can fork it to make a pull request or make your own.
After you fork it, clone your forked repo.
```shell
git clone https://github.com/<<YOUR-GITHUB-USERNAME>>/suside.git
```

Now, this is where all the fun begins. Type this line in your terminal after installing all the dependencies.
```shell
$ yarn start
```
Have fun hacking on Suside! 🥳:tada:

## ℹ️ Extra tips ℹ️

* To run Suside on the browser, type the following (Note: the browser version is experimental).
```shell
yarn start:experimental:browser
```
* To build Suside, type the following.
```shell
yarn build
```
* To build Suside on a specific OS, type the following. Let's say you're a Debian user, so type this.
```shell
yarn build:electron --info platform=debian
```
