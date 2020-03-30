import React from 'react';

import { Form, FormGroup, Input, Label, Container, Button, Col, Table, Modal, Row  } from 'reactstrap';
import { FaEdit, FaTrash } from "react-icons/fa";
import Menu from '../../../assets/menu';

export default function Clientes() {
    return(
        <div>
            <Menu />
            <Container>
                <Row>
                    <Table>
                        <thead>
                            <tr className="table-active">
                                <th>ID</th>
                                <th>Nome</th>
                                <th>Telefone</th>
                                <th>*</th>
                                <th>*</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">Active</th>
                                <td>Column content</td>
                                <td>Column content</td>
                                <td><a><FaEdit /></a></td>
                                <td><a><FaTrash /></a></td>
                            </tr>
                        </tbody>
                    </Table>
                </Row>

                <Modal>
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
                </Modal>
            </Container>
        </div>
    )
}