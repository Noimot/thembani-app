import DashboardNav from "../../../components/shared/dashboard-nav";
const ProfileData =[
  {
    id: 1,
    label: "Name: ",
    value: "xxxxx xxxxx" //To be replaced with real data
  },
  {
    id: 2,
    label: "Account Number:",
    value: "xxxxx xxxxx" //To be replaced with real data
  },
  {
    id: 3,
    label: "NUIT:",
    value: "xxxxx xxxxx" //To be replaced with real data
  },
  {
    id: 4,
    label: "Phone Number:",
    value: "xxxxx xxxxx" //To be replaced with real data
  },
  {
    id: 5,
    label: "Email:",
    value: "xxxxx xxxxx" //To be replaced with real data
  },
  {
    label: "Address:",
    value: "xxxxx xxxxx" //To be replaced with real data
  },
  {
    id: 7,
    label: "Next of kin:",
    value: "xxxxx xxxxx" //To be replaced with real data
  },
  {
    id: 8,
    label: "Next of kin phone:",
    value: "xxxxx xxxxx" //To be replaced with real data
  },
  {
    id: 9,
    label: "Employer:",
    value: "xxxxx xxxxx" //To be replaced with real data
  },
  {
    id: 10,
    label: "Employer Address:",
    value: "xxxxx xxxxx" //To be replaced with real data
  },
]
export default function ProfileInfo() {
  return (
    <div className="w-full flex flex-col bg-white gap-y-8">
      <DashboardNav heading="Profile" subHeading="Information"/>
      <div className="flex justify-between bg-green rounded-5 px-[20px] py-[32px]">
        <div>
          {ProfileData && ProfileData.map(data => (
            <div className="flex justify-between w-[327px] items-center border-b-[1px] py-[12px]" key={data.id}>
              <span>{data.label}</span>
              <span>{data.value}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-[15px] items-center font-[500]">
          <div className="w-149 h-149 rounded-full bg-red-50">
            <img src="" alt="" />
          </div>
          <span>Bongane Dube</span>
        </div>
      </div>
    </div>
  )
}