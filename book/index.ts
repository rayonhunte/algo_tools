// interface ErrorMessage  {
//     // can only be string | number | symbol
//     [msg: number ]: string;
//     // you can add other properties once they are of the same type
//     apiId: number
// }


// // message object of Index type ErrorMessage
// const errorMessage: ErrorMessage  = {
//     0: "system error",
//     1: "overload",
//     apiId: 12345
// }

// // console out object
// console.log(
//     errorMessage
// )


// // function that takes an error index and returns the error
// function processError(e: ErrorMessage) {
//     if (e[400]) {
//         return e[400]
//     } else if (e[401]) {
//         return e[401]
//     } else if (e[403]) {
//         return e[403]
//     }   
//     else {
//         return "undefined message"
//     }

// }

// //error message from a api
// const httpErrors: ErrorMessage[] = [
//     {400:'bad request', apiId: 123456},
//     {401:'unauthorized', apiId: 123456},
//     {403:'forbidden',  apiId: 123456},
// ] 

// // write error messages to the console
// httpErrors.forEach(
//     (e: ErrorMessage) => {
//         console.log(
//             processError(e)
//         )
//     } )



interface ErrorMessage  {
    // can only be string | number | symbol
    [msg: number ]: string;
    // you can add other properties once they are of the same type
    apiId: number
}

const errorMessage : ErrorMessage = {
    400:'bad request',
    401:'unauthorized',
    403:'forbidden',  apiId: 123456,
 }


 const errorCodes: number [] = [
    400,401,403
 ]

errorCodes.forEach(
    (code: number) =>  {
        console.log(
            errorMessage[code]
        )
    }
)


interface PackageStatus { 
    [status: string]: boolean;  
}

type Package = {
    packageStatus: PackageStatus,
    barcode:  number,
    weight: number
}

const pack: Package = {
    packageStatus: {'shipped': false, 'packed': true, 'delivered': true},
    barcode: 123456,
    weight: 28 
}


class PackageProcess {
    
    pack: Package

    constructor(pack: Package) {
        this.pack = pack
    }
    
    Status () {
        return this.pack.packageStatus
    }
    UpdateStatus(status: string, state: boolean) {
        this.pack.packageStatus[status] = state
    }
}











