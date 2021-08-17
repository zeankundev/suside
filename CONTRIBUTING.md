# Contributing
## How to build this properly?
You might need the following prerequirisites.
* Git
* npm
* Node.js
* Python 3.0.x (for node-gyp)

## Build instructions
After you cloned your git from here and installed all dependencies (as shown in README.md), the build step is quite easy, none from the build experts, who always built their Electron app the hard way.

So here is the simple step to build Suside.

**For Linux**

**Recommended to use npm run for an easier way**
```
$ npm run buildlinux
```
or, using Electron packager (hard way)
```
$ electron-packager . --overwrite --platform=linux --arch=x64 --icon=assets/icon.png --prune=true --out=build
```

**For macOS**

**Recommended to use npm run for an easier way**
```
$ npm run buildmac
```
or, using Electron packager (hard way)
```
$ electron-packager . --overwrite --platform=darwin --arch=x64 --icon=assets/icon.icns --prune=true --out=build
```

**For Windows**

**Recommended to use npm run for an easier way**
```
> npm run buildlinux
```
or, using Electron packager (hard way)
```
> electron-packager . --overwrite --platform=win32 --arch=x64 --icon=assets/icon.ico --prune=true --out=build
```

## Create the installer
I only have the build instructions for Linux (Debian, Ubuntu, Chrome OS, other that supports .deb), so sorry (Fedora, openSUSE, Arch), but for Fedora, openSUSE, Arch users, you may have to find the installer by yourself (which exports to .rpm).

To create the installer for Debian, run the command below
```
$ npm run builddeb
```

Or, type it manually
```
$ electron-installer-debian --src build/Suside-linux-x64/ --arch amd64 --config debian.json
```
Make sure the installer config MUST be debian.json, because it contains the recommended settings. You may modify the debian.json file, but sometimes may be irritating if you don't memorize the name of the .deb output folder.

Then, wait for a few moments. Mine takes about an hour or two. But yours can be different because your performance.

There. It is ready for distribution. Happy hacking and distributing. 🥳🎉
