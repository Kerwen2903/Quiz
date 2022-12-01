import {createContext} from 'react'

export const AuthContext= createContext({
    isLoggedIn:false,
    token:false,
    userId:null,
    image:'',
    url:'10.1.5.120:8080',
    login:()=>{},
    logout:()=>{}
})