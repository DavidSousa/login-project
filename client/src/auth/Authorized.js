import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

export default function Authorized(WrappedComponent) {
    return class extends Component {
        constructor() {
            super();
            this.state = {
                loading: true,
                authenticated: false
            }
        };

        componentWillMount() {
            const config = {
                headers: {
                    Authorization: localStorage.getItem('token'),
                }
            }

            axios.get('/home', config)
            .then((response) => {
                this.setState({
                    loading: false,
                    authenticated: true
                })
            })
            .catch((error) => {
                this.setState({
                    loading: false,
                    authenticated: false
                })
            });
        }

        render() {
            
            if (this.state.loading) {
                return <h1>Loading</h1>;
            }

            if (this.state.authenticated) {
                return <WrappedComponent />;
            } else {
                return <Redirect to="/" />
            }
        }
    }
};