export function RoleCard(props) {
   return (
    <div className = "role-card">

        <div className="icon-box" style={{ backgroundColor: props.iconBg, color: props.iconColor }}>
            {props.icon}
        </div>

        <p className = "card-subtitle" style={{ color: props.iconColor }}> {props.subtitle} </p>     
        <h2 className = "card-title">{props.title}</h2> 
        <p className = "card-description">{props.description}</p>

        <ul className = "features-list">
            <li><span style={{ color: props.iconColor }}>✓</span> {props.features[0]}</li>
            <li><span style={{ color: props.iconColor }}>✓</span> {props.features[1]}</li>
            <li><span style={{ color: props.iconColor }}>✓</span> {props.features[2]}</li> 
        </ul>

        <div className="enter-link" style={{ color: props.iconColor }}> <span>Enter Portal</span>
        <span>→</span>
        </div>

    </div>
   )
}