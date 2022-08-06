const postData = async (url, data) => {
  /**
   * Асинхронный запрос к сорверу методом POST
   * url   -> ссылка на ресурс
   * data  -> данные для передачи на сервер
   */

  let res = await fetch(url, {
    method: "POST",
    body: data
  });

  return await res.text();
};

const getResource = async (url) => {
  /**
   * Асинхронный запрос к сорверу методом GET
   * url  -> ссылка на ресурс
   */

  let res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Could not fetch ${url}, status: ${res.status}`);
  }

  return await res.json();
};

export {postData, getResource};