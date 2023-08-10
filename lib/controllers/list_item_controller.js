import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ['title', 'input', 'btn']

  connect() {
    console.log(this.titleTarget)
    console.log(this.inputTarget)
}

    updateItem() {
      console.log("hello")
      this.titleTarget.innerText = this.inputTarget.value
      this.inputTarget.value = ""
    } 
}
