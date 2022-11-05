import axios from "axios"
import { Api_notification_messages, service_url } from "../constants/config"

const Api_url = `http://localhost:8080`
const axiosInstance = axios.create({
    baseURL: Api_url,
    timeout:10000,
    headers:{
        "content-type":"application/json"
    }
})

axiosInstance.interceptors.request.use(
    function(config){
        return config
    },
    function (error) {
        return Promise.reject(error)
    }
)

axiosInstance.interceptors.response.use(
    function (response) {
        return processResponse(response)
    },
    function (error) {
        return Promise.reject(processError(error))
    }
)

// if succcess => return(isSuccess:true)
// if failur => return{isfailure:true}
const processResponse=(response)=>{
    if(response?.status === 200){
        return{isSuccess:true, data:response.data}
    }
    else{
        return{
            isFailure:true,
            status:response?.status,
            msg:response?.msg,
            code:response?.code
        }
    }
}

// types of error
const processError=(error)=>{
    if(error.response){
        // req made and server responded with status other
        // that falls out of range of 2.X.X(200)
        console.log("errror in response:", error.toJSON())
        return{
            isError:true,
            msg:Api_notification_messages.requestFailure,
            code:"error.response.status"
        }
    }else if(error.request){
        // req made but didn't get response
        console.log("errror in request:", error.toJSON())
        return{
            isError:true,
            msg:Api_notification_messages.requestFailure,
            code:""
        }
    } else{
        // something happened in setting up that triggers an error
        console.log("errror in network:", error.toJSON())
        return{
            isError:true,
            msg:Api_notification_messages.requestFailure,
            code:""
        }
    }
}
const API={}
for (const [key, value] of Object.entries(service_url)){
    API[key] = (body,showUploadProgress, showDownloadprogress)=>
        axiosInstance({
            method:value.method,
            url:value.url,
            data:body,
            responseType: value.responseType,
            onUploadProgress:function (progressEvent) {
                if(showUploadProgress){
                    let percentageCompleted = Math.round((progressEvent.loaded * 100)/ progressEvent.total)
                    showUploadProgress(percentageCompleted)
                }
            },
            onDownloadProgress:function (progressEvent) {
                if(showDownloadProgress){
                    let percentageCompleted = Math.round((progressEvent.loaded * 100)/ progressEvent.total)
                    showDownloadProgress(percentageCompleted)
                }
            }
        })
}

export {API}






