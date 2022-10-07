import React from 'react';
import CookieConsent from "react-cookie-consent";

const COOKIE_NAME = "antibabylon_cookie";
const cookieWarning = "This site uses cookies to give you the best possible user experience. Please agree to the use of cookies.  <a href='/privacy'>Privacy policy</a>"

const createMarkup = (txt) => {
    return { __html: txt };
}

const CookieConsentComponent = () => {
    return (
        <div id="cookie-consent">
            <CookieConsent
                buttonText="OK"
                enableDeclineButton={true}
                declineButtonText="Ablehnen"
                location="bottom"
                cookieName={COOKIE_NAME}
                expires={999}
                overlay
                buttonClasses={"btn btn-primary"}
                declineButtonClasses={"btn btn-danger"}
                onAccept={() => {
                    window.location.href = "/"
                }}
            >
                <div style={{ color: "white" }} dangerouslySetInnerHTML={createMarkup(cookieWarning)} />

            </CookieConsent>

        </div>
    );
};

export default CookieConsentComponent;
