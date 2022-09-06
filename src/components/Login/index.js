import './styles.scss';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';

export default function Login () {
    return (
        <div classNameName="login_container">
            <div classNameName="login">
                <Form classNameName="login_form" action="" method="post">
                    <h1 classNameName="login_title">Se connecter</h1>
                    <div classNameName="login_form_email">
                    <label htmlFor="email" classNameName="login_email">Email</label>
                        <input type="text" name="email" classNameName="login_input"/>
                    </div>
                    <div classNameName="login_form_password">
                    <label htmlFor="password" classNameName="login_password">Mot de passe</label>
                        <input type="password" name="password" classNameName="login_input"/>
                    </div>
                    <Input classNameName="login_submit" type="submit" value="Connexion" />
                    </Form>
                </div>
            </div>
    )
}