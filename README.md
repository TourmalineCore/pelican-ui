# pelican-ui

## Prerequisites

- [Docker](https://www.docker.com/get-started/) (needed for Dev Containers)

### If you develop inside Dev Containers
- [VSCode](https://code.visualstudio.com/)
- [Dev Containers Extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)

### If you develop using good old Node.js (no Dev Containers)

- [Node.js](https://nodejs.org/en) (version 20.18.0 was used but it should be also fine with some older versions, ideally install using `nvm` which will allow you to easily switch between Node.js versions if needed)
- [VSCode](https://code.visualstudio.com/) (optional, you can use any IDE but VSCode has configured formatting on save by the lint rules of the project)

## Local start

Install the required dependencies

```bash
npm ci
```

Starting a project in developer mode

```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.



## Run Playwright Tests (Dev Containers only)

To run the tests you need to run the website dev server executing the following script with test content with **no** backend interaction:
```bash
npm run test
```

When you see that the website dev server is started successfully and you can open it at http://localhost:3000 while keeping the first terminal alive in a separate terminal you can run the tests in headless mode (no browser UI) executing:
```bash
npx playwright test
```

If you want to work purely inside your Dev Container you have to connect the the Dev Container VNC server (remote desktop) here http://localhost:6080/. The password is `vscode`. Now you should be able to see Playwright GUI executing one of the available scripts from `package.json` e.g.

```bash
npx playwright test --ui
```

## Playwright Version Upgrade

Playwright version has to be fixed to be compatible with Dev Containers workflow.

For instance, if you need to upgrade playwright version from 1.48.2 to 1.49.0.

- Check that the new needed version tag is available [here](https://mcr.microsoft.com/en-us/artifact/mar/playwright/tags)
- If the new version has a dedicated noble docker image then upgrade its tag in `devcontainer.json` file like that

from
```
"image": "mcr.microsoft.com/playwright:v1.48.2-noble",
```
to
```
"image": "mcr.microsoft.com/playwright:v1.49.0-noble",
```
- Uninstall previous version of plyawright packages executing the following commands
```bash
npm uninstall @playwright/test
npm uninstall playwright
```
- Install the new **exact** and **fixed** version of playwright packages to dev deps executing the following commands (here the example is for 1.49.0 version, replace it with the needed one)
```bash
npm install -D playwright@1.49.0 --save-exact
npm install -D @playwright/test@1.49.0 --save-exact
```
