import { useForm } from 'react-hook-form';
import { Button } from "antd";
import { useSelector, useDispatch } from "react-redux";

export function Register() {
    const { register, handleSubmit, clearErrors } = useForm({});
    let loading = useSelector(state => state.reg.loading)
    const dispatch = useDispatch();
    const onSubmit = input => {
        dispatch({ type: 'SET_REGISTER', payload: input });
    }
    return (
        <div className='loginForm'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Button className='btnPrimary' type="primary" htmlType="submit" size='large' loading={loading} shape='round' onClick={() => clearErrors()}>Регистрация</Button>
            </form>
        </div>
    )
}