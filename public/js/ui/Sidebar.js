/**
 * Класс Sidebar отвечает за работу боковой колонки:
 * кнопки скрытия/показа колонки в мобильной версии сайта
 * и за кнопки меню
 * */
class Sidebar {
  /**
   * Запускает initAuthLinks и initToggleButton
   * */
  static init() {
    this.initAuthLinks();
    this.initToggleButton();
  }

  /**
   * Отвечает за скрытие/показа боковой колонки:
   * переключает два класса для body: sidebar-open и sidebar-collapse
   * при нажатии на кнопку .sidebar-toggle
   * */
  static initToggleButton() {
    document.querySelector('.sidebar-toggle').addEventListener('click', (event)=> {
      event.preventDefault()
      document.querySelector('.sidebar-mini').classList.toggle('sidebar-collapse')
      document.querySelector('.sidebar-mini').classList.toggle('sidebar-open')
    })
  }

  /**
   * При нажатии на кнопку входа, показывает окно входа
   * (через найденное в App.getModal)
   * При нажатии на кнопку регастрации показывает окно регистрации
   * При нажатии на кнопку выхода вызывает User.logout и по успешному
   * выходу устанавливает App.setState( 'init' )
   * */
  static initAuthLinks() {
    // Array.from(document.querySelectorAll('.menu-item')).forEach((item)=> {
    //   item.addEventListener('click', (e)=> {
    //     e.preventDefault()
    //     App.getModal(Array.from(item.classList).pop().split('_').pop()).open()
    //   })
    // })

    const registerLink = document.querySelector( '.menu-item_register' );
    const loginLink = document.querySelector( '.menu-item_login' );
    const logoutLink = document.querySelector( '.menu-item_logout' );
    registerLink.addEventListener( 'click', () => App.getModal( 'register' ).open() );
    loginLink.addEventListener( 'click', () => App.getModal( 'login' ).open() );
    logoutLink.addEventListener( 'click', () => User.logout() );
  }
}
