import React,{useState} from 'react'
import {Box, Button, TextField, styled, Typography} from '@mui/material';

const Comp = styled(Box)`
    width: 400px;
    margin:auto;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`

const Image = styled(`img`)({
    width:150,
    height:100,
    display:`flex`,
    margin:`auto`
})

const Wrapper = styled(Box)`
    padding: 25px 35px;
    display: flex;
    flex:1;
    flex-direction:column;
    &> div, &> button, &>p{
        margin-top:20px;
    }
`
const LoginBtn = styled(Button)`
    text-transform : none;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`
const SignupBtn = styled(Button)`
    text-transform : none;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`


const Login = () => {

    const [account, setAccount] = useState('login')
    const togglebtn = () =>{
        account === 'signup' ? setAccount('login'): setAccount('signup')
    }
    const onInputChange = (e) =>{
        console.log(e);
    }
    const imgUrl = "data:image/png;base64,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"
  return (
    <Comp>.
        <Image src={imgUrl}  alt="login"></Image>
        {
            account === 'login' ?
                <Wrapper>
                    <TextField variant="standard" label="Enter username" />
                    <TextField variant="standard" label="Enter password" />
                    <LoginBtn variant='contained'>Login</LoginBtn>
                    <Typography style={{textAlign: `center`}}>Or</Typography>
                    <SignupBtn onClick={()=> togglebtn()}>Create an account</SignupBtn>
                </Wrapper>
            :
            <Wrapper>
                <TextField variant="standard" onChange={(e)=> onInputChange(e)} label="Enter Name" />
                <TextField variant="standard" onChange={(e)=> onInputChange(e)} label="Enter Username" />
                <TextField variant="standard" onChange={(e)=> onInputChange(e)} label="Enter Password" />
                <SignupBtn >SignUp</SignupBtn>
                <Typography style={{textAlign: `center`}}>Or</Typography>
                <LoginBtn onClick={()=> togglebtn()} variant='contained'>Already have an account</LoginBtn>
            </Wrapper>
        }
    </Comp>
  )
}

export default Login