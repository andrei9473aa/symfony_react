function fetchJson(url, options) {
    return fetch(url, Object.assign({
        credentials: 'same-origin'
    }, options))
        .then(response => {
            return response.json();
        });
}

/**
 * Returns a promise object with the rep logs data
 *
 * @returns {Promise<Response | never>}
 */
export function getRepLogs() {
    return fetchJson('/reps')
        .then(data => data.items);
}

export function deleteRepLog(id) {
    return fetchJson(`/reps/${id}`, {
        method: 'DELETE'
    });
}