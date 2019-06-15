import React, { Component } from 'react';
import { Text } from 'react-native';
import { Card, CardSection, Button, Input } from './common';
import firebase from 'firebase';
import Spinner from './common/Spinner';

class LoginForm extends Component {
    state = { email: '', password: '', error: '', Loading: false };
    onButtonPress() {
        const { email, password } = this.state;
        this.setState({ error: '', Loading: true });
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(this.onLoginSuccess.bind(this))
                    .catch(this.onLoginFail.bind(this));
            });
    }
    onLoginFail() {
        this.setState({ error: 'Authentication Failed' , Loading: false});
    }
    onLoginSuccess() {
        this.setState({
            email: '',
            password: '',
            Loading: false,
            error: ''
        });
    }
    renderButton() {
        if (this.state.Loading) {
            return <Spinner size='small' />;
        }
        return (
            <Button onPress={() => this.onButtonPress()}>
                Login
            </Button>
        );
    }
    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        placeholder='abc@gmail.com'
                        Label='Email'
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        secureTextEntry
                        Label='Password'
                        placeholder='password'
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                    />
                </CardSection>
                <Text style={styles.errorTextStyle}>
                    {this.state.error}
                </Text>
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}
const styles = {
    errorTextStyle: {
        fontSize: 20,
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};
export default LoginForm;