import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ['form', 'list', 'input']

  connect() {
    console.log(this.formTargets)
  }

  addItem(event) {
    event.preventDefault()
    const html = `<li data-controller="list-item">
                    <p data-list-item-target="title">${this.inputTarget.value}</p>
                    <div class="d-flex">
                        <input type="text" data-list-item-target="input">
                        <button data-list-item-target="btn"
                        data-action="click->list-item#updateItem"
                        >Update</button>
                    </div>
                </li>`
    this.listTarget.insertAdjacentHTML('beforeend', html)
    this.inputTarget.value = ""
    }

}
