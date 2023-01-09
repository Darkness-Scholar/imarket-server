
const STATUS_CODES = {
    OK: 200,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500,
}

const DEFAULT_MESSAGES = (code:number) => {
    switch (code) {
        case 400: return 'Bad request'
        case 401: return 'Unauthorized'
        case 403: return 'Permission denied!'
        case 404: return 'Data not found'
        case 405: return 'Method not allowed'
        case 500: return 'System exception'
        case 502: return 'Bad gateway'
        default: return 'The operation successful';
    }
}