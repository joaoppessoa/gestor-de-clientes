import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { FacebookLoginButton } from 'react-social-login-buttons';

export default function Login() {
    return(
        <div className="wrapper" >
            <div className="form-wrapper" >
                <Form className="login-form">
                    <h1>
                        <span className="font-weight-bold">MyWebsite</span>.com
                    </h1>
                    <h2 className="text-center" >Bem Vindo!</h2>

                    <FormGroup>
                        <Label>E-mail</Label>
                        <Input type="email" placeholder="Digite seu email aqui" />
                    </FormGroup>

                    <FormGroup>
                        <Label>Senha</Label>
                        <Input type="password" placeholder="Digite sua senha aqui" />
                    </FormGroup>

                    <Button className="btn-lg btn-block btn-dark" >
                        Log in
                    </Button>

                    <div className="text-center pt-3" >
                        Or continue with you social account.
                    </div>

                    <FacebookLoginButton className="mt-3 mb-3"/>
                    <div className="text-center" >
                        <Link to="/cadastro">Cadastre-se</Link>
                    </div>
                </Form>
            </div>
        </div>
        
    );
}