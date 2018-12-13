<p align="center"><img width="100" src="https://raw.githubusercontent.com/NeutroniumCore/neutronium-vue-root-vm-access/blob/__doc__/logo.png"></p>
<h1 align="center">neutronium-vue-root-vm-access</h1>


[![MIT License](https://img.shields.io/github/license/NeutroniumCore/neutronium-vue-root-vm-access.svg)](https://github.com/NeutroniumCore/neutronium-vue-root-vm-access/blob/master/LICENSE)

## Description

Plugin to access Neutronium root ViewModel from any components.

Installed by default by [vue-cli-plugin-neutronium](https://github.com/NeutroniumCore/vue-cli-plugin-neutronium)

## Install
``` prompt
$ npm install neutronium-vue-root-vm-access
```

## Usage 

In `install.js` file add:
``` js
import VmAccess from "neutronium-vue-root-vm-access";

function vueInstanceOption(vm, Vue) {
  Vue.use(VmAccess, vm);
  ///
}
Vue.use
```

Then to access root ViewModel in a component use `this.$rootVm`:
``` js
methods:{
    changeLanguage(value) {
        this.$rootVm.Language = value;
    }
}
```

