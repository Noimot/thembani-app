import React from 'react';
import { Link } from "react-router-dom";

const LoanPopup = ({setShowOffersPopup}) => {
    return (
        <ul className="">
            <Link to="/dashboard/loan-application/client-eligibility">
                <li onClick={() => setShowOffersPopup(false)}>Client Eligibility</li>
            </Link>
            <Link to="/dashboard/loan-application/payment-reschedule">
                <li onClick={() => setShowOffersPopup(false)}>Payment Reschedule</li>
            </Link>
            <Link to="/dashboard/loan-application/kyc-upload">
                <li onClick={() => setShowOffersPopup(false)}>KYC Upload</li>
            </Link>
            <Link to="/dashboard/loan-application/loan-acceptance">
                <li onClick={() => setShowOffersPopup(false)}>Loan Acceptance</li>
            </Link>

        </ul>
    )
}

export default LoanPopup;