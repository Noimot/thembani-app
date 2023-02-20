import React from 'react';
import { Link } from "react-router-dom";

const LoanPopup = ({setVisibility}) => {
    return (
        <ul className="px-4 text-sm flex flex-col gap-y-2 pt-4">
            <Link to="/loan-application/client-eligibility">
                <li onClick={() => setVisibility(false)}>Client Eligibility</li>
            </Link>
            <Link to="/loan-application/customer-onboarding">
                <li onClick={() => setVisibility(false)}>Customer Onboarding</li>
            </Link>
            <Link to="/loan-application/payment-reschedule">
                <li onClick={() => setVisibility(false)}>Payment Reschedule</li>
            </Link>
            <Link to="/loan-application/kyc-upload">
                <li onClick={() => setVisibility(false)}>KYC Upload</li>
            </Link>
            <Link to="/loan-application/loan-acceptance">
                <li onClick={() => setVisibility(false)}>Loan Acceptance</li>
            </Link>

        </ul>
    )
}

export default LoanPopup;