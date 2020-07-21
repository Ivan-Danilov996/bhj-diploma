/**
 * Основная функция для совершения запросов
 * на сервер.
 * */

const createRequest = (options) => {
    const xhr = new XMLHttpRequest
    if(options.method === 'GET') {
        let url = `${options.url}?`;
        for (const [key, value] of Object.entries(options.data)) {
            url += `${key}=${value}&`
        }
        let array = url.split('')
        array.pop()
        url = array.join('')
        xhr.open(options.method, url)

        try {
            xhr.send();
            xhr.onreadystatechange = function () {
                if(xhr.readyState == xhr.DONE && xhr.status == 200) {
                    options.callback( err = null, xhr.response );
                } 
            };
        }
        catch ( err ) {
            options.callback( err );
        }
    } else {
        const formData = new FormData;

        for (const [key, value] of Object.entries(options.data)) {
            formData.append( key, value );
        }
        xhr.open( options.method , options.url );
        xhr.send( formData );
    }
    return xhr.response
};


