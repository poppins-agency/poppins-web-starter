import CookieConsent from "react-cookie-consent";
import clsx from "clsx";
import Link from "next/link";

const CookiePopUpBox = (): JSX.Element => {
  // TODO - handle accept and reject cookies
  //    - show/hide GA tracking
  return (
    <CookieConsent
      flipButtons
      disableStyles={true}
      hideOnAccept
      hideOnDecline
      location="bottom"
      buttonText="Accept"
      declineButtonText="Reject"
      enableDeclineButton
      cookieName="generic-cookie"
      //parent class for the entire div, defines the background and postion
      containerClasses={clsx(
        "mx-auto left-2 right-2 mb-10 fixed z-40 bg-lilac bottom-20 rounded-lg bg-lilac w-full max-w-xs",
        "sm:right-4 sm:mx-0 sm:max-w-md overflow-hidden sm:left-auto"
      )}
      //parent div of the buttons
      buttonWrapperClasses="px-6 flex justify-between py-4 "
      //classes for the styling of each button
      buttonClasses={clsx(
        "px-8 py-4 uppercase",
        "rounded-full font-sub-heading text-xs leading-4.5 tracking-wider bg-ivory",
        "hover:scale-105 transition duration-500 "
      )}
      declineButtonClasses={clsx(
        "px-8 py-4 uppercase",
        "rounded-full font-sub-heading text-xs leading-4.5 tracking-wider bg-purple",
        "hover:scale-105 transition duration-500  text-ivory"
      )}
    >
      {/** content located within the parent class */}
      <div className="mx-auto my-6 max-w-7xl px-6 font-sub-heading">
        <p className="text-sm uppercase leading-4.5 tracking-widest">
          Cookies. Everyone loves them, but not all day every day. Accept them
          or reject them, the freedom of choice is yours.
        </p>
        {/** 
            TODO - replace with correct link once confirmed! */}
        <Link href={"#"} target="_blank" className="uppercase text-purple">
          <p className="pt-2 text-sm tracking-wider">Read our cookie policy </p>
        </Link>
      </div>
    </CookieConsent>
  );
};

export default CookiePopUpBox;
