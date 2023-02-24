import { Form, Formik } from "formik";
import React, { useRef, useEffect } from "react";
import FormInput from "../../../components/shared/form-input";
import FormSelect from "../../../components/shared/form-select";
import TextArea from "../../../components/shared/text-area";
import backArrow from "../../../assets/images/arrow-black.svg";
import { useDispatch, useSelector } from "react-redux";
import { getToken } from "../../../app/features/slice/tokenSlice";
import { postGenerateNuit } from "../../../app/features/slice/generateNuitSlice";
import * as Yup from "yup";
import DashboardNav from "../../../components/shared/dashboard-nav";
import ImageUpload from "../../../components/shared/input-file";
import Button from "../../../components/shared/button";
import { postLoanOnboarding } from "../../../app/features/thunk/loanThunk";
import { useNavigate } from "react-router-dom";

const LoanOnboarding = () => {
  let ref = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loanOnboardingData, isLoading } = useSelector((state) => state.loan);
  const customerData = JSON.parse(localStorage.getItem("onboardingData"));
  const userProfile = JSON.parse(localStorage.getItem("userProfile"));
  useEffect(() => {
    if (loanOnboardingData?.data) {
      navigate(`/loan-application/client-eligibility`);
    }
  }, [loanOnboardingData?.data]);

  const initialValues = {
    first_name: customerData?.first_name || "",
    middle_name: customerData?.middle_name || "",
    last_name: customerData?.last_name || "",
    dob: customerData?.date_of_birth || "",
    gender: customerData?.gender || "",
    father_name: customerData?.mothers_name || "",
    mother_name: customerData?.fathers_name || "",
    fathers_address: customerData?.mothers_address || "",
    mothers_address: customerData?.fathers_address || "",
    identity_type: customerData?.identity_type || "",
    identity_number: customerData?.identity_number || "",
    email: customerData?.email || "",
    address: customerData?.address || "",
    client_local: customerData?.client_local || "",
    phone_number: customerData?.client_no || "",
    user_id: userProfile?.id,
    company_name: "",
    company_address: "",
    company_phone: "",
    ministry: "",
    employee_number: "",
    monthly_income: "",
    bank_name: "",
    account_holder: "",
    account_number: "",
    pay_date: "",
    nib_number: "",
    marital_status: customerData?.marital_status || "",
  };

  return (
    <div className="w-full flex flex-col bg-white gap-y-8">
      <DashboardNav
        heading="Loan Application"
        subHeading="Customer Onboarding"
      />
      <main className="py-2 px-8 bg-green">
        <Formik
          initialValues={initialValues}
          validationSchema={Yup.object({
            first_name: Yup.string().required("First name is required"),
            middle_name: Yup.string().required("Middle name is required"),
            last_name: Yup.string().required("Last name is required"),
            dob: Yup.string().required("Date of birth is required"),
            gender: Yup.string().required("Gender is required"),
            father_name: Yup.string().required("Fathers name is required"),
            mother_name: Yup.string().required("Mothers name is required"),
            identity_type: Yup.string().required("Identity type is required"),
            identity_number: Yup.string().required(
              "Identity number is required"
            ),
            email: Yup.string()
              .email("Invalid email address")
              .required("Email is required"),
            address: Yup.string().required("Address is required"),
            phone_number: Yup.string().required("phone number is required"),
            fathers_address: Yup.string().required(
              "Fathers address is required"
            ),
            mothers_address: Yup.string().required(
              "Mothers address is required"
            ),
            company_address: Yup.string().required(
              "Companys address is required"
            ),
            company_name: Yup.string().required("Company's name is required"),
            company_phone: Yup.string().required(
              "Company's phone number is required"
            ),
            ministry: Yup.string().required("Ministry is required"),
            employee_number: Yup.string().required(
              "Employee number is required"
            ),
            monthly_income: Yup.string().required("Monthly income is required"),
            bank_name: Yup.string().required("Bank name is required"),
            account_holder: Yup.string().required("Account holder is required"),
            account_number: Yup.string().required("Account number is required"),
            pay_date: Yup.string().required("Payment due date is required"),
            nib_number: Yup.string().required("Nib number is required"),
            marital_status: Yup.string().required("Marital status is required"),
          })}
          onSubmit={(values) => {
            dispatch(postLoanOnboarding(values));
          }}
        >
          {({ setFieldValue, handleChange, values }) => (
            <Form onChange={handleChange}>
              <section>
                <h3 className="pb-3 capitalize text-dark-3 text-base">
                  personal information
                </h3>
                <div className="flex flex-col gap-y-2.5">
                  <div className="flex items-center gap-x-3.5">
                    <FormInput
                      type="text"
                      name="first_name"
                      placeholder="First Name"
                    />
                    <FormInput
                      type="text"
                      name="middle_name"
                      placeholder="Middle Name"
                    />
                    <FormInput
                      type="text"
                      name="last_name"
                      placeholder="Last Name"
                    />
                  </div>
                  <div className="flex items-center gap-x-3.5">
                    <div className="w-1/2">
                      <FormSelect name="gender" required value={values.gender}>
                        <option value="" className="text-sm text-dark-3">
                          Gender
                        </option>
                        <option value="M">Male</option>
                        <option value="F">Female</option>
                      </FormSelect>
                    </div>
                    <div className="flex flex-col relative w-1/2">
                      <span className="absolute pl-4 text-xs text-dark-1">
                        Date of Birth
                      </span>
                      <FormInput
                        type="date"
                        name="dob"
                        placeholder="Date of Birth"
                      />
                    </div>
                  </div>
                  <div className="flex items-center gap-x-3.5">
                    <FormInput
                      type="text"
                      name="identity_number"
                      placeholder="National Id Number"
                    />
                    <FormInput
                      type="text"
                      name="identity_type"
                      placeholder="Means of Identification"
                    />
                    <FormSelect name="marital_status" required value={values.marital_status}>
                      <option value="">Marital Status</option>
                      <option value="married">Married</option>
                      <option value="Single">Single</option>
                    </FormSelect>
                  </div>
                  <div className="flex items-center gap-x-3.5">
                    <div className="flex flex-[0.5] items-center gap-x-3.5">
                      {/* <div className="w-1/4">
                        <FormSelect name="client_no_code" required>
                          <option value="">+234</option>
                          <option value="+234">+234</option>
                        </FormSelect>
                      </div> */}
                      <FormInput
                        type="text"
                        name="phone_number"
                        placeholder="Phone Number"
                      />
                    </div>
                    <div className="flex-[0.5]">
                      <FormInput
                        type="email"
                        name="email"
                        placeholder="Email Address"
                      />
                    </div>
                  </div>
                  <div className="">
                    <TextArea
                      name="address"
                      placeholder="Residentail Address"
                      required
                    />
                  </div>
                </div>
              </section>
              <section>
                <h3 className="py-3 capitalize text-dark-3 text-base">
                  Employer Details
                </h3>
                <div className="flex flex-col gap-y-2.5">
                  <div className="flex items-center gap-x-3.5">
                    <FormInput
                      type="text"
                      name="company_name"
                      placeholder="Company name"
                      employer
                    />
                    <FormInput
                      type="text"
                      name="company_phone"
                      placeholder="Phone Number"
                      employer
                    />
                  </div>
                  <div className="w-full">
                    <TextArea
                      name="company_address"
                      placeholder="Company address"
                      employer
                    />
                  </div>
                  <div className="flex items-center gap-x-3.5">
                    <FormSelect name="ministry" employer>
                      <option value="No">Select your Ministry</option>
                      <option value="Ministério dos Negócios Estrangeiros e Cooperação">
                        Ministério dos Negócios Estrangeiros e Cooperação
                      </option>
                      <option value="Ministério da Defesa Nacional">
                        Ministério da Defesa Nacional
                      </option>
                      <option value="Ministério do Interior">
                        Ministério do Interior
                      </option>
                      <option value="Ministério da Economia e Finanças">
                        Ministério da Economia e Finanças
                      </option>
                      <option value="Ministério dos Transportes e Comunicação">
                        Ministério dos Transportes e Comunicação
                      </option>
                      <option value="Ministério da Educação e Desenvolvimento Humano">
                        Ministério da Educação e Desenvolvimento Humano
                      </option>
                      <option value="Ministério da Cultura e Turismo">
                        Ministério da Cultura e Turismo
                      </option>
                      <option value="Ministério da Agricultura e Segurança Alimentar">
                        Ministério da Agricultura e Segurança Alimentar
                      </option>
                      <option value="Ministério do Trabalho, Emprego e Segurança Social">
                        Ministério do Trabalho, Emprego e Segurança Social
                      </option>
                      <option value="Ministério da Juventude e Desportos">
                        Ministério da Juventude e Desportos
                      </option>
                      <option value="Ministério da Saúde">
                        Ministério da Saúde
                      </option>
                      <option value="Ministério do Género, Criança e Acção Social">
                        Ministério do Género, Criança e Acção Social
                      </option>
                      <option value="Ministério da Terra, Ambiente e Desenvolvimento Rural">
                        Ministério da Terra, Ambiente e Desenvolvimento Rural
                      </option>
                      <option value="Ministério da Administração Estatal e Função Pública">
                        Ministério da Administração Estatal e Função Pública
                      </option>
                      <option value="Ministério do Mar, Águas Interiores e Pescas">
                        Ministério do Mar, Águas Interiores e Pescas
                      </option>
                      <option value="Ministério dos Recursos Minerais e Energia">
                        Ministério dos Recursos Minerais e Energia
                      </option>
                      <option value="Ministério das Obras Públicas, Habitação e Recursos Hídricos">
                        Ministério das Obras Públicas, Habitação e Recursos
                        Hídricos
                      </option>
                      <option value="Ministério da Indústria e Comércio">
                        Ministério da Indústria e Comércio
                      </option>
                      <option value="Ministério da Justiça e Assuntos Constitucionais e Religioso">
                        Ministério da Justiça e Assuntos Constitucionais e
                        Religioso
                      </option>
                      <option value="Ministério da Ciência e Tecnologia, Ensino Superior e Técnico-Profissional">
                        Ministério da Ciência e Tecnologia, Ensino Superior e
                        Técnico-Profissional
                      </option>
                      <option value="Ministério dos Combatentes">
                        Ministério dos Combatentes
                      </option>
                    </FormSelect>
                    <FormInput
                      type="text"
                      name="employee_number"
                      placeholder="Employee Number"
                      employer
                    />
                  </div>
                </div>
              </section>
              <section>
                <h3 className="py-3 capitalize text-dark-3 text-base">
                  Next of Kin (Mother)
                </h3>
                <div className="flex flex-col gap-y-2.5">
                  <FormInput
                    type="text"
                    name="mother_name"
                    placeholder="Full Name"
                  />
                  <TextArea name="mothers_address" placeholder="Address" />
                </div>
              </section>
              <section>
                <h3 className="py-3 capitalize text-dark-3 text-base">
                  Next of Kin (Father)
                </h3>
                <div className="flex flex-col gap-y-2.5">
                  <FormInput
                    type="text"
                    name="father_name"
                    placeholder="Full Name"
                  />
                  <TextArea
                    name="fathers_address"
                    placeholder="Address"
                    required
                  />
                </div>
              </section>
              <section>
                <h3 className="py-3 capitalize text-dark-3 text-base">
                  Salary Information
                </h3>
                <div className="flex flex-col gap-y-2.5">
                  <div className="w-full">
                    <FormInput
                      type="text"
                      name="monthly_income"
                      placeholder="Monthly Income"
                      employer
                    />
                  </div>
                  <div className="flex items-center gap-x-3.5">
                    <FormSelect name="bank_name" employer>
                      <option value="No">Bank</option>
                      <option value="Access bank Mozambique, S.A">
                        {" "}
                        Access bank Mozambique, S.A
                      </option>
                      <option value="Absa Bank Mozambique">
                        Absa Bank Mozambique
                      </option>
                      <option value="Banco Comercial e de Investimentos (BCI)">
                        Banco Comercial e de Investimentos (BCI)
                      </option>
                      <option value="Banco de Investimentos Global (BIG)">
                        {" "}
                        Banco de Investimentos Global (BIG)
                      </option>
                      <option value="Banco Mercantil e de Investimentos (BMI)">
                        Banco Mercantil e de Investimentos (BMI)
                      </option>
                      <option value="Banco MAIS">Banco MAIS</option>
                      <option value="Banco Moza">Banco Moza</option>
                      <option value="Banco Nacional de Investimentos (BNI)">
                        Banco Nacional de Investimentos (BNI)
                      </option>
                      <option value="Banco Société Générale Moçambique (SGM)">
                        Banco Société Générale Moçambique (SGM)
                      </option>
                      <option value="Banco Terra (BTM)">
                        Banco Terra (BTM)
                      </option>
                      <option value="Ecobank Mozambique">
                        Ecobank Mozambique
                      </option>
                      <option value="First National Bank (FNB)">
                        First National Bank (FNB)
                      </option>
                      <option value="First Capital Bank Mozambique (FCBM)">
                        {" "}
                        First Capital Bank Mozambique (FCBM)
                      </option>
                      <option value="Letshego Holdings Limited">
                        Letshego Holdings Limited
                      </option>
                      <option value="Millennium BIM (BIM)">
                        Millennium BIM (BIM)
                      </option>
                      <option value="Nedbank Mozambique (NBM)">
                        Nedbank Mozambique (NBM)
                      </option>
                      <option value="Opportunity Bank Mozambique (OBM)">
                        Opportunity Bank Mozambique (OBM)
                      </option>
                      <option value=" Socremo Microfinance Bank">
                        {" "}
                        Socremo Microfinance Bank
                      </option>
                      <option value="United Bank for Africa (UBA)">
                        United Bank for Africa (UBA)
                      </option>
                      <option value="Standard Bank Mozambique">
                        Standard Bank Mozambique
                      </option>
                    </FormSelect>
                    <FormInput
                      type="text"
                      name="account_holder"
                      placeholder="Account Holder"
                      employer
                    />
                    <FormInput
                      type="text"
                      name="account_number"
                      placeholder="Account Number"
                      employer
                    />
                  </div>
                  <div className="w-full flex items-center gap-x-3.5">
                    <div className="flex flex-col relative w-1/2">
                      <span className="absolute pl-4 text-xs text-dark-1">
                        Salary Payment Due Date
                      </span>
                      <FormInput
                        type="date"
                        name="pay_date"
                        placeholder="Salary Payment Date"
                        employer
                      />
                    </div>
                    <div className="w-1/2">
                      <FormInput
                        type="text"
                        name="nib_number"
                        placeholder="Nib Number"
                        employer
                      />
                    </div>
                  </div>
                </div>
              </section>
              <div className="flex items-center gap-x-4 pt-5">
                <div className="w-200 h-62">
                  <Button
                    btnText="Submit"
                    btnType="submit"
                    loading={isLoading}
                  />
                </div>
                <div className="w-200 h-62">
                  <Button
                    btnText="Cancel"
                    btnType="button"
                    className="bg-red-3"
                    disabled
                  />
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </main>
    </div>
  );
};

export default LoanOnboarding;
