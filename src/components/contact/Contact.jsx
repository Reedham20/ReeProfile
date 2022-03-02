import "./contact.scss"

export default function Contact() {
    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="assets/shake.svg" alt="error" />
            </div>
            <div className="right">
                <h1>Contact Me</h1>
                <form>
                    <input type="text" placeholder="email" />
                    <textarea placeholder="Message"></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    )
}
