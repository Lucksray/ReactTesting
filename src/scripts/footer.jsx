import "./footer.css"

function footer() {
    return (
        <div className="footer-basic">
            <footer>
                <div className="social"><i className="icon ion-social-instagram"></i><i className="icon ion-social-snapchat"></i><i className="icon ion-social-twitter"></i><i className="icon ion-social-facebook"></i></div>
                <ul className="list-inline">
                    <li className="list-inline-item">Home</li>
                    <li className="list-inline-item">Services</li>
                    <li className="list-inline-item">About</li>
                    <li className="list-inline-item">Terms</li>
                    <li className="list-inline-item">Privacy Policy</li>
                </ul>
                <p className="copyright">Broken Lives © 2022</p>
            </footer>
        </div>
    )
}

export default footer;