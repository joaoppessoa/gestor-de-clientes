import React from 'react';

import { Form, FormGroup, Input, Label, Container, Button, Col } from 'reactstrap';
import Menu from '../../../assets/menu';

export default function CadastroCliente() {
    return(
        <div>
            <Menu />
            <Container>
                <Col className='col-md-6'>
                    <Form>
                    <legend>Cadastro de Clientes</legend>
                        <FormGroup>
                            <Label>Nome</Label>
                            <Input type='text' placeholder='Nome do cliente.' />
                        </FormGroup>
                        
                        <FormGroup>
                            <Label>Telefone</Label>
                            <Input type='tel' placeholder='Telefone do cliente.' />
                        </FormGroup>

                        <FormGroup>
                            <Label>País</Label>
                            <Input type='text' placeholder='Telefone do cliente.' />
                        </FormGroup>

                        <FormGroup>
                            <Label>CEP</Label>
                            <Input type='text' placeholder='Telefone do cliente.' />
                        </FormGroup>
                        
                        <FormGroup>
                            <Label>Estado</Label>
                            <Input type='text' placeholder='Telefone do cliente.' />
                        </FormGroup>

                        <FormGroup>
                            <Label>Cidade</Label>
                            <Input type='text' placeholder='Telefone do cliente.' />
                        </FormGroup>

                        <FormGroup>
                            <Label>Endereço</Label>
                            <Input type='text' placeholder='Digite o endereço do cliente' />
                        </FormGroup>

                        <FormGroup>
                            <Label>Número</Label>
                            <Input type='number' placeholder='Telefone do cliente.' />
                        </FormGroup>

                        <Button>Enviar</Button>
                    </Form>   
                </Col>

                <Col>
                </Col>
                
            </Container>
        </div>
    )
}