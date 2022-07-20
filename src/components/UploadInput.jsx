const UploadInput = ({ label }) => {
    return (
        <div className="input-field">
            <label>Upload ID Proof</label>
            <div className="fileinput-label fileupload">
                <label>Choose Files</label>
                <label htmlFor="fileinput"> Browse </label>
            </div>
            <input type="file" id="fileinput" />
        </div>
    );
};

export default UploadInput
