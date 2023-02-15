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
                        <span class="title">SNS</span>
                    </a>
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
                    <NavLink to={'/analitika'}>
                        <span class="icon">
                            <ion-icon name="person-circle-outline"></ion-icon>
                        </span>
                        <span class="title">Аналитика</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/uslugiy'}>
                        <span class="icon">
                            <ion-icon name="person-circle-outline"></ion-icon>
                        </span>
                        <span class="title">Услуги</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/metadalogiya'}>
                        <span class="icon">
                            <ion-icon name="person-circle-outline"></ion-icon>
                        </span>
                        <span class="title">Методология</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/infarmatsia'}>
                        <span class="icon">
                            <ion-icon name="person-circle-outline"></ion-icon>
                        </span>
                        <span class="title">Раскрытие информации</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/renking'}>
                        <span class="icon">
                            <ion-icon name="person-circle-outline"></ion-icon>
                        </span>
                        <span class="title">Рэнкинги</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/vopros'}>
                        <span class="icon">
                            <ion-icon name="person-circle-outline"></ion-icon>
                        </span>
                        <span class="title">FAQ</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/press-center'}>
                        <span class="icon">
                            <ion-icon name="person-circle-outline"></ion-icon>
                        </span>
                        <span class="title">Пресс-центр</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/news'}>
                        <span class="icon">
                            <ion-icon name="person-circle-outline"></ion-icon>
                        </span>
                        <span class="title">Новости</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/retings'}>
                        <span class="icon">
                            <ion-icon name="person-circle-outline"></ion-icon>
                        </span>
                        <span class="title">рейтинги</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/users'}>
                        <span class="icon">
                            <ion-icon name="person-circle-outline"></ion-icon>
                        </span>
                        <span class="title">Компании</span>
                    </NavLink>
                </li>
            <button onClick={HandleLogout}>Log Out</button>
            </ul>

        </div>
            </>
        )
}
export default Header
