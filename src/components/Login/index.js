import './styles.scss';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';

export default function Login () {
    return (
        <div className="login_container">
            <div className="login">
                <Form className="login_form" action="" method="post">
                    <h1 className="login_title">Se connecter</h1>
                    <div className="login_form_email">
                    <label htmlFor="email" className="login_email">Email</label>
                        <input type="text" name="email" className="login_input"/>
                    </div>
                    <div className="login_form_password">
                    <label htmlFor="password" className="login_password">Mot de passe</label>
                        <input type="password" name="password" className="login_input"/>
                    </div>
                    <Input className="login_submit" type="submit" value="Connexion" />
                    </Form>
                </div>
            </div>
    )
}