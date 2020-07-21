/**
 * Класс Entity - базовый для взаимодействия с сервером.
 * Имеет свойство URL, равно пустой строке.
 * */
class Entity {

  static URL = ''
  /**
   * Запрашивает с сервера список данных.
   * Это могут быть счета или доходы/расходы
   * (в зависимости от того, что наследуется от Entity)
   * */
  static list( data, callback = (err, response) => {
    console.log(err)
    console.log(response)
  } ) {
    let options = {
      data, 
      callback, 
      method: 'GET', 
      responseType: 'json' 
    }
    createRequest(options)
  }

  /**
   * Создаёт счёт или доход/расход с помощью запроса
   * на сервер. (в зависимости от того,
   * что наследуется от Entity)
   * */
  static create( data, callback = (err, response) => {
    console.log(err)
    console.log(response)
  } ) {
    const modifiedData = Object.assign({ _method: 'PUT' }, data );

    let options = {
      modifiedData, 
      callback, 
      method: 'POST', 
      responseType: 'json' 
    }
    createRequest(options)
  }

  /**
   * Получает информацию о счёте или доходе/расходе
   * (в зависимости от того, что наследуется от Entity)
   * */
  static get( id = '', data, callback = (err, response) => {
    console.log(err)
    console.log(response)
  } ) {
    let options = {
      data, 
      callback, 
      method: 'GET', 
      responseType: 'json' 
    }
    createRequest(options)
  }

  /**
   * Удаляет информацию о счёте или доходе/расходе
   * (в зависимости от того, что наследуется от Entity)
   * */
  static remove( id = '', data, callback = (err, response) => {
    console.log(err)
    console.log(response)
  } ) {

    const modifiedData = Object.assign({ _method: 'DELETE', id }, data );

    let options = {
      modifiedData, 
      callback, 
      method: 'POST', 
      responseType: 'json' 
    }
    createRequest(options)
  }
}
