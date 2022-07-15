import Button from "./components/Button";
import InputField from "./components/InputField";
import InputSelect from "./components/InputSelect";
import UploadInput from "./components/UploadInput";

const CreateEmployee = () => {
    //   const InputFields=[
    //     {
    //         label:"Employee Name",
    //         type:"text"
    //     },
    //     {
    //         label:"Employee ID",
    //         type:"text"
    //     },
    //     {
    //         label:"Email",
    //         type:"text"
    //     },
    //     {
    //         label:"Joining Date",
    //         type:"text"
    //     },
    //     {
    //         label:"Role",
    //         type:"text"
    //     },
    //     {
    //         label:"Status",
    //         type:"text"
    //     },
    //     {
    //         label:"Experience",
    //         type:"text"
    //     },
    //     {
    //         label:"Address",
    //         type:"text"
    //     },
    //     {
    //         label:"Upload ID Proof",
    //         type:"file"
    //     },
    //   ]
    return (
        <>
            <div>
                <h2>Create Employee</h2>
            </div>
            <form>
                <section className="form-section">
                    <div className="input-fields" id="input-fields">
                        {/* {InputFields.map(item=>(<InputField label={item.label} type={item.type}/>))} */}
                        <InputField label="Employee Name" type="text" />
                        <InputField label="Employee ID" type="text" />
                        <InputField label="Email" type="email" />
                        <InputField label="Joining Date" type="date" />
                        <InputSelect label="Role" options={['role1']} />
                        <InputSelect label="Status" options={['status1', 'status2']} />
                        <InputField label="Experience" type="text" />
                        <InputField label="Address" type="text" />
                        <UploadInput label="Upload ID Proof" />
                    </div>
                    <div className="buttons">
                        <Button label="Create" />
                        <Button label="Cancel" />
                    </div>
                </section>
            </form>
        </>
    );
};

export default CreateEmployee;
