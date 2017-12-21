export async function login(data) {
    return await new Promise((resolve, reject) => {
        fetch('/api/login', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {'Content-Type': 'application/json'}
        }).then(function (response) {
            return response.json();
        }).then(function (data) {
            resolve(data);
        });
    });
}