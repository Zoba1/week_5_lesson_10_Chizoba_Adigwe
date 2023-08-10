class phone {
 constructor(powerButton, volume, app, ios, model){
    this.powerButton = powerButton
    this.volume = volume
    this.app = app
    this.ios = ios
    this.model = model
}
}

const phone1 = new phone(1, 2, 30, 16, '12 pro')
console.log(phone1);