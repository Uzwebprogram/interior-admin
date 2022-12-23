import './Dashboard_Header.css'
import { NavLink, useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie'

function Header({hover1}) {
    const cookies = new Cookies(); 
    const navigate = useNavigate();
    const HandleLogout = () => {
        cookies.remove('token')
        setTimeout(() => {navigate('/') 
        window.location.reload()}, "1500")
    }
        return(
            <>
        <div class="navigation">
            <ul>
                <li >
                    <a href="/dashboard">
                        <span class="icon">
                        </span>
                        <span class="title">LUXHOUSE</span>
                    </a>
                </li>
                <li>
                    <NavLink to={'/dashboard'}>
                        <span class="icon">
                        <ion-icon name="aperture-outline"></ion-icon>
                        </span>
                        <span class="title">Статистика</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/projects'}>
                        <span class="icon">
                            <ion-icon name="settings-outline"></ion-icon>
                        </span>
                        <span class="title">Наши работы</span>
                    </NavLink>
                </li>

                <li>
                    <NavLink to={'/clientcomment'}>
                        <span class="icon">
                            <ion-icon name="people-outline"></ion-icon>
                        </span>
                        <span class="title">Отзывы клиентов</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/contact'}>
                        <span class="icon">
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </span>
                        <span class="title">Заказать консультацию</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/calculateproject'}>
                        <span class="icon">
                            <ion-icon name="people-circle-outline"></ion-icon>
                        </span>
                        <span class="title">Рассчитать проект</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/team'}>
                        <span class="icon">
                            <ion-icon name="man-outline"></ion-icon>
                        </span>
                        <span class="title">Наша команда</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/adminadd'}>
                        <span class="icon">
                            <ion-icon name="person-circle-outline"></ion-icon>
                        </span>
                        <span class="title">Админ</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/vacancy'}>
                        <span class="icon">
                            <ion-icon name="options-outline"></ion-icon>
                        </span>
                        <span class="title">Вакансии</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/portfolioyoutube'}>
                        <span class="icon">
                        <ion-icon name="caret-forward-circle-outline"></ion-icon>
                        </span>
                        <span class="title">Блог</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/partners'}>
                        <span class="icon">
                        <ion-icon name="caret-forward-circle-outline"></ion-icon>
                        </span>
                        <span class="title">нам доверяют</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/category'}>
                        <span class="icon">
                        <ion-icon name="caret-forward-circle-outline"></ion-icon>
                        </span>
                        <span class="title">коммерческие и жилые </span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/beforeafter'}>
                        <span class="icon">
                        <ion-icon name="caret-forward-circle-outline"></ion-icon>
                        </span>
                        <span class="title">до и после</span>
                    </NavLink>
                </li>
            <button onClick={HandleLogout}>Log Out</button>
            </ul>

        </div>
            </>
        )
}
export default Header