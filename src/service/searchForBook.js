// function searching for books using google API
export const searchForBook = async (query) => {
    const search = query[0].split(' ').join('+');
    const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=${query[1]}`
    );
    const json = response.json();
    return json;
};

// function fetching individual book from API
export const searchById = async (id) => {
    const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes/${id}`
    );
    const json = response.json();
    return json;
};
