import "./Header.css"

import gravityVideo from "./../../assets/defeaters.mp4"

export const Header = () => {
    return (
        <div className="Header">
            <video src={gravityVideo} className="Header_video" muted autoPlay loop/>
            <div className="Header_content">
                <h1>Všechno nejlepší<br />k narozeninám!</h1> 
                <p>Ať každý okamžik ve tvém životě dává jako Super Green!</p>
            </div>
        </div>
    )
}