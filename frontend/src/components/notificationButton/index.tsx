import icon from '../../assets/img/notification-icon.svg'

function NotificationButton() {
    console.log(icon);
    return (
        <div className="dsmeta-red-btn">
            <img src={icon} alt="Notificar" />
        </div>
            )
  }
  
  export default NotificationButton;
  