import NotificationMessage from "../../../components/NotificationMessage";
import DashboardNav from "../../../components/shared/dashboard-nav";

export default function Notification() {
  return (
    <div className="w-full flex flex-col bg-white gap-y-8">
      <DashboardNav heading="Notification" subHeading=""/>
      <div className="flex flex-wrap w-full gap-[2%]">
        <NotificationMessage 
          label='Loan Application Approved' 
          message='Hooray! Your loan application has been approved and is available for you to use at your convience...'
          date="May 30, 2022"
        />
        <NotificationMessage 
          label='Insurance' 
          message='Congratulations! Your loan is insured with Wiggle Insurance...'
          date="May 30, 2022"
        />
      </div>
    </div>
  )
}