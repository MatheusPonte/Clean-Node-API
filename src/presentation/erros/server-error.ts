export class ServerError extends Error {
    constructor(){
        super(`Error on the server`)
        this.name = 'InvalidParamError'
    }
}