import React from 'react';
import { Link } from 'react-router-dom';

import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { FacebookLoginButton } from 'react-social-login-buttons';

export default function Cadastro() {
    return(
        <div className="wrapper">
            <div className="form-wrapper">
                <Form>
                    <h1>
                        <span className="font-weight-bold">MyWebsite</span>.com
                    </h1>
                    <h3 className="text-center" >Faça seu cadastro</h3>
                    <br/>

                   <FormGroup>
                       <Label>Nome</Label>
                       <Input type="text" placeholder="Digite seu nome aqui" required />
                   </FormGroup>

                   <FormGroup>
                       <Label>E-mail</Label>
                       <Input type="email" placeholder="Digite seu nome aqui" required />
                   </FormGroup>

                   <FormGroup>
                       <Label>Senha</Label>
                       <Input type="password" placeholder="Digite sua senha aqui" required />
                   </FormGroup>

                   <Button type="submit" className="btn-lg btn-block btn-dark" >Cadastrar</Button>
                    
                    <div className="text-center pt-3" >
                        Or continue with you social account.
                    </div>

                    <FacebookLoginButton className="mt-3 mb-3"/>
                </Form>
                <div className="text-center pt-3" >
                    <Link to="/">Voltar</Link>
                </div>
            </div>
        </div>
    )
}