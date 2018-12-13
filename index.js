const accessRootVm = {
  install(Vue, vm) {
    Vue.prototype.$rootVm = vm.ViewModel;
  }
}

export default accessRootVm;