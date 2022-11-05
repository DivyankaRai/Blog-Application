// Api notification msgs

export const Api_notification_messages = {
    loading:{
        title:"Loading...",
        message:"Data is being loaded"
    },
    success:{
        title:"success",
        message:"data successfully loaded"
    },
    responseFailure:{
        title:"Error",
        message:"An error occured while fetching response from the server. Please try again"
    },
    requestFailure:{
        title:"Error",
        message:"An error occured while parsing rrequest data."
    },
    networkError:{
        title:"Error",
        message:"unacle to connect with the server. Please chcek internet connectivity and try again later."
    }
}

// api service call
// sample request
// need service call:(url:"/", method:'POST/PUT/GET/DELETE' params:true/false, query:true,false)

export const service_url = {
    userSignup:{url:"/signup", method:"POST"}
}