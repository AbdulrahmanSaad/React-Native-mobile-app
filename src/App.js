import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, Card, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    state = { LoggedIn: true };
    componentWillMount() {
        firebase.initializeApp(
            {
                apiKey: "AIzaSyAN8aOJDeOzzgAy8nsltvgRGuVwDtVckMA",
                authDomain: "auth-be0c4.firebaseapp.com",
                databaseURL: "https://auth-be0c4.firebaseio.com",
                projectId: "auth-be0c4",
                storageBucket: "auth-be0c4.appspot.com",
                messagingSenderId: "680924636745",
                appID: "680924636745"
            });
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState = ({ LoggedIn: true });
            }
            else {
                this.setState = ({ LoggedIn: false });
            }
        });
    }
    renderContent() {
        switch (this.state.LoggedIn) {
            case true:
                return <Card>
                    <CardSection>
                        <Button>
                            Logout
                    </Button>
                    </CardSection>
                </Card>;
            case false:
                return <LoginForm />;
            default:
                return <Card>
                    <CardSection>
                        <Spinner size="large" />
                    </CardSection>
                </Card>;
        }
    }
    render() {
        return (
            <View>
                <Header HeaderText="Authentication" />
                {this.renderContent()}
            </View>
        );
    }
};
export default App;