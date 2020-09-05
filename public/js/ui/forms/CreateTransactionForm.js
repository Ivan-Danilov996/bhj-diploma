/**
 * Класс CreateTransactionForm управляет формой
 * создания новой транзакции
 * Наследуется от AsyncForm
 * */
class CreateTransactionForm extends AsyncForm {
  /**
   * Вызывает родительский конструктор и
   * метод renderAccountsList
   * */
  constructor( element ) {
    super(element);
    this.renderAccountsList()
  }

  /**
   * Получает список счетов с помощью Account.list
   * Обновляет в форме всплывающего окна выпадающий список
   * */
  renderAccountsList() {
    let select = this.element.querySelector( '.accounts-select' );
    Account.list(User.current(), (err, response) => {
      select.innerHTML = "";
      response.data.forEach(element => {
      select.insertAdjacentHTML("beforeend", `<option value="${ element.id }">${ element.name }</option>`)
      });
    })
  }

  /**
   * Создаёт новую транзакцию (доход или расход)
   * с помощью Transaction.create. По успешному результату
   * вызывает App.update(), сбрасывает форму и закрывает окно,
   * в котором находится форма
   * */
  onSubmit( options ) {
    Transaction.create(options, (err, response) => {
      if (response.success) {
        this.element.reset(); 
        let form = new Modal(this.element.closest(".modal"));
        form.close();
        App.update();
      }
    })
  }
}
